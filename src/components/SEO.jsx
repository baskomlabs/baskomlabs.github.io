import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { SITE, metaFor } from '../seo/siteMeta';

/**
 * Per-route <head>. Metadata comes from src/seo/siteMeta.js, which the build
 * step also reads so the prerendered HTML files carry the same tags.
 *
 * The previous version matched routes with path.includes(), so '/learning/
 * qris-components' was caught by the 'components' branch and inherited the NFC
 * title. Exact path lookup avoids that whole class of bug.
 */
function SEO() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const { title, description, canonical } = metaFor(location.pathname, lang);
  const ogImage = SITE.url + SITE.ogImage;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    alternateName: 'Baskom',
    url: SITE.url,
    logo: SITE.url + '/apple-touch-icon.png',
    email: SITE.email,
    description: lang === 'en' ? SITE.tagline_en : SITE.tagline_id,
    sameAs: [SITE.playDeveloperUrl],
  };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : SITE.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default SEO;
