# Sharing documentation in Discord

Use the topic's **Copy link** control or a section's link control to copy a shareable URL. The links retain the selected topic, section, and changelog version. Existing `#current/...` and `#changelog/...` links still open normally.

Section navigation keeps the heading below the sticky controls while images, fonts, and community notes load. Scrolling or interacting with the page stops these adjustments. The contents list closes after choosing a section. Repeated section titles receive distinct anchors (for example, `maintenance-storage-bays-2`); existing links without a suffix continue to open the first occurrence.

Discord and other chat clients cannot read the part of a URL after `#`. During `npm run build`, the existing Markdown exporter also generates static HTML pages containing Open Graph and Twitter metadata:

- `/share/current/{topic}.html`
- `/share/current/{topic}/{section}.html`
- `/share/changelog/{topic}/{version}.html`
- `/share/changelog/{topic}/{version}/{section}.html`

Chat clients read the title and a short excerpt directly from those pages. A browser redirects to the matching interactive documentation route. Each page also includes a normal link for visitors with JavaScript disabled. The pages use the same parsed and merged documentation as the app, so no separate preview content needs maintaining. They contain no hardcoded production hostname and work on preview deployments too.

Spoiler sections receive a generic title and description. Topic excerpts exclude spoiler sections, and explicit inline spoiler text is redacted from excerpts. The reader's local “Always show spoilers” preference never changes public preview metadata.

The Vercel SPA rewrite excludes `/share/` so these HTML pages are served directly. Missing share pages return a 404 instead of misleading homepage metadata. Builds must run the complete `npm run build` command, including the exporter after Vite. To check locally, run `npm run preview` after building and open a `/share/...html` URL; Vite's development server does not generate these pages.

For example, a historical section link such as `#changelog/ground-forces/1.0.0/ground-based-geological-survey` becomes `/share/changelog/ground-forces/1.0.0/ground-based-geological-survey.html`. The former unreleased `2.8.0` version normalizes to `3.0.0` when copying a new link, including the renamed bug-fix and minor-change section anchors. Changelog previews explicitly label unreleased versions.

Discord may cache a previously fetched preview. The final appearance also depends on the channel's embed permissions and the reader's client settings. The HTML can be verified before deployment with the share-preview tests and the generated files in `dist/share/`.
