/** Deliberately limited to discoveries and named special races, not ordinary NPR rules. */
export function isSpoilerSection(title: string): boolean {
  return /\b(spoilers?|precursors?|rakhas|eldar|invaders?|swarm|ancients?|aether (?:gates?|rifts?|raiders?))\b/i.test(title)
    || /^(?:Chance of Ruins|Recovering Technology and Ship Components from Ruins|Ruins in Sol|Ruin and Ancient Construct Changes)$/i.test(title)
}

/** The currently open delimiter determines which syntax can close it. */
export function spoilerMarkerAction(marker: string, opening?: string): 'open' | 'close' | 'literal' {
  const token = marker.toLowerCase()
  if (token === '[spoiler]') return 'open'
  if (token === '[/spoiler]') return opening === '[spoiler]' ? 'close' : 'literal'
  return opening === '||' ? 'close' : 'open'
}

/** Use before excerpting; nested markers match the renderer, incomplete spoilers redact to EOF. */
export function spoilerSafeText(text: string): string {
  const openings: string[] = []
  let result = ''
  let visibleStart = 0
  for (const match of text.matchAll(/\[\/?spoiler\]|\|\|/gi)) {
    const action = spoilerMarkerAction(match[0], openings.at(-1))
    if (action === 'open') {
      if (!openings.length) result += text.slice(visibleStart, match.index)
      openings.push(match[0].toLowerCase())
    } else if (action === 'close') {
      openings.pop()
      if (!openings.length) {
        result += '[Spoiler]'
        visibleStart = match.index + match[0].length
      }
    }
  }
  return result + (openings.length ? '[Spoiler]' : text.slice(visibleStart))
}
