# Updating Aurora documentation

The authoritative sources are Steve's [v3.0.0 patch notes](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-november-1st-2026/49), released November 1, 2026, and [v3.1.0 notes](https://aurora4x.com/t/aurora-v3-1-0-3rd-november-2026/1268), released November 3, 2026. The 3.0 topic was formerly titled v2.8.0.

From `app/`, run:

```powershell
node scripts/sync-forum-docs.mjs --version 3.0.0
node scripts/sync-forum-docs.mjs --version 3.1.0
npx tsx scripts/validate-forum-docs.ts
npm run build
```

The importer reads the Discourse JSON topic, follows the complete `post_stream.stream` through paginated topic responses, and fails if any post is missing. It imports Steve's normal content posts and skips empty system posts. It refreshes existing posts too, because bug fixes and minor changes are edited into the opening post.

Conversion uses Turndown, retains tables, converts Discourse spoilers to `||...||`, replaces lightbox thumbnails with original images, and removes image metadata. The opening post's duplicate index is omitted. Subheadings are converted to Markdown headings so the app's standalone-bold section parser keeps them with their parent post. Each section includes a source link. Existing straight-quote section titles are retained to preserve anchors; Steve's prose is otherwise retained.

The generated `public/docs/v{version}/source.json` records source post IDs/numbers, update dates, release date, omitted system posts, section count, and a hash of the Markdown. For a new release, add its topic ID, slug, and release date to the importer’s `releases` table and register it in the manifest. Confirm the live topic title and release status; search results may be stale. For repeatable offline conversion, pass `--source-json path/to/source.json` with an object containing the topic response as `topic` and the complete post array as `posts`.

After importing, review every new section and add its route to `src/manifest.ts` `sectionMap`, then add the affected topic to `versionTopics`. The validator catches missing routes, duplicate titles, lost subheadings/tables, and incomplete source provenance. Review the content diff as well: source edits can change or remove existing details.

The November 3 refresh includes all 64 content posts (68 sections) for 3.0 and all 5 content posts (5 sections) for 3.1. Empty system posts are recorded in each source file. The removed “Background Colour and Map Fonts” post is superseded by “Map Fonts in Config File”; old section bookmarks resolve to that section. The superseded v2.8.0 snapshot is retained only in Git history. Old in-app v2.8.0 links resolve to v3.0.0.
