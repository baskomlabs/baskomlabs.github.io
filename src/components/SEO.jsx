import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function SEO() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  let title = t('home.seo_title');
  const desc = t('home.seo_desc');
  const path = location.pathname;

  if (path.startsWith('/learning')) {
    if (path === '/learning') title = `${t('navbar.learning')} | BaskomLabs`;
    else if (path.includes('nfc-basics')) title = `${t('learning.nfc_title')} | BaskomLabs`;
    else if (path.includes('data-exchange')) title = `${t('learning.dx_title')} | BaskomLabs`;
    else if (path.includes('components')) title = `${t('learning.comp_title')} | BaskomLabs`;
    else if (path.includes('radio-waves')) title = `${t('learning.rw_title')} | BaskomLabs`;
    else if (path.includes('history-trivia')) title = `${t('learning.ht_title')} | BaskomLabs`;
    else if (path.includes('terminology')) title = `${t('learning.term_title')} | BaskomLabs`;
    else if (path.includes('qris-basics')) title = `${t('learning.qris_basics_title')} | BaskomLabs`;
    else if (path.includes('qris-data-parsing')) title = `${t('learning.qris_parsing_title')} | BaskomLabs`;
    else if (path.includes('qris-components')) title = `${t('learning.qris_comp_title')} | BaskomLabs`;
    else if (path.includes('qris-camera-vision')) title = `${t('learning.qris_cv_title')} | BaskomLabs`;
    else if (path.includes('qris-history-trivia')) title = `${t('learning.qris_ht_title')} | BaskomLabs`;
    else if (path.includes('qris-terminology')) title = `${t('learning.qris_term_title')} | BaskomLabs`;
    else title = `Learning Hub | BaskomLabs`;
  } else if (path.includes('privacy-policy')) {
    title = `Privacy Policy | BaskomLabs`;
  } else if (path.includes('tos-')) {
    title = `Terms of Service | BaskomLabs`;
  } else if (path === '/contact') {
    title = `${t('navbar.contact')} | BaskomLabs`;
  }

  // Remove HTML tags from title if any
  const cleanTitle = typeof title === 'string' ? title.replace(/<[^>]+>/g, '') : title;

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{cleanTitle}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
}

export default SEO;
