import { useState, useEffect } from 'react';
import { profile } from '../../data/profile';

export default function ProfileHeader({ darkMode, onToggleTheme }) {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    if (!isCvModalOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsCvModalOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isCvModalOpen]);

  return (
    <header className="profile-header">
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={darkMode}
      >
        <span className="theme-toggle-track">
          <span className="theme-toggle-thumb" />
        </span>
      </button>

      <div className="profile-header-inner">
        <img
          src={profile.photo}
          className="profile-avatar"
          alt={profile.name}
          loading="eager"
          decoding="async"
        />

        <div className="profile-details">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-location">
            <span className="icon-pin" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="profile-roles">{profile.roles}</p>

          <div className="profile-actions">
            <a className="btn btn-outline" href="#projects">
              <span className="icon-book" aria-hidden="true" />
              View Projects
            </a>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsCvModalOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
                aria-hidden="true"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View CV
            </button>
          </div>

          <div className="profile-contact-bar">
            {/* Email */}
            <a
              className="profile-contact-item"
              href="mailto:mikearvinc@gmail.com"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>mikearvinc@gmail.com</span>
            </a>

            <span className="profile-contact-divider" aria-hidden="true" />

            {/* Phone */}
            <a
              className="profile-contact-item"
              href="tel:+639171300861"
              aria-label="Phone"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
              <span>0917‑1300‑861</span>
            </a>

            <span className="profile-contact-divider" aria-hidden="true" />

            {/* GitHub */}
            <a
              className="profile-contact-item"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <span className="profile-contact-divider" aria-hidden="true" />

            {/* LinkedIn */}
            <a
              className="profile-contact-item"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.98-1.98c0-1.093.887-1.98 1.98-1.98s1.98.887 1.98 1.98a1.98 1.98 0 0 1-1.98 1.98zm1.983 13.019H3.354V9h3.966v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {isCvModalOpen && (
        <div
          className="cert-modal-backdrop"
          role="presentation"
          onClick={() => setIsCvModalOpen(false)}
          style={{ zIndex: 9999 }}
        >
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: '900px',
              width: '90%',
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              boxSizing: 'border-box'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              flexShrink: 0
            }}>
              <div>
                <h3 id="cv-modal-title" className="cert-modal-title" style={{ margin: 0 }}>
                  Curriculum Vitae
                </h3>
                <p className="cert-modal-meta" style={{ margin: '4px 0 0' }}>
                  {profile.name} · CV Preview
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingRight: '40px' }}>
                <a
                  className="btn btn-primary"
                  href="/resume.pdf"
                  download="Mike_Arvin_Cruz_CV.pdf"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
            
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setIsCvModalOpen(false)}
              aria-label="Close CV preview"
              style={{ top: '20px', right: '20px' }}
            >
              ×
            </button>

            <div style={{ flexGrow: 1, width: '100%', minHeight: 0 }}>
              <object
                data="/resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '8px', display: 'block' }}
              >
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  background: 'var(--surface-muted)',
                  borderRadius: '12px',
                  border: '1px dashed var(--card-border)'
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text-secondary)"
                    strokeWidth="1.5"
                    style={{ marginBottom: '16px', opacity: 0.7 }}
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    PDF inline preview is not supported by your browser or device. You can download or view it directly:
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                    <a
                      className="btn btn-primary"
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open PDF in New Tab
                    </a>
                    <a
                      className="btn btn-outline"
                      href="/resume.pdf"
                      download="Mike_Arvin_Cruz_CV.pdf"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
