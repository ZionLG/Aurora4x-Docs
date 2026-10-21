# Updating Aurora documentation

The authoritative source is Steve's [Aurora v3.0.0 patch-note topic](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49). This is the same topic formerly titled v2.8.0. It remains **unreleased**; the latest source edit in this import is 20 October 2026. There is no release date yet.

From `app/`, run:

```powershell
node scripts/sync-forum-docs.mjs
npx tsx scripts/validate-forum-docs.ts
npm run build
```

The importer reads the Discourse JSON topic, follows the complete `post_stream.stream` through paginated topic responses, and fails if any post is missing. It imports Steve's normal content posts and skips empty system posts. It refreshes existing posts too, because bug fixes and minor changes are edited into the opening post.

Conversion uses Turndown, retains tables, converts Discourse spoilers to `||...||`, replaces lightbox thumbnails with original images, and removes image metadata. The opening post's duplicate index is omitted. Subheadings are converted to Markdown headings so the app's standalone-bold section parser keeps them with their parent post. Each section includes a source link. Existing straight-quote section titles are retained to preserve anchors; Steve's prose is otherwise retained.

The generated `public/docs/v3.0.0/source.json` records source post IDs/numbers, update dates, omitted system posts, section count, and a hash of the Markdown. For repeatable offline conversion, pass `--source-json path/to/source.json` with an object containing the topic response as `topic` and the complete post array as `posts`.

After importing, review every new section and add its route to `src/manifest.ts` `sectionMap`, then add the affected topic to `versionTopics`. The validator catches missing routes, duplicate titles, lost subheadings/tables, and incomplete source provenance. Review the content diff as well: source edits can change or remove existing details.

The October 2026 refresh includes all 56 content posts (60 sections), including 25 sections missing from the old snapshot. Stream entries 17, 38, and 39 are empty Discourse system posts, not missing documentation. The historical `public/docs/v2.8.0/01-patch-notes.md` remains available for existing raw-document links, but is no longer merged as a separate release. Old in-app v2.8.0 links resolve to v3.0.0.
