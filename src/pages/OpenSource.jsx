import { useTranslation } from 'react-i18next';

const PROJECTS = [
  {
    id: 'conote',
    titleKey: 'opensource.project_conote_title',
    descKey: 'opensource.project_conote_desc',
    badgeKey: 'opensource.conote_badge',
    repoUrl: 'https://github.com/muhakmal/conote-for-confluence',
    glyph: '📝',
    features: [
      'opensource.conote_f1',
      'opensource.conote_f2',
      'opensource.conote_f3',
      'opensource.conote_f4',
    ],
    tags: ['Markdown', 'Local-First', 'Confluence', 'React', 'Electron'],
  },
  {
    id: 'qris',
    titleKey: 'opensource.project_qris_title',
    descKey: 'opensource.project_qris_desc',
    badgeKey: 'opensource.qris_badge',
    repoUrl: 'https://github.com/muhakmal/qris-parser',
    glyph: '[▦]',
    features: [
      'opensource.qris_f1',
      'opensource.qris_f2',
      'opensource.qris_f3',
      'opensource.qris_f4',
    ],
    tags: ['Python', 'QRIS', 'EMVCo', 'ASPI v1.0', 'CLI', 'TLV'],
  },
  {
    id: 'blog',
    titleKey: 'opensource.project_blog_title',
    descKey: 'opensource.project_blog_desc',
    badgeKey: 'opensource.blog_badge',
    repoUrl: 'https://github.com/muhakmal/blog',
    glyph: '⚡',
    features: [
      'opensource.blog_f1',
      'opensource.blog_f2',
      'opensource.blog_f3',
    ],
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Remark'],
  },
  {
    id: 'web',
    titleKey: 'opensource.project_web_title',
    descKey: 'opensource.project_web_desc',
    badgeKey: 'opensource.web_badge',
    repoUrl: 'https://github.com/baskomlabs/baskomlabs.github.io',
    glyph: '<>',
    features: [
      'opensource.web_f1',
      'opensource.web_f2',
      'opensource.web_f3',
    ],
    tags: ['React 19', 'Vite', 'Prerender', 'i18n', 'GitHub Pages'],
  },
];

function OpenSource() {
  const { t } = useTranslation();

  return (
    <div className="oss-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="oss-hero reveal-on-scroll">
        <div className="lp-chip">
          <span className="lp-chip-dot" aria-hidden="true" />
          {t('opensource.hero_badge')}
        </div>
        <h1 className="oss-title">
          {t('opensource.hero_title_1')}{' '}
          <span className="gradient-text">{t('opensource.hero_title_2')}</span>
        </h1>
        <p className="oss-lead">{t('opensource.hero_lead')}</p>
      </section>

      {/* ---------- CREATOR SPOTLIGHT CARD ---------- */}
      <section className="oss-creator-card reveal-on-scroll">
        <div className="oss-creator-left">
          <div className="oss-avatar-wrap">
            <img
              src="https://avatars.githubusercontent.com/u/muhakmal"
              alt="Muh Akmal"
              className="oss-avatar"
              onError={(e) => {
                // Fallback to SVG placeholder if offline / network error
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'grid';
              }}
            />
            <div className="oss-avatar-fallback" style={{ display: 'none' }} aria-hidden="true">
              MA
            </div>
          </div>
          <div className="oss-creator-info">
            <div className="oss-creator-badge">{t('opensource.creator_label')}</div>
            <h2 className="oss-creator-name">{t('opensource.creator_name')}</h2>
            <div className="oss-creator-handle">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <a
                href="https://github.com/muhakmal"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('opensource.creator_handle')}
              </a>
            </div>
            <p className="oss-creator-role">{t('opensource.creator_role')}</p>
          </div>
        </div>

        <div className="oss-creator-right">
          <p className="oss-creator-bio">{t('opensource.creator_bio')}</p>
          <a
            href="https://github.com/muhakmal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid oss-creator-btn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            {t('opensource.creator_cta')}
          </a>
        </div>
      </section>

      {/* ---------- FEATURED REPOSITORIES GRID ---------- */}
      <section className="oss-projects-section">
        <div className="lp-eyebrow reveal-on-scroll">
          <span>01</span>
          {t('opensource.projects_label')}
        </div>

        <div className="oss-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="oss-card reveal-on-scroll">
              <div className="oss-card-head">
                <span className="oss-glyph" aria-hidden="true">
                  {project.glyph}
                </span>
                <div className="oss-card-head-meta">
                  <span className="oss-card-badge">{t(project.badgeKey)}</span>
                  <h3 className="oss-card-title">{t(project.titleKey)}</h3>
                </div>
              </div>

              <p className="oss-card-desc">{t(project.descKey)}</p>

              <ul className="oss-features">
                {project.features.map((fKey) => (
                  <li key={fKey}>
                    <span className="oss-check" aria-hidden="true">&gt;_</span>
                    <span>{t(fKey)}</span>
                  </li>
                ))}
              </ul>

              <div className="oss-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="oss-tag">{tag}</span>
                ))}
              </div>

              <div className="oss-card-actions">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost oss-repo-link"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  {t('opensource.view_repo')}
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- IN THE WORKSHOP (UPCOMING) ---------- */}
      <section className="oss-upcoming reveal-on-scroll">
        <div className="oss-upcoming-header">
          <div className="lp-eyebrow">
            <span>02</span>
            {t('opensource.upcoming_label')}
          </div>
          <span className="oss-card-badge oss-badge-pulse">{t('opensource.upcoming_badge')}</span>
        </div>
        <div className="oss-upcoming-card">
          <div className="oss-glyph" aria-hidden="true">((·))</div>
          <div className="oss-upcoming-body">
            <h3>{t('opensource.upcoming_title')}</h3>
            <p>{t('opensource.upcoming_desc')}</p>
          </div>
        </div>
      </section>

      {/* ---------- COMMUNITY / CONTRIBUTE SECTION ---------- */}
      <section className="oss-contribute reveal-on-scroll">
        <div className="oss-contribute-card">
          <div className="oss-contribute-copy">
            <div className="lp-eyebrow">
              <span>03</span>
              {t('opensource.contribute_label')}
            </div>
            <h2>{t('opensource.contribute_title')}</h2>
            <p>{t('opensource.contribute_desc')}</p>
          </div>
          <div className="oss-contribute-actions">
            <a
              href="https://github.com/muhakmal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enamel"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              {t('opensource.view_github')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpenSource;
