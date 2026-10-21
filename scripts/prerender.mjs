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
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, ROUTES, APPS, TALK_KAPTEN, canonicalUrl, playUrl, playInstallUrl, appPagePath, alternatesFor, jsonLdFor } from '../src/seo/siteMeta.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');
const locales = {
  id: JSON.parse(readFileSync(join(root, 'src/locales/id/translation.json'), 'utf8')),
  en: JSON.parse(readFileSync(join(root, 'src/locales/en/translation.json'), 'utf8')),
};

// Fixed-language routes (the app pages) carry their own lang; everything else
// is rendered with the English default, as before.
const langOf = (route) => route.lang || 'en';
const textOf = (route) => {
  const sfx = langOf(route) === 'id' ? '_id' : '_en';
  return { title: route[`title${sfx}`], desc: route[`desc${sfx}`] };
};
const OG_LOCALE = { id: 'id_ID', en: 'en_US' };

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headFor(route) {
  const canonical = canonicalUrl(route.canonical || route.path);
  const { title, desc } = textOf(route);
  const lang = langOf(route);
  const ogImage = SITE.url + (route.ogImage || SITE.ogImage);
  const ogImageAlt = route.ogImageAlt || SITE.ogImageAlt;
  return `
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${esc(SITE.name)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(desc)}">
    <meta property="og:url" content="${esc(canonical)}">
    <meta property="og:image" content="${esc(ogImage)}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${esc(ogImageAlt)}">
    <meta property="og:locale" content="${esc(route.lang ? OG_LOCALE[lang] : SITE.locale)}">
${alternatesFor(route).map((a) => `    <link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}">`).join('\n')}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(desc)}">
    <meta name="twitter:image" content="${esc(ogImage)}">
    <meta name="twitter:image:alt" content="${esc(ogImageAlt)}">
    <script type="application/ld+json">${JSON.stringify(jsonLdFor(route.path, lang))}</script>
`;
}

/**
 * Crawler-visible body. The real page is rendered client-side, so without this
 * the raw HTML has an empty <div id="root">. <noscript> keeps it out of the way
 * for people while giving text-only crawlers the headline, summary and links.
 */
function appNoscript(route) {
  const app = APPS.find((a) => a.slug === route.app);
  const lang = langOf(route);
  const c = locales[lang].apps;
  const a = c[route.app];
  const shots = app.screenshots[lang] || app.screenshots.id;
  const other = lang === 'id' ? 'en' : 'id';
  return (
    `<h1>${esc(a.h1)}</h1><p>${esc(a.lead)}</p>` +
    (a.notice ? `<p>${esc(a.notice)}</p>` : '') +
    `<p><a href="${esc(playInstallUrl(app.playId, 'app-page-noscript'))}">${esc(c.common.cta_install)}</a> (${esc(c.common.badge)})</p>` +
    (a.cards ? `<h2>${esc(a.cards_title)}</h2><ul>${a.cards.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '') +
    `<h2>${esc(c.common.features_title)}</h2>` +
    a.features.map((f) => `<h3>${esc(f.title)}</h3><p>${esc(f.desc)}</p>`).join('') +
    `<h2>${esc(c.common.screens_title)}</h2>` +
    shots.map((src, i) => `<img src="${esc(src)}" width="540" height="960" loading="lazy" alt="${esc(c.common.screens_alt.replace('{{app}}', app.short).replace('{{n}}', i + 1))}">`).join('') +
    `<h2>${esc(c.common.howto_title)}</h2><ol>${a.howto.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>` +
    `<h2>${esc(c.common.faq_title)}</h2>` +
    a.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('') +
    `<p><a href="${esc(app.privacy)}/">${esc(c.common.privacy)}</a>` +
    (app.tos ? ` · <a href="${esc(app.tos)}/">${esc(c.common.tos)}</a>` : '') +
    ` · <a href="${esc(appPagePath(app.slug, other))}/" hreflang="${other}">${esc(c.common.other_lang)}</a></p>`
  );
}

function noscriptFor(route) {
  if (route.app) return `<noscript>${appNoscript(route)}</noscript>`;
  const title = route.title_en.replace(/ \| BaskomLabs$/, '');
  let extra = '';
  if (route.path === '/') {
    extra =
      '<h2>Apps</h2><ul>' +
      APPS.filter((a) => !a.pending)
        .map((a) =>
          a.slug
            ? `<li><a href="${esc(appPagePath(a.slug, 'en'))}/">${esc(a.name)}</a> — ${esc(a.desc)} (<a href="${esc(playUrl(a.playId))}">Google Play</a>)</li>`
            : `<li><a href="${esc(playUrl(a.playId))}">${esc(a.name)}</a> — ${esc(a.desc)}</li>`
        )
        .join('') +
      '</ul><p><a href="/learning/">Learning hub: NFC, QRIS and NU traditions explained</a></p>' +
      '<p><a href="/talks/kapten-digital/">Talk: Petualangan Kapten Digital, guest teacher at IAS Al-Jannah</a></p>';
  } else if (route.path === '/learning') {
    extra =
      '<ul>' +
      ROUTES.filter((r) => r.path.startsWith('/learning/'))
        .map((r) => `<li><a href="${esc(canonicalUrl(r.path))}">${esc(r.title_en.replace(/ \| BaskomLabs$/, ''))}</a> — ${esc(r.desc_en)}</li>`)
        .join('') +
      '</ul>';
  } else if (route.path === '/open-source') {
    extra =
      '<h2>Featured Open Source Projects</h2><ul>' +
      '<li><a href="https://github.com/muhakmal/conote-for-confluence">CoNote for Confluence</a> — Fast, local-first PRD & Markdown notebook for Confluence Cloud</li>' +
      '<li><a href="https://github.com/muhakmal/qris-parser">QRIS Parser & Validator</a> — Production-grade Python parser, compliance validator, and dynamic generator for QRIS</li>' +
      '<li><a href="https://github.com/muhakmal/osp-kue-reader">KUE Reader</a> — Indonesian contactless NFC card reader SDK for Android (Mandiri e-money, BCA Flazz, BNI TapCash, BRI Brizzi, JakCard, FeliCa)</li>' +
      '</ul><p>Lead developer: <a href="https://github.com/muhakmal">Akmal, M. (@muhakmal)</a></p>';
  } else if (route.path === TALK_KAPTEN.path) {
    const t = TALK_KAPTEN;
    extra =
      `<p>Guest teacher session at <a href="${esc(t.school.url)}">${esc(t.school.name)}</a> ` +
      `(<a href="${esc(t.school.instagram)}">Instagram</a>), ${esc(t.date)}, by Akmal, M.</p>` +
      `<p><a href="${esc(t.slideUrl)}">Open the interactive slides</a></p><h2>Downloads</h2><ul>` +
      t.files.map((f) => `<li><a href="${esc(f.href)}">${esc(f.name)}</a> (${esc(f.type)}, ${esc(f.size)})</li>`).join('') +
      `<li><a href="${esc(t.zip.href)}">All materials (ZIP, ${esc(t.zip.size)})</a></li></ul>` +
      `<p>License: <a href="${esc(t.license)}">CC BY-NC 4.0</a></p>`;
  } else if (route.path.startsWith('/learning/')) {
    extra = '<p><a href="/learning/">Back to the learning hub</a></p>';
  }
  return `<noscript><h1>${esc(title)}</h1><p>${esc(route.desc_en)}</p>${extra}</noscript>`;
}

function renderRoute(route) {
  const canonical = canonicalUrl(route.canonical || route.path);
  const { title, desc } = textOf(route);
  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${langOf(route)}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${esc(desc)}">`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${esc(canonical)}">`
  );
  html = html.replace('</head>', `${headFor(route)}  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscriptFor(route)}`);
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

// Unknown paths: GitHub Pages serves this with a 404 status. Real routes and
// real files (app-ads.txt, robots.txt, sitemap.xml) never reach it because they
// exist as their own files. It is the plain bundle, marked noindex and without
// a canonical, and the app renders its NotFound view.
const notFound = template
  .replace(/<title>[\s\S]*?<\/title>/, '<title>404 — Page not found | BaskomLabs</title>')
  .replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, follow">')
  .replace(/\s*<link rel="canonical" href="[^"]*">/, '');
writeFileSync(join(dist, '404.html'), notFound, 'utf8');

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`, 'utf8');

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter((r) => !r.canonical && !r.hidden) // skip canonicalised and hidden routes
  .map(
    (r) => `  <url>
    <loc>${canonicalUrl(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority.toFixed(1)}</priority>
${alternatesFor(r).map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join('\n')}
  </url>`.replace(/\n\n/g, '\n')
  )
  .join('\n');

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
  'utf8'
);

console.log(`prerender: ${written} routes, sitemap with ${ROUTES.filter((r) => !r.canonical && !r.hidden).length} urls, 404.html`);
