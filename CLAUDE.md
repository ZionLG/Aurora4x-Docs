# Aurora 4x Documentation Project

## Project Structure

```
app/                  # React + TypeScript + Tailwind site
  src/
    manifest.ts       # Topic-centric manifest (categories, versions, history)
    components/
      Sidebar.tsx     # Navigation with Current/Changelog view toggle
      ContentArea.tsx # Markdown renderer
  public/
    docs/
      v1.0.0/         # Raw changelog markdown files
site/                 # Legacy vanilla HTML/CSS/JS site (deprecated)
```

## Fetching Changelogs from the Aurora Forum

The forum runs Discourse. Each changelog post is a topic with numbered posts.

### Step 1: Get the topic JSON

```
curl -s "https://aurora4x.com/t/<TOPIC_SLUG>/<TOPIC_ID>.json"
```

This returns the first ~20 posts inline in `post_stream.posts[]`.
Check `post_stream.stream[]` for all post IDs.

### Step 2: Get remaining posts

If there are more than 20 posts, fetch the next batch:

```
curl -s "https://aurora4x.com/t/<TOPIC_SLUG>/<TOPIC_ID>/<LAST_POST_NUMBER>.json"
```

For example, for v1.0.0 (topic ID 40, 38 posts):
- First 20 posts: `https://aurora4x.com/t/aurora-v1-0-0-launch-documentation/40.json`
- Remaining posts: `https://aurora4x.com/t/aurora-v1-0-0-launch-documentation/40/39.json`

### Step 3: Convert HTML to Markdown

Each post has a `cooked` field containing HTML. Use `turndown` (npm) to convert to markdown:

```js
import TurndownService from 'turndown';
const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
const markdown = td.turndown(post.cooked);
```

### Step 4: Fix Discourse image artifacts (ALWAYS DO THIS)

**This is a recurring issue.** Every fetched changelog will have broken images. ALWAYS run these cleanups immediately after turndown conversion — never skip this step:

**1. Broken linked images** — Discourse wraps images in links that turndown splits across lines:
```
[![image](thumb_url)

](full_url "image")
```
Fix with:
```js
content.replace(
  /\[!\[image\]\(([^)]+)\)[\s\S]*?\]\(([^)]+?)(?:\s+"image")?\)/g,
  (_, thumb, full) => '![image](' + full + ')'
);
```

**2. Image metadata lines** — Lines like `image940×636 217 KB`:
```js
content.replace(/^image\d+×\d+\s+[\d.]+ [KMG]B$/gm, '');
```

### Step 5: Add to manifest

1. Place markdown files in `app/public/docs/v{X.Y.Z}/`
2. Add a version entry to `manifest.ts` `versions[]` array (newest first)
3. For each section, either:
   - Add a new topic to `topics[]` if it's a new system
   - Add a history entry to an existing topic if it updates one

## Design System

- Dark space-terminal theme with CRT scanlines and grid overlay
- Colors defined in `app/src/index.css` via Tailwind `@theme`
- Fonts: Chakra Petch (display), Exo 2 (body), JetBrains Mono (mono)
- Accent color: `#4fc3f7` (cyan-blue)
