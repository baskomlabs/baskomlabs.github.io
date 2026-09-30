import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APPS, playUrl } from '../../seo/siteMeta';

/**
 * One entry per learning track. `core` lessons are the suggested reading order;
 * `more` are optional side trips. Titles and blurbs reuse the existing
 * hub_* strings (minus their "1. " numbering, which the ordered list supplies).
 */
const TRACKS = [
  {
    id: 'nfc',
    glyph: '((·))',
    playId: 'com.baskom.pembacakue',
    core: [
      ['/learning/nfc-basics', 'hub_card1'],
      ['/learning/data-exchange', 'hub_card2'],
      ['/learning/components', 'hub_card3'],
    ],
    more: [
      ['/learning/radio-waves', 'hub_card4'],
      ['/learning/history-trivia', 'hub_card5'],
      ['/learning/terminology', 'hub_card6'],
    ],
  },
  {
    id: 'qris',
    glyph: '[▦]',
    playId: 'com.baskom.qrisparser',
    core: [
      ['/learning/qris-basics', 'hub_qris_card1'],
      ['/learning/qris-data-parsing', 'hub_qris_card2'],
      ['/learning/qris-components', 'hub_qris_card3'],
    ],
    more: [
      ['/learning/qris-camera-vision', 'hub_qris_card4'],
      ['/learning/qris-history-trivia', 'hub_qris_card5'],
      ['/learning/qris-terminology', 'hub_qris_card6'],
    ],
  },
  {
    id: 'quran',
    glyph: '🎙',
    playId: 'com.baskomlabs.qurandiscovery',
    core: [['/learning/quran-discovery', 'hub_qd_card1']],
    more: [],
  },
  {
    id: 'hadith',
    glyph: '🔎',
    playId: 'com.baskomlabs.hadithdiscovery',
    core: [['/learning/hadith-discovery', 'hub_hd_card1']],
    more: [],
  },
  {
    id: 'yasin',
    glyph: '﷽',
    playId: 'com.baskom.yasintahlilmaulid',
    core: [
      ['/learning/yasin-hikmah', 'hub_yt_card1'],
      ['/learning/tahlil-hikmah', 'hub_yt_card2'],
      ['/learning/maulid-hikmah', 'hub_yt_card3'],
      ['/learning/tradisi-nu-hikmah', 'hub_yt_card4'],
    ],
    more: [],
  },
];

const stripNumber = (s) => s.replace(/^\d+\.\s*/, '');

function LessonList({ items, ordered, t }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`hub-lessons${ordered ? ' is-ordered' : ''}`}>
      {items.map(([to, key]) => (
        <li key={to}>
          <Link to={to} className="hub-lesson">
            <span className="hub-lesson-body">
              <span className="hub-lesson-title">{stripNumber(t(`learning.${key}_title`))}</span>
              <span className="hub-lesson-desc">{t(`learning.${key}_desc`)}</span>
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </li>
      ))}
    </Tag>
  );
}

function LearningHub() {
  const { t } = useTranslation();

  // A track whose app is still in Play review is not promoted here yet; its lesson
  // page stays published and indexable.
  const tracks = TRACKS.filter((tr) => !APPS.find((a) => a.playId === tr.playId)?.pending);

  return (
    <section className="active-view hub">
      <header className="hub-hero">
        <h1 className="hub-title">
          {t('learning.hub_title_1')} <span className="gradient-text">{t('learning.hub_title_2')}</span>
        </h1>
        <p className="hub-lead">{t('learning.hub_subtitle')}</p>

        <ol className="hub-steps">
          {['hub_step1', 'hub_step2', 'hub_step3'].map((k, i) => (
            <li key={k}><span aria-hidden="true">{i + 1}</span>{t(`learning.${k}`)}</li>
          ))}
        </ol>

        <nav className="hub-jump" aria-label={t('learning.hub_jump')}>
          <span>{t('learning.hub_jump')}</span>
          {tracks.map((tr) => (
            <a key={tr.id} href={`#${tr.id}`} className="hub-chip">{t(`learning.track_${tr.id}_title`)}</a>
          ))}
        </nav>
      </header>

      {tracks.map((tr) => {
        const app = APPS.find((a) => a.playId === tr.playId);
        const count = tr.core.length + tr.more.length;
        return (
          <section key={tr.id} id={tr.id} className="hub-track" aria-labelledby={`${tr.id}-h`}>
            <div className="hub-track-head">
              <span className="hub-glyph" aria-hidden="true">{tr.glyph}</span>
              <div>
                <h2 id={`${tr.id}-h`}>{t(`learning.track_${tr.id}_title`)}</h2>
                <p className="hub-track-intro">{t(`learning.track_${tr.id}_intro`)}</p>
                <p className="hub-track-meta">
                  <span>{t('learning.hub_lessons', { count })}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('learning.hub_used_in')}{' '}
                    <a href={playUrl(app.playId)} target="_blank" rel="noopener noreferrer">{app.short}</a>
                  </span>
                </p>
              </div>
            </div>

            <h3 className="hub-sub">{t('learning.hub_start_here')}</h3>
            <LessonList items={tr.core} ordered={tr.core.length > 1} t={t} />

            {tr.more.length > 0 && (
              <>
                <h3 className="hub-sub">{t('learning.hub_go_deeper')}</h3>
                <LessonList items={tr.more} ordered={false} t={t} />
              </>
            )}
          </section>
        );
      })}
    </section>
  );
}

export default LearningHub;
