import assert from 'node:assert/strict'
import test from 'node:test'
import { animateSpoiler, spoilerGlyph } from '../src/utils/spoilerAnimation'

class FrameClock {
  pending = new Map<number, FrameRequestCallback>()
  nextId = 0
  reducedMotion = false
  requestAnimationFrame = (callback: FrameRequestCallback) => {
    const id = ++this.nextId
    this.pending.set(id, callback)
    return id
  }
  cancelAnimationFrame = (id: number) => { this.pending.delete(id) }
  matchMedia = () => ({ matches: this.reducedMotion })
  frame(timestamp: number) {
    const callbacks = [...this.pending.values()]
    this.pending.clear()
    callbacks.forEach(callback => callback(timestamp))
  }
}

class Character {
  attributes = new Map<string, string>()
  constructor(public textContent: string, public region: Region) {}
  closest() { return this.region }
  getAttribute(name: string) { return this.attributes.get(name) ?? null }
  setAttribute(name: string, value: string) { this.attributes.set(name, value) }
  removeAttribute(name: string) { this.attributes.delete(name) }
  hasAttribute(name: string) { return this.attributes.has(name) }
}

class Region {
  characters: Character[]
  ownerDocument: { defaultView: FrameClock }
  constructor(public clock: FrameClock, text = 'Secret words stay exactly in place') {
    this.ownerDocument = { defaultView: clock }
    this.characters = [...text].map(character => new Character(character, this))
  }
  querySelectorAll() { return this.characters }
  element() { return this as unknown as HTMLElement }
}

const visible = (character: Character) => character.getAttribute('data-resolved') === 'true'

test('reveals in randomized order, flickers at 40ms, and never changes source text', () => {
  const clock = new FrameClock()
  const root = new Region(clock)
  const original = root.characters.map(character => character.textContent)
  let completed = 0
  animateSpoiler(root.element(), true, () => { completed++ })

  clock.frame(0)
  const initialGlyphs = root.characters.map(character => character.getAttribute('data-glyph'))
  clock.frame(20)
  assert.deepEqual(root.characters.map(character => character.getAttribute('data-glyph')), initialGlyphs)
  clock.frame(40)
  assert.notDeepEqual(root.characters.map(character => character.getAttribute('data-glyph')), initialGlyphs)
  clock.frame(400)
  const states = root.characters.map(visible)
  assert.ok(states.includes(true) && states.includes(false))
  assert.ok(states.some((shown, index) => shown && states.slice(0, index).includes(false)), 'reveal is not a left-to-right wipe')
  assert.equal(completed, 0)
  clock.frame(800)
  assert.ok(root.characters.every(visible))
  assert.deepEqual(root.characters.map(character => character.textContent), original)
  assert.equal(completed, 1)
  assert.equal(clock.pending.size, 0)
})

test('hides over 450ms and leaves deterministic glyphs at rest', () => {
  const clock = new FrameClock()
  const root = new Region(clock)
  root.characters.forEach(character => character.setAttribute('data-resolved', 'true'))
  let completed = false
  animateSpoiler(root.element(), false, () => { completed = true })
  clock.frame(0)
  clock.frame(225)
  assert.ok(root.characters.some(visible) && root.characters.some(character => !visible(character)))
  assert.equal(completed, false)
  clock.frame(450)
  assert.ok(root.characters.every(character => !visible(character)))
  root.characters.forEach((character, index) => assert.equal(character.getAttribute('data-glyph'), spoilerGlyph(index)))
  assert.equal(completed, true)
})

test('nested spoiler regions are excluded from the parent animation', () => {
  const clock = new FrameClock()
  const root = new Region(clock, 'outer')
  const nested = new Region(clock, 'inner')
  root.characters.push(...nested.characters)
  animateSpoiler(root.element(), true, () => {})
  clock.frame(0)
  clock.frame(800)
  assert.ok(root.characters.filter(character => character.region === root).every(visible))
  assert.ok(nested.characters.every(character => character.attributes.size === 0))
})

test('cancellation leaves the current state intact and reversal resumes from it', () => {
  const clock = new FrameClock()
  const root = new Region(clock)
  let revealCompleted = 0
  let hideCompleted = 0
  const cancel = animateSpoiler(root.element(), true, () => { revealCompleted++ })
  clock.frame(0)
  clock.frame(400)
  const halfway = root.characters.map(character => [...character.attributes])
  cancel()
  cancel()
  clock.frame(500)
  assert.deepEqual(root.characters.map(character => [...character.attributes]), halfway)
  assert.equal(clock.pending.size, 0)
  assert.equal(revealCompleted, 0)
  animateSpoiler(root.element(), false, () => { hideCompleted++ })
  assert.deepEqual(root.characters.map(character => [...character.attributes]), halfway)
  clock.frame(500)
  clock.frame(950)
  assert.ok(root.characters.every(character => !visible(character)))
  assert.equal(hideCompleted, 1)
})

test('reduced motion settles immediately without scheduling animation', () => {
  const clock = new FrameClock()
  clock.reducedMotion = true
  const root = new Region(clock)
  let completed = 0
  const cancel = animateSpoiler(root.element(), true, () => { completed++ })
  assert.ok(root.characters.every(visible))
  assert.equal(clock.pending.size, 0)
  assert.equal(completed, 1)
  cancel()
  animateSpoiler(root.element(), false, () => { completed++ })
  assert.ok(root.characters.every(character => !visible(character)))
  assert.equal(completed, 2)
})

test('empty and already-settled regions complete once without waiting', () => {
  const clock = new FrameClock()
  let completed = 0
  for (const root of [new Region(clock, ''), new Region(clock)]) {
    const cancel = animateSpoiler(root.element(), false, () => { completed++ })
    cancel()
  }
  assert.equal(completed, 2)
  assert.equal(clock.pending.size, 0)
})

test('glyphs are deterministic, change by frame, and accept negative indices', () => {
  assert.equal(spoilerGlyph(7), spoilerGlyph(7, 0))
  assert.notEqual(spoilerGlyph(7), spoilerGlyph(7, 1))
  assert.equal([...spoilerGlyph(-1)].length, 1)
})
