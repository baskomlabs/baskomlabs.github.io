/**
 * Post-build step: turn the single-page bundle into one real HTML file per route.
 *
 * Why this exists: the site is hosted on GitHub Pages, which has no server-side
 * rewrite. Without this, /learning/nfc-basics would return a 404 status (the
 * usual 404.html SPA trick still returns 404), and every route would ship the
 * same <title> and description in its raw HTML.
 *
 * Each generated file is the normal bundle with a route-specific <head>, so
 * crawlers get a 200, a unique title/description/canonical, and working social
 * cards without JavaScript. The page body is still rendered client-side — this
 * is head-level prerendering, not full SSR.
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, ROUTES, canonicalUrl } from '../src/seo/siteMeta.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: 'Baskom',
  url: SITE.url,
  logo: SITE.url + '/apple-touch-icon.png',
  email: SITE.email,
  description: SITE.tagline_id,
  sameAs: [SITE.playDeveloperUrl],
});

function headFor(route) {
  const canonical = canonicalUrl(route.canonical || route.path);
  const title = route.title_id;
  const desc = route.desc_id;
  const ogImage = SITE.url + SITE.ogImage;
  return `
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${esc(SITE.name)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(desc)}">
    <meta property="og:url" content="${esc(canonical)}">
    <meta property="og:image" content="${esc(ogImage)}">
    <meta property="og:locale" content="${esc(SITE.locale)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(desc)}">
    <meta name="twitter:image" content="${esc(ogImage)}">
    <script type="application/ld+json">${jsonLd}</script>
`;
}

function renderRoute(route) {
  const canonical = canonicalUrl(route.canonical || route.path);
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title_id)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${esc(route.desc_id)}">`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${esc(canonical)}">`
  );
  html = html.replace('</head>', `${headFor(route)}  </head>`);
  return html;
}

let written = 0;
for (const route of ROUTES) {
  const html = renderRoute(route);
  const outDir = route.path === '/' ? dist : join(dist, route.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  written++;
}

// Unknown paths: GitHub Pages serves this. Real routes never reach it because
// they now exist as their own files.
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'));

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter((r) => !r.canonical) // skip routes that canonicalise elsewhere
  .map(
    (r) => `  <url>
    <loc>${canonicalUrl(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n');

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  'utf8'
);

console.log(`prerender: ${written} routes, sitemap with ${ROUTES.filter((r) => !r.canonical).length} urls, 404.html`);
