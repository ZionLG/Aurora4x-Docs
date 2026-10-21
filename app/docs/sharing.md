# Sharing documentation in Discord

Use the topic's **Copy link** control or a section's link control to copy a shareable URL. The links retain the selected topic, section, and changelog version. Existing `#current/...` and `#changelog/...` links still open normally.

Section navigation keeps the heading below the sticky controls while images, fonts, and community notes load. Scrolling or interacting with the page stops these adjustments. The contents list closes after choosing a section. Repeated section titles receive distinct anchors (for example, `maintenance-storage-bays-2`); existing links without a suffix continue to open the first occurrence.

Discord and other chat clients cannot read the part of a URL after `#`. During `npm run build`, the existing Markdown exporter also generates static HTML pages containing Open Graph and Twitter metadata:

- `/share/current/{topic}.html`
- `/share/current/{topic}/{section}.html`
- `/share/changelog/{topic}/{version}.html`
- `/share/changelog/{topic}/{version}/{section}.html`

Discord reads a server-rendered [component embed](https://docs.discord.com/developers/link-previews/component-embeds) from each page: a cyan-accented card with a heading, topic/version context, Markdown paragraphs and lists, the first relevant section image, and a button opening the exact section. Short sections appear in full. Longer sections end at a readable boundary with a “Read full section” button, because Discord limits the entire serialized component payload to 3,000 UTF-8 bytes (including JSON escaping). The limit applies to the whole card, not just its text.

Open Graph and Twitter metadata remain available for other clients and Discord's fallback preview. These use up to 350 bytes of plain description text, without repeating the section heading, and include the section image when available. A browser redirects to the matching interactive documentation route. Each page also includes a normal link for visitors with JavaScript disabled. The pages use the same parsed and merged documentation as the app, so no separate preview content needs maintaining.

Absolute button and canonical URLs use the build-time `SITE_URL` when supplied. Otherwise Vercel production builds use `VERCEL_PROJECT_PRODUCTION_URL`, preview builds use `VERCEL_URL`, and local builds default to `https://aurora4x-docs.vercel.app`. To test the buttons locally, set `SITE_URL=http://localhost:5181` when building. Image URLs come from the source document; no images are generated or downloaded during the build.

Spoiler sections receive a generic title and description. Topic excerpts exclude spoiler sections, and explicit inline spoiler text is redacted from excerpts. The reader's local “Always show spoilers” preference never changes public preview metadata.

The Vercel SPA rewrite excludes `/share/` so these HTML pages are served directly. Missing share pages return a 404 instead of misleading homepage metadata. Builds must run the complete `npm run build` command, including the exporter after Vite. To check locally, run `npm run preview` after building and open a `/share/...html` URL; Vite's development server does not generate these pages.

For example, a historical section link such as `#changelog/ground-forces/1.0.0/ground-based-geological-survey` becomes `/share/changelog/ground-forces/1.0.0/ground-based-geological-survey.html`. The former unreleased `2.8.0` version normalizes to `3.0.0` when copying a new link, including the renamed bug-fix and minor-change section anchors. Changelog previews explicitly label unreleased versions.

Discord caches previews for about 30 minutes. After deployment, append a fresh query such as `?v=2` to a shared URL, or use Discord's [Embed Debugger](https://discord.com/developers/embeds), to inspect the new card. The final appearance also depends on the channel's embed permissions and the reader's client settings. The component-embed tests check actual serialized payload sizes, full short sections, exact destinations, and spoiler redaction; the generated HTML is in `dist/share/`.
