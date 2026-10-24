import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineVitePluginsSetup } from '@slidev/types'

// Images referenced with an absolute path (e.g. /sw07/diagram.png) are
// resolved from the deck's public/ folder at build time. When the file
// doesn't exist yet, show a placeholder instead of failing the slide.

const IMAGE = /^\/[^?#]+\.(?:png|jpe?g|gif|svg|webp|avif)(?:[?#].*)?$/i
const PREFIX = '\0fhnw-missing-image:'

function placeholder(path: string) {
  const name = path.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">`
    + `<rect x="1" y="1" width="638" height="358" fill="#f7f7f5" stroke="#999999" stroke-width="2" stroke-dasharray="8 6"/>`
    + `<text x="320" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="22" fill="#767573">Image not found</text>`
    + `<text x="320" y="205" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#999999">${name}</text>`
    + `</svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default defineVitePluginsSetup(() => {
  let publicDir = ''

  return [{
    name: 'fhnw-missing-image-placeholder',
    enforce: 'pre',
    configResolved(config) {
      publicDir = config.publicDir
    },
    resolveId(id) {
      if (!publicDir || !IMAGE.test(id))
        return null
      const file = id.replace(/[?#].*$/, '')
      if (existsSync(join(publicDir, file)))
        return null
      this.warn(`Missing image ${file}, showing a placeholder`)
      return PREFIX + file
    },
    load(id) {
      if (!id.startsWith(PREFIX))
        return null
      return `export default ${JSON.stringify(placeholder(id.slice(PREFIX.length)))}`
    },
  }]
})
