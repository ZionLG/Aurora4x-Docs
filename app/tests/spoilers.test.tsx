import assert from 'node:assert/strict'
import test from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import DocsMarkdown from '../src/components/DocsMarkdown'
import Spoiler from '../src/components/Spoiler'
import SpoilerText from '../src/components/SpoilerText'
import { SpoilerContext } from '../src/hooks/useSpoilers'
import { SpoilerRegionContext } from '../src/hooks/useSpoilerRegion'
import { isSpoilerSection, spoilerSafeText } from '../src/utils/spoilers'

function render(markdown: string, show = false, protectedSection = false) {
  const content = <DocsMarkdown>{markdown}</DocsMarkdown>
  return renderToStaticMarkup(
    <SpoilerContext.Provider value={{ alwaysShowSpoilers: show, setAlwaysShowSpoilers: () => {} }}>
      {protectedSection ? <Spoiler text={markdown} block>{content}</Spoiler> : content}
    </SpoilerContext.Provider>,
  )
}

function plainText(html: string): string {
  return html.replace(/<span class="sr-only select-none">[\s\S]*?<\/span>/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&')
}

function elements(html: string, tag: string): string[] {
  return [...html.matchAll(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'g'))].map(match => match[1])
}

function assertHiddenRegions(html: string, count: number) {
  assert.equal((html.match(/role="button"/g) ?? []).length, count)
  assert.equal((html.match(/class="spoiler-content" aria-hidden="true" inert=""/g) ?? []).length, count)
  assert.equal((html.match(/data-state="hidden"/g) ?? []).length, count)
  assert.match(html, /data-spoiler-char/)
  assert.match(html, /data-glyph=/)
}

function assertRevealed(html: string) {
  assert.doesNotMatch(html, /\sinert(?:=|\s|>)|class="spoiler-content"[^>]*aria-hidden="true"|role="button"|data-state="hidden"/)
  assert.match(html, /data-state="revealed"/)
}

test('animated characters have one coherent assistive text copy and a decorative glyph layer', () => {
  const text = 'First line\nsecond line & punctuation.'
  const html = renderToStaticMarkup(
    <SpoilerRegionContext.Provider value={true}><SpoilerText>{text}</SpoilerText></SpoilerRegionContext.Provider>,
  )
  const copies = [...html.matchAll(/<span class="sr-only select-none">([\s\S]*?)<\/span>/g)]
  assert.equal(copies.length, 1)
  assert.equal(plainText(copies[0][1]), text)
  assert.match(html, /<span class="spoiler-glyphs" aria-hidden="true"><span class="spoiler-word">/)
  assert.equal((html.match(/data-spoiler-char/g) ?? []).length, Array.from(text.replace(/\s/g, '')).length)
  assert.equal(plainText(html), text, 'the selectable visual layer contains only one copy')
  assert.equal(renderToStaticMarkup(<SpoilerText>Ordinary text</SpoilerText>), 'Ordinary text')
})

test('revealed link text stays coherent for assistive technology while glyphs remain decorative', () => {
  const markdown = '||[Read this linked passage](https://example.com)||'
  const hidden = render(markdown)
  assertHiddenRegions(hidden, 1)
  const shown = render(markdown, true)
  assertRevealed(shown)
  assert.match(shown, /<a href="https:\/\/example.com"><span class="sr-only select-none">Read this linked passage<\/span>/)
  assert.match(shown, /class="spoiler-glyphs" aria-hidden="true"/)
  assert.equal(plainText(shown), 'Read this linked passage')
})

test('hidden inline spoilers retain formatting inside inert content with a keyboard reveal control', () => {
  const html = render('Before ||secret **emphasis** and [secret link](https://secret.example)|| after')
  assert.match(html, /Before/)
  assert.match(html, /after/)
  assert.match(html, /aria-label="Reveal spoiler"/)
  assert.match(html, /tabindex="0"/)
  assert.match(html, /aria-expanded="false"/)
  assertHiddenRegions(html, 1)
  assert.equal(plainText(html), 'Before secret emphasis and secret link after')
  assert.equal(plainText(elements(html, 'strong')[0]), 'emphasis')
  assert.match(html, /href="https:\/\/secret.example"/)
  assert.doesNotMatch(html, /\|\|/)
})

test('global reveal preserves Markdown emphasis and links inside spoilers', () => {
  const html = render('Before ||secret **emphasis** and [link](https://example.com)|| after', true)
  assertRevealed(html)
  assert.equal(plainText(html), 'Before secret emphasis and link after')
  assert.equal(plainText(elements(html, 'strong')[0]), 'emphasis')
  assert.match(html, /href="https:\/\/example.com"/)
  assert.doesNotMatch(html, /\|\|/)
})

test('spoilers in link labels also put the enclosing anchor inside the inert region', () => {
  for (const markdown of ['[||concealed label||](https://example.com)', '||[concealed label](https://example.com)||']) {
    const hidden = render(markdown)
    assertHiddenRegions(hidden, 1)
    assert.match(hidden, /class="spoiler-content" aria-hidden="true" inert=""><a href="https:\/\/example.com">/)
    assert.doesNotMatch(hidden, /<p><a/)
    const shown = render(markdown, true)
    assertRevealed(shown)
    assert.equal(plainText(shown), 'concealed label')
    assert.match(shown, /href="https:\/\/example.com"/)
  }
})

test('Discourse block spoilers retain paragraphs, lists, and code in one protected region', () => {
  const markdown = 'Visible\n\n[spoiler]\n\nHidden **first paragraph** with `inline_code`\n\n- Hidden list\n\n```js\nhidden_call()\n```\n\n[/spoiler]\n\nVisible again'
  const hidden = render(markdown)
  assertHiddenRegions(hidden, 1)
  assert.match(hidden, /Reveal spoiler section/)
  assert.equal(plainText(elements(hidden, 'strong')[0]), 'first paragraph')
  assert.equal(plainText(elements(hidden, 'li')[0]), 'Hidden list')
  assert.deepEqual(elements(hidden, 'code').map(plainText), ['inline_code', 'hidden_call()\n'])
  assert.match(hidden, /<pre><code class="language-js">/)
  const shown = render(markdown, true)
  assertRevealed(shown)
  assert.equal(plainText(shown), plainText(hidden))
  assert.doesNotMatch(shown, /\[\/?spoiler\]/)
})

test('inline Discourse spoilers work while code remains literal and unmatched delimiters remain text', () => {
  const hidden = render('Visible [spoiler]concealed prose[/spoiler] visible')
  assertHiddenRegions(hidden, 1)
  assert.equal(plainText(hidden), 'Visible concealed prose visible')
  assert.match(render('`||literal||`'), /<code>\|\|literal\|\|<\/code>/)
  assert.match(render('```text\n[spoiler]literal[/spoiler]\n```'), /<code class="language-text">\[spoiler\]literal\[\/spoiler\]\n<\/code>/)
  assert.match(render('Unclosed ||text'), /Unclosed \|\|text/)
})

test('all paragraphs and list items in a protected section share one reveal control', () => {
  const markdown = 'First paragraph.\n\nSecond **formatted** paragraph.\n\n- First item\n- Second item'
  const hidden = render(markdown, false, true)
  assertHiddenRegions(hidden, 1)
  assert.match(hidden, /aria-label="Reveal spoiler section"/)
  assert.equal(elements(hidden, 'p').length, 2)
  assert.equal(plainText(elements(hidden, 'strong')[0]), 'formatted')
  assert.deepEqual(elements(hidden, 'li').map(plainText), ['First item', 'Second item'])
  for (const paragraph of [...elements(hidden, 'p'), ...elements(hidden, 'li')]) {
    assert.doesNotMatch(paragraph, /role="button"|data-spoiler-region/)
    assert.match(paragraph, /data-spoiler-char/)
  }
  const shown = render(markdown, true, true)
  assertRevealed(shown)
  assert.equal(plainText(shown), plainText(hidden))
})

test('protected tables retain their rows and cells under one section reveal control', () => {
  const markdown = '| Name | Value |\n| --- | --- |\n| Formula | `secret_code` |'
  const hidden = render(markdown, false, true)
  assertHiddenRegions(hidden, 1)
  assert.equal(elements(hidden, 'tr').length, 2)
  assert.deepEqual(elements(hidden, 'th').map(plainText), ['Name', 'Value'])
  assert.deepEqual(elements(hidden, 'td').map(plainText), ['Formula', 'secret_code'])
  for (const cell of [...elements(hidden, 'th'), ...elements(hidden, 'td')]) {
    assert.doesNotMatch(cell, /role="button"|data-spoiler-region/)
    assert.match(cell, /data-spoiler-char/)
  }
  assert.equal(plainText(elements(hidden, 'code')[0]), 'secret_code')
  const shown = render(markdown, true, true)
  assertRevealed(shown)
  assert.equal(plainText(shown), plainText(hidden))
})

test('protected headings and fenced code retain their original structure', () => {
  const headings = render('# First\n\n## Second\n\n### Third\n\n#### Fourth\n\n##### Fifth\n\n###### Sixth', false, true)
  assertHiddenRegions(headings, 1)
  for (let level = 1; level <= 6; level++) {
    const heading = elements(headings, `h${level}`)[0]
    assert.doesNotMatch(heading, /role="button"|data-spoiler-region/)
    assert.match(heading, /data-spoiler-char/)
  }

  const code = render('```js\nsecret_call()\nsecond_line()\n```', false, true)
  assertHiddenRegions(code, 1)
  assert.equal(elements(code, 'pre').length, 1)
  assert.equal(plainText(elements(code, 'code')[0]), 'secret_call()\nsecond_line()\n')
  assert.match(code, /<code class="language-js">/)
})

test('classifies discoveries without concealing ordinary NPR and species rules', () => {
  for (const title of ['New Spoiler Race', 'The Ancients', 'Enhanced Precursors', 'Ancient Constructs', 'Aether Gate Detection and Prevention', 'Ruins in Sol']) {
    assert.equal(isSpoilerSection(title), true, title)
  }
  for (const title of ['NPR Ground Forces', 'Non-Oxygen Species', 'New Species Attributes', 'Geological Surveys']) {
    assert.equal(isSpoilerSection(title), false, title)
  }
})

test('preview redaction runs before truncation for both spoiler syntaxes', () => {
  assert.equal(spoilerSafeText('Before ||secret\ntext|| after [spoiler]another secret[/spoiler].'), 'Before [Spoiler] after [Spoiler].')
})

test('nested and mixed markers share one reveal target and previews still redact all hidden prose', () => {
  for (const markdown of [
    '[spoiler]outer [spoiler]inner[/spoiler] hidden tail[/spoiler]',
    '||outer [spoiler]inner[/spoiler] hidden tail||',
    '[spoiler]outer ||inner|| hidden tail[/spoiler]',
    '[spoiler]\n\nouter\n\n[spoiler]\n\ninner\n\n[/spoiler]\n\nhidden tail\n\n[/spoiler]',
  ]) {
    const hidden = render(markdown)
    assertHiddenRegions(hidden, 1)
    assert.match(plainText(hidden), /hidden tail/)
    assert.equal(spoilerSafeText(markdown), '[Spoiler]')
    const shown = render(markdown, true)
    assertRevealed(shown)
    assert.equal(plainText(shown), plainText(hidden))
    assert.doesNotMatch(shown, /\[\/?spoiler\]|\|\|/)
  }
})

test('explicit spoilers throughout a protected section use its single reveal control', () => {
  const hidden = render('First ||nested secret|| last.\n\nSecond [spoiler]nested secret[/spoiler] paragraph.', false, true)
  assertHiddenRegions(hidden, 1)
  assert.match(hidden, /aria-label="Reveal spoiler section"/)
  assert.equal(plainText(hidden), 'First nested secret last.\nSecond nested secret paragraph.')
})

test('separate explicit spoilers outside a protected section retain local reveal controls', () => {
  const hidden = render('First ||secret one|| and second [spoiler]secret two[/spoiler].')
  assertHiddenRegions(hidden, 2)
  assert.equal(plainText(hidden), 'First secret one and second secret two.')
  assert.doesNotMatch(hidden, /Reveal spoiler section/)
})

test('incomplete spoilers are conservatively redacted in previews', () => {
  assert.equal(spoilerSafeText('Public [spoiler]hidden tail'), 'Public [Spoiler]')
  assert.equal(spoilerSafeText('Public ||hidden tail'), 'Public [Spoiler]')
})
