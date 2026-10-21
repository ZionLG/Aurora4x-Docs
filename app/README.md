# Aurora 4x documentation

React, TypeScript, Vite, and Tailwind archive of Steve's Aurora forum documentation. The current view merges release changes into topic articles; the changelog view retains each version's original sections. Upcoming changes remain marked Planned.

## Development

Run from this folder:

```powershell
npm ci
npm run dev
npm test
npm run build
npm run preview
```

`npm test` checks search destinations, spoiler rendering, share previews, and the imported forum content. The production build also creates Markdown downloads and static Discord preview pages. Use the preview server to test those generated pages.

## Updating content

Follow [CONTENT_UPDATES.md](CONTENT_UPDATES.md). The v3.0.0 source is the forum topic formerly named v2.8.0 and is still unreleased. Existing version and renamed-section bookmarks are normalized in `src/utils/shareLinks.ts`.

## Reader controls

- Search stays open when selecting results. Clear it with the x button or Escape while the search field has focus. Current search follows the merged article sections; changelog results retain the source version.
- Spoilers keep their original paragraph, table, link, and code layout. Click, tap, Enter, or Space unscrambles the entire protected section in place; reduced-motion skips the animation. Explicit inline or block spoilers outside a protected section reveal their own marked group. Always show spoilers instantly reveals everything and persists across navigation and reloads. Turning it off restores masks except for sections and marked groups already revealed by the reader, which remain revealed while that section is displayed. Concealed text stays in the DOM to reserve its exact dimensions, with inert content hidden from assistive technology; public share previews still redact spoilers.
- Write inline spoilers as `||text with **Markdown**||` or `[spoiler]text[/spoiler]`. Put `[spoiler]` and `[/spoiler]` on separate lines for a multi-paragraph block. The section classifier in `src/utils/spoilers.ts` also protects named special races and discoveries in existing official documents.
- Copy MD includes all content, including spoilers. Search excerpts and public link previews redact marked spoilers.
- Use Copy link for Discord for a topic or Copy section link beneath a section. See [sharing.md](docs/sharing.md).

## Code ownership and data flow

`src/manifest.ts` routes forum sections to topics. `App.tsx` loads the local documentation cache; `mergeContent.ts` supplies current articles and the search index. `ContentArea.tsx` renders through `DocsMarkdown.tsx`, which adds spoiler syntax without enabling arbitrary HTML. `SpoilerProvider.tsx` owns the browser preference; article and search consumers read it.

The build exporter reuses the parser and merger to produce Markdown and share metadata. These changes do not alter the community-note API or database schema. Runtime state stays in React and localStorage; no new remote service or dependency is required.

## Verification notes

The October 2026 update was checked with a production build, 48 regression tests, a complete official-post/routing audit, and browser checks for navigation and spoiler animation. Full-repository lint still reports existing errors in the theme/button exports and Vite middleware typing, plus an AdminPanel hook warning. The changed frontend components and helpers pass focused lint checks.
