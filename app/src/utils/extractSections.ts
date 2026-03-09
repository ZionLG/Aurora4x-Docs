export interface MarkdownSection {
  title: string;
  content: string;
  /** If set, this section was superseded by this version */
  deprecatedBy?: string;
}

/**
 * Parses a markdown string into sections delimited by **bold title** lines.
 *
 * If `filterTitles` is provided, only returns matching sections.
 * If `deprecated` is provided, marks matching sections with their superseding version.
 */
export function parseSections(
  markdown: string,
  filterTitles?: string[],
  deprecated?: Record<string, string>,
): MarkdownSection[] {
  const lines = markdown.split('\n');
  const sections: MarkdownSection[] = [];
  let current: { title: string; lines: string[] } | null = null;

  for (const line of lines) {
    const match = line.match(/^\*\*(.+?)\*\*\s*$/);
    if (match) {
      // Flush previous section
      if (current) {
        sections.push({
          title: current.title,
          content: current.lines.join('\n').trim(),
        });
      }
      current = { title: match[1], lines: [line] };
    } else if (current) {
      current.lines.push(line);
    } else {
      // Content before any bold title — treat as untitled intro
      if (line.trim()) {
        if (!current) current = { title: '', lines: [line] };
      }
    }
  }

  // Flush last section
  if (current) {
    sections.push({
      title: current.title,
      content: current.lines.join('\n').trim(),
    });
  }

  // Filter if needed
  let result = sections;
  if (filterTitles && filterTitles.length > 0) {
    const allowed = new Set(filterTitles.map(t => t.toLowerCase()));
    result = result.filter(s => allowed.has(s.title.toLowerCase()));
  }

  // Mark deprecated sections
  if (deprecated) {
    const depLower = new Map(
      Object.entries(deprecated).map(([k, v]) => [k.toLowerCase(), v])
    );
    result = result.map(s => ({
      ...s,
      deprecatedBy: depLower.get(s.title.toLowerCase()),
    }));
  }

  return result;
}

/**
 * Simple extraction: returns filtered markdown as a single string.
 * Use parseSections() when you need per-section deprecation info.
 */
export function extractSections(markdown: string, filterTitles?: string[]): string {
  if (!filterTitles || filterTitles.length === 0) return markdown;
  const sections = parseSections(markdown, filterTitles);
  return sections.map(s => s.content).join('\n\n');
}
