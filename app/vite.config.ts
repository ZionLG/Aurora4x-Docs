import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

/** Dev middleware: serves /current/{topic}.md by running the merge on-the-fly */
function mdExportPlugin(): Plugin {
  return {
    name: 'md-export',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const match = req.url?.match(/^\/current\/([a-z0-9-]+)\.md$/)
        if (!match) return next()

        const topicId = match[1]

        // Dynamic import to avoid bundling these at startup
        const { manifest } = await server.ssrLoadModule('/src/manifest.ts')
        const { parseSections } = await server.ssrLoadModule('/src/utils/extractSections.ts')
        const { mergeTopicContent } = await server.ssrLoadModule('/src/utils/mergeContent.ts')

        const topic = manifest.topics.find((t: any) => t.id === topicId)
        if (!topic) {
          res.statusCode = 404
          res.end('Topic not found')
          return
        }

        const docsDir = path.resolve(__dirname, 'public', 'docs')

        // Load changelog cache
        const changelogCache: Record<string, any[]> = {}
        for (const v of manifest.versions) {
          if (!v.file) continue
          const filePath = path.join(docsDir, v.file)
          if (fs.existsSync(filePath)) {
            changelogCache[v.version] = parseSections(fs.readFileSync(filePath, 'utf-8'))
          }
        }

        const baseSections = topic.base
          ? (() => {
              const p = path.join(docsDir, topic.base)
              return fs.existsSync(p) ? parseSections(fs.readFileSync(p, 'utf-8')) : []
            })()
          : []

        const versionSections = manifest.versions
          .filter((v: any) => v.file && changelogCache[v.version])
          .map((v: any) => ({ version: v.version, sections: changelogCache[v.version] }))
          .reverse()

        const { buildTopicMarkdown } = await server.ssrLoadModule('/src/utils/exportMarkdown.ts')

        const merged = mergeTopicContent(
          topic.id, baseSections, '1.0.0', versionSections,
          manifest.sectionMap, topic.deprecated,
        )

        const unreleasedVersions = new Set(
          manifest.versions.filter((v: any) => v.unreleased).map((v: any) => v.version)
        )
        const md = buildTopicMarkdown(topic.title, merged, unreleasedVersions)

        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(md)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), mdExportPlugin()],
  server: {
    port: 5180,
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
})
