import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const inlineCss = () => ({
  name: 'inline-css',
  apply: 'build',
  enforce: 'post',
  transformIndexHtml: {
    order: 'post',
    handler(html, { bundle }) {
      if (!bundle) return html

      return html.replace(
        /<link rel="stylesheet"[^>]*href="\/([^"]+\.css)"[^>]*>/g,
        (tag, fileName) => {
          const asset = bundle[fileName]
          if (!asset || asset.type !== 'asset') return tag
          delete bundle[fileName]
          return `<style>${asset.source.toString()}</style>`
        },
      )
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), inlineCss()],
  resolve: {
    alias: [
      { find: /^react$/, replacement: 'preact/compat' },
      { find: /^react-dom$/, replacement: 'preact/compat' },
      { find: /^react-dom\/client$/, replacement: 'preact/compat/client' },
      { find: /^react\/jsx-runtime$/, replacement: 'preact/jsx-runtime' },
    ],
  },
})
