import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function SEO() {
  const { t, i18n } = useTranslation();

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{t('home.seo_title')}</title>
      <meta name="description" content={t('home.seo_desc')} />
    </Helmet>
  );
}

export default SEO;
