# ProKeeper Docs Service Engine

A lightweight, high-performance static documentation service engine hosted seamlessly on GitHub Pages. Inspired by the aesthetics of **Authentik** and **Home Assistant** documentation sites.

---

## 🌟 Key Features

* **Zero-Build Markdown Engine**: Serves raw `.md` files directly on GitHub Pages with instant rendering.
* **Dynamic Folder Hierarchy**: Create any nested folder or `.md` file, and the sidebar automatically reflects your structure.
* **Instant Keyboard Search (`⌘K` / `Ctrl+K`)**: Tokenized client-side full-text search across all documents with matched snippet highlights.
* **Home Assistant / Authentik Styling**: Modern dark & light modes with deep navy/electric blue accents, custom badges, and smooth animations.
* **Rich Callouts (Admonitions)**: Support for GitHub style `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!IMPORTANT]`, `> [!CAUTION]`, and `:::note` blocks.
* **Syntax Highlighting & 1-Click Copy**: Powered by Prism.js with language badges and copy-to-clipboard functionality.
* **Mermaid.js Diagram Support**: Real-time rendering of architecture and entity relationship diagrams.
* **On This Page (Scroll-Spy)**: Dynamic right-side Table of Contents tracking heading visibility as you scroll.
* **Smart Link Interceptor**: Relative markdown links (`[Quickstart](../getting-started/quickstart.md)`) automatically navigate within the SPA without full-page reloads.

---

## 📁 How It Discovers Your Markdown Files

The engine reads `structure.json` to render the sidebar navigation hierarchy.

### Adding New Documentation:
1. Create a new folder (e.g. `football/` or `soccer/`) or drop `.md` files into any existing folder.
2. Run the generator script:
   ```bash
   node generate-structure.js
   ```
   *(Or let the included GitHub Action automatically update it on every `git push`)*.

---

## 🚀 Local Development

To run and preview the docs locally:

```bash
# Start a local static web server
npm start
# Opens http://localhost:8080
```
