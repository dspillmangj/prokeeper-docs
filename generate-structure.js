const fs = require('fs');
const path = require('path');

const DOCS_ROOT = __dirname;
const IGNORED_DIRS = new Set(['.git', '.github', 'css', 'js', 'images', 'node_modules']);
const IGNORED_FILES = new Set(['.gitignore', 'index.html', 'structure.json', 'generate-structure.js', 'package.json', 'package-lock.json', 'README.md']);

// Preferred category order (lowercase slugs)
const CATEGORY_ORDER = [
  'getting-started',
  'basketball',
  'volleyball',
  'live-sharing',
  'developer',
  'troubleshooting'
];

function formatTitle(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\.md$/i, '')
    .replace(/\b\w/g, char => char.toUpperCase())
    .replace(/\bAnd\b/g, '&')
    .replace(/\bApi\b/g, 'API')
    .replace(/\bFaq\b/g, 'FAQ')
    .replace(/\bQr\b/g, 'QR')
    .replace(/\bPdf\b/g, 'PDF')
    .replace(/\bObs\b/g, 'OBS');
}

function extractMarkdownTitle(filePath, defaultTitle) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const firstHeading = content.match(/^#\s+(.+)$/m);
    if (firstHeading && firstHeading[1]) {
      return firstHeading[1].trim();
    }
  } catch (e) {
    // ignore
  }
  return defaultTitle;
}

function scanDirectory(dirPath, relativePath = '') {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const items = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const itemRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name) || entry.name.startsWith('.')) continue;

      const children = scanDirectory(fullPath, itemRelativePath);
      if (children.length > 0) {
        items.push({
          type: 'category',
          name: entry.name,
          title: formatTitle(entry.name),
          path: itemRelativePath,
          children
        });
      }
    } else if (entry.isFile()) {
      if (IGNORED_FILES.has(entry.name) || entry.name.startsWith('.')) continue;
      if (!entry.name.endsWith('.md')) continue;

      const title = extractMarkdownTitle(fullPath, formatTitle(entry.name));
      items.push({
        type: 'file',
        name: entry.name,
        title: title,
        path: itemRelativePath
      });
    }
  }

  // Sort top-level categories according to CATEGORY_ORDER, then files
  items.sort((a, b) => {
    if (a.name === 'index.md') return -1;
    if (b.name === 'index.md') return 1;

    if (a.type === 'category' && b.type === 'category') {
      const idxA = CATEGORY_ORDER.indexOf(a.name);
      const idxB = CATEGORY_ORDER.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.title.localeCompare(b.title);
    }

    if (a.type === 'category' && b.type !== 'category') return -1;
    if (a.type !== 'category' && b.type === 'category') return 1;

    return a.title.localeCompare(b.title);
  });

  return items;
}

const structure = scanDirectory(DOCS_ROOT);
const outputPath = path.join(DOCS_ROOT, 'structure.json');
fs.writeFileSync(outputPath, JSON.stringify(structure, null, 2), 'utf8');
console.log(`Successfully generated structure.json with ${structure.length} top-level sections.`);
