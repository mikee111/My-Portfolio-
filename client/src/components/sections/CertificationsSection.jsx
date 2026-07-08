import { useEffect, useState } from 'react'
import { certifications } from '../../data/certifications'
import Panel from '../layout/Panel'

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState(null)

  useEffect(() => {
    if (!activeCert) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveCert(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeCert])

  return (
    <>
      <Panel
        id="certifications"
        title="Certifications"
        titleId="certifications-title"
        className="certifications-panel"
      >
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert.id} className="cert-item">
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              <button
                type="button"
                className="cert-view-btn"
                onClick={() => setActiveCert(cert)}
              >
                View certificate
              </button>
            </li>
          ))}
        </ul>
      </Panel>

      {activeCert && (
        <div
          className="cert-modal-backdrop"
          role="presentation"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setActiveCert(null)}
              aria-label="Close certificate"
            >
              ×
            </button>
            <h3 id="cert-modal-title" className="cert-modal-title">
              {activeCert.title}
            </h3>
            <p className="cert-modal-meta">
              {activeCert.issuer} · {activeCert.date}
            </p>
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="cert-modal-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  )
}
