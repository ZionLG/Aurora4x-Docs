import assert from 'node:assert/strict'
import test, { type TestContext } from 'node:test'
import { trackSectionAnchor } from '../src/utils/sectionScroll'

type Listener = EventListenerOrEventListenerObject

class Events {
  private listeners: Array<{ type: string; listener: Listener; capture: boolean }> = []

  addEventListener(type: string, listener: Listener, options?: boolean | AddEventListenerOptions) {
    this.listeners.push({ type, listener, capture: typeof options === 'boolean' ? options : !!options?.capture })
  }

  removeEventListener(type: string, listener: Listener, options?: boolean | EventListenerOptions) {
    const capture = typeof options === 'boolean' ? options : !!options?.capture
    this.listeners = this.listeners.filter(item => item.type !== type || item.listener !== listener || item.capture !== capture)
  }

  emit(type: string, key?: string) {
    const event = Object.assign(new Event(type), { key })
    for (const { listener } of [...this.listeners].filter(item => item.type === type)) {
      if (typeof listener === 'function') listener(event)
      else listener.handleEvent(event)
    }
  }

  get listenerCount() { return this.listeners.length }
}

function fixture(t: TestContext, stickyHeights: number[] = []) {
  const frames = new Map<number, FrameRequestCallback>()
  let nextFrame = 1
  const cancelledFrames: number[] = []
  const observers: FakeResizeObserver[] = []

  class FakeResizeObserver {
    readonly observed: unknown[] = []
    disconnected = false
    constructor(readonly callback: () => void) { observers.push(this) }
    observe(element: unknown) { this.observed.push(element) }
    disconnect() { this.disconnected = true }
    resize() { if (!this.disconnected) this.callback() }
  }

  const globals = {
    requestAnimationFrame: (callback: FrameRequestCallback) => {
      const id = nextFrame++
      frames.set(id, callback)
      return id
    },
    cancelAnimationFrame: (id: number) => {
      cancelledFrames.push(id)
      frames.delete(id)
    },
    ResizeObserver: FakeResizeObserver,
  }
  const originals = Object.keys(globals).map(name => [name, Object.getOwnPropertyDescriptor(globalThis, name)] as const)
  for (const [name, value] of Object.entries(globals)) {
    Object.defineProperty(globalThis, name, { configurable: true, writable: true, value })
  }

  let finishFonts!: () => void
  const fonts = Object.assign(new Events(), { ready: new Promise<void>(resolve => { finishFonts = resolve }) })
  const doc = Object.assign(new Events(), {
    fonts,
    getElementById: (id: string) => id === 's-target' ? target : null,
  })
  const stickyControls = stickyHeights.map(height => ({
    height,
    getBoundingClientRect() { return { top: 100, height: this.height } },
  }))
  const calls: ScrollToOptions[] = []
  const container = {
    ownerDocument: doc,
    scrollTop: 0,
    getBoundingClientRect: () => ({ top: 100, height: 600 }),
    querySelectorAll: () => stickyControls,
    scrollTo(options: ScrollToOptions) {
      calls.push(options)
      this.scrollTop = options.top ?? this.scrollTop
    },
  }
  const target = {
    offset: 900,
    isConnected: true,
    firstElementChild: null as { tagName: string; open?: boolean; click?: () => void } | null,
    wrappedDetails: null as { tagName: string; open: boolean } | null,
    querySelector() { return this.wrappedDetails },
    getBoundingClientRect() { return { top: 100 + this.offset - container.scrollTop, height: 100 } },
  }
  let targetInContent = true
  const content = Object.assign(new Events(), { contains: (element: unknown) => targetInContent && element === target })
  const stops: Array<() => void> = []
  const start = (slug = 'target') => {
    const stop = trackSectionAnchor(container as unknown as HTMLElement, content as unknown as HTMLElement, slug)
    stops.push(stop)
    return stop
  }
  const flushFrame = () => {
    const queued = [...frames.values()]
    frames.clear()
    queued.forEach(callback => callback(0))
  }
  let cleaned = false
  const cleanup = () => {
    if (cleaned) return
    stops.forEach(stop => stop())
    for (const [name, original] of originals) {
      if (original) Object.defineProperty(globalThis, name, original)
      else Reflect.deleteProperty(globalThis, name)
    }
    cleaned = true
  }
  t.after(cleanup)
  return {
    start, flushFrame, frames, calls, container, content, target, doc, fonts, finishFonts,
    observers, stickyControls, cancelledFrames, cleanup,
    excludeTarget: () => { targetInContent = false },
  }
}

test('late image loads and content resizing keep the linked section aligned', t => {
  const f = fixture(t)
  const stop = f.start()
  t.after(stop)
  f.flushFrame()
  assert.equal(f.container.scrollTop, 884)

  f.target.offset += 240
  f.content.emit('load')
  f.observers[0].resize()
  assert.equal(f.frames.size, 1, 'related load and resize events coalesce into one alignment')
  f.flushFrame()
  assert.equal(f.container.scrollTop, 1124)
  assert.equal(f.target.getBoundingClientRect().top, 116)

  f.target.offset -= 40
  f.content.emit('error')
  f.flushFrame()
  assert.equal(f.container.scrollTop, 1084, 'a failed image changing layout also re-aligns')
  assert.ok(f.calls.every(call => call.behavior === 'instant'))
})

test('stacked sticky controls and later header size changes remain above the target', t => {
  const f = fixture(t, [44, 56])
  const stop = f.start()
  t.after(stop)
  f.flushFrame()
  assert.equal(f.container.scrollTop, 784)
  assert.equal(f.target.getBoundingClientRect().top, 216)
  assert.deepEqual(f.observers[0].observed, [f.content, f.container, ...f.stickyControls])

  f.stickyControls[1].height = 76
  f.observers[0].resize()
  f.flushFrame()
  assert.equal(f.container.scrollTop, 764)
  assert.equal(f.target.getBoundingClientRect().top, 236)
})

test('font readiness and subsequent font loads re-align the section', async t => {
  const f = fixture(t)
  const stop = f.start()
  t.after(stop)
  f.flushFrame()
  f.target.offset += 60
  f.finishFonts()
  await f.fonts.ready
  f.flushFrame()
  assert.equal(f.container.scrollTop, 944)

  f.target.offset += 20
  f.fonts.emit('loadingdone')
  f.flushFrame()
  assert.equal(f.container.scrollTop, 964)
})

test('wheel, touch, and pointer input release the anchor instead of fighting the reader', t => {
  for (const event of ['wheel', 'touchstart', 'pointerdown']) {
    const f = fixture(t)
    const stop = f.start()
    t.after(stop)
    f.flushFrame()
    f.target.offset += 100
    f.content.emit('load')
    f.doc.emit(event)
    f.container.scrollTop = 200
    f.observers[0].resize()
    f.content.emit('load')
    f.flushFrame()
    assert.equal(f.container.scrollTop, 200, event)
    assert.equal(f.calls.length, 1, event)
    assert.equal(f.frames.size, 0, event)
    assert.equal(f.doc.listenerCount, 0, event)
    assert.equal(f.observers[0].disconnected, true, event)
    f.cleanup()
  }
})

test('scrolling keys release the anchor while unrelated keys keep it active', t => {
  for (const key of ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']) {
    const f = fixture(t)
    const stop = f.start()
    t.after(stop)
    f.doc.emit('keydown', key)
    f.flushFrame()
    assert.equal(f.calls.length, 0, key)
    assert.equal(f.frames.size, 0, key)
    f.cleanup()
  }
  const f = fixture(t)
  const stop = f.start()
  t.after(stop)
  f.doc.emit('keydown', 'a')
  f.flushFrame()
  assert.equal(f.calls.length, 1)
})

test('navigation cleanup cancels pending work and ignores later font and load callbacks', async t => {
  const f = fixture(t)
  const stop = f.start()
  assert.equal(f.frames.size, 1)
  stop()
  stop()
  assert.equal(f.cancelledFrames.length, 1, 'cleanup is idempotent')
  assert.equal(f.frames.size, 0)
  assert.equal(f.content.listenerCount, 0)
  assert.equal(f.doc.listenerCount, 0)
  assert.equal(f.fonts.listenerCount, 0)
  assert.equal(f.observers[0].disconnected, true)

  f.finishFonts()
  await f.fonts.ready
  f.content.emit('load')
  f.fonts.emit('loadingdone')
  f.observers[0].resize()
  f.flushFrame()
  assert.equal(f.frames.size, 0)
  assert.equal(f.calls.length, 0)
})

test('missing targets and targets outside the selected article do nothing', t => {
  const f = fixture(t)
  f.start('not-a-real-section')()
  f.excludeTarget()
  f.start()()
  f.flushFrame()
  assert.equal(f.observers.length, 0)
  assert.equal(f.frames.size, 0)
  assert.equal(f.calls.length, 0)
  assert.equal(f.doc.listenerCount, 0)
})

test('a target removed before the next frame is not scrolled into view', t => {
  const f = fixture(t)
  const stop = f.start()
  t.after(stop)
  f.target.isConnected = false
  f.flushFrame()
  assert.equal(f.calls.length, 0)
})

test('direct collapsed patch details open while a spoiler reveal control stays untouched', t => {
  const f = fixture(t)
  const details = { tagName: 'DETAILS', open: false }
  f.target.firstElementChild = details
  const stop = f.start()
  assert.equal(details.open, true)
  stop()

  let revealed = false
  const spoiler = { tagName: 'BUTTON', click: () => { revealed = true } }
  f.target.firstElementChild = spoiler
  const stopSpoiler = f.start()
  t.after(stopSpoiler)
  f.flushFrame()
  assert.equal(revealed, false)
  assert.equal(f.target.firstElementChild, spoiler)
})

test('linked patch details inside a section spoiler expand without revealing the section', t => {
  const f = fixture(t)
  let revealed = false
  const spoiler = { tagName: 'DIV', click: () => { revealed = true } }
  f.target.firstElementChild = spoiler
  f.target.wrappedDetails = { tagName: 'DETAILS', open: false }
  f.start()
  f.flushFrame()
  assert.equal(f.target.wrappedDetails.open, true)
  assert.equal(revealed, false)
  assert.equal(f.target.firstElementChild, spoiler)
})
