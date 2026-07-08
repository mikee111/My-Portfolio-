import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/projectDetails.css'
import landingImg from '../assets/images/landing.png'
import loginImg from '../assets/images/login page .png'
import dashboardImg from '../assets/images/dashbaord pag.png'
import analyticalImg from '../assets/images/with track analayt.png'
import addItemsImg from '../assets/images/add items .png'
import allItemsImg from '../assets/images/all items .png'
import categoriesImg from '../assets/images/categories.png'
import categManagementImg from '../assets/images/categories management .png'
import dataPredict1Img from '../assets/images/data predict 1.png'
import dataPredictionsImg from '../assets/images/data predictions.png'
import loginpageImg from '../assets/images/login page .png'
import seasonalImg from '../assets/images/seasonal .png'
import seasonal1Img from '../assets/images/seasonla 1.png'
import accountMgmtImg from '../assets/images/account management.png'
import userSettingsImg from '../assets/images/user settings .png'

export default function ProjectDetailsPage({ darkMode, onToggleTheme }) {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === projectId)
  const [lightboxImg, setLightboxImg] = useState(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

  const openLightbox = (src, alt) => {
    setLightboxImg(src)
    setLightboxAlt(alt)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxImg(null)
    setLightboxAlt('')
    document.body.style.overflow = ''
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox()
  }

  if (!project) {
    return (
      <div className="error-page">
        <h1>Project not found</h1>
        <button onClick={() => navigate('/')}>Back to Portfolio</button>
      </div>
    )
  }

  return (
    <>
    <div className="project-details-page">
      <button className="details-back-btn" onClick={() => navigate('/')}>
        ← Back to Portfolio
      </button>

      <div className="details-container">
        <div className="details-header">
          <h1 className="details-title">{project.title}</h1>
        </div>

        <div className="details-content">
          {/* Left Column */}
          <div className="details-left">
            <div className="project-overview-section">
              <h3 className="section-title">PROJECT OVERVIEW</h3>
              <div className="info-item">
                <span className="info-label">Lead Developer</span>
                <span className="info-value">{project.leadDeveloper}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Architecture</span>
                <span className="info-value">{project.architecture}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Type</span>
                <span className="info-value">{project.type}</span>
              </div>
            </div>

            <div className="contributors-section">
              <h4 className="sub-section-title">ORIGINAL FOUNDATION</h4>
              <p className="contributors-text">Developed with</p>
              <ul className="contributors-list">
                {project.contributors && project.contributors.map((contributor, idx) => (
                  <li key={idx}>{contributor}</li>
                ))}
              </ul>
            </div>

            <div className="tech-stack-section">
              <h4 className="sub-section-title">TECH STACK</h4>
              <div className="tech-grid">
                {project.techStack && project.techStack.map((tech, idx) => (
                  <div key={idx} className="tech-item">
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="details-right">
            <div className="system-objectives-section">
              <h3 className="section-title">System Objectives</h3>
              <p className="objectives-intro">{project.objectivesIntro}</p>

              <div className="objectives-list">
                {project.objectives && project.objectives.map((objective, idx) => (
                  <div key={idx} className="objective-card">
                    <h4>{objective.title}</h4>
                    <p>{objective.description}</p>
                  </div>
                ))}

                {project.objectives && project.objectives.some(o => o.title === 'Operational Efficiency') && (
                  <div className="operational-image-container">
                    <div className="operational-image-block">
                      <div className="image-title">Landing Page</div>
                      <div className="image-description">Welcome page introducing the application with key features and call-to-action</div>
                      <div className="image-box lightbox-trigger" onClick={() => openLightbox(landingImg, 'Landing Page')}>
                        <img src={landingImg} alt="Landing" className="box-image" />
                        <div className="lightbox-hint">🔍 Click to enlarge</div>
                      </div>

                      <div className="image-title">Login Page</div>
                      <div className="image-description">Secure authentication interface for user access with email/password validation</div>
                      <div className="image-box lightbox-trigger" onClick={() => openLightbox(loginImg, 'Login Page')}>
                        <img src={loginImg} alt="Login" className="box-image" />
                        <div className="lightbox-hint">🔍 Click to enlarge</div>
                      </div>

                      <div className="operational-image-row">
                        <div className="image-col">
                          <div className="image-title">Dashboard Page</div>
                          <div className="image-description">Main overview with key metrics, charts, and quick access to essential features</div>
                          <div className="image-box lightbox-trigger" onClick={() => openLightbox(dashboardImg, 'Dashboard Page')}>
                            <img src={dashboardImg} alt="Dashboard" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>

                        <div className="image-col">
                          <div className="image-title">Analytical Page</div>
                          <div className="image-description">Detailed data analysis with interactive charts and performance insights</div>
                          <div className="image-box lightbox-trigger" onClick={() => openLightbox(analyticalImg, 'Analytical Page')}>
                            <img src={analyticalImg} alt="Analytical" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>
                      </div>

                      <div className="operational-image-row" style={{ marginTop: '24px' }}>
                        <div className="image-col">
                          <div className="image-title">Add Items Page</div>
                          <div className="image-description">Form interface for adding new products with details, pricing, and categories</div>
                          <div className="image-box lightbox-trigger" onClick={() => openLightbox(addItemsImg, 'Add Items Page')}>
                            <img src={addItemsImg} alt="Add Items" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>

                        <div className="image-col">
                          <div className="image-title">All Items</div>
                          <div className="image-description">Complete inventory listing with search, filter, and bulk action capabilities</div>
                          <div className="image-box lightbox-trigger" onClick={() => openLightbox(allItemsImg, 'All Items')}>
                            <img src={allItemsImg} alt="All Items" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>
                      </div>

                      <div className="operational-image-row" style={{ marginTop: '24px' }}>
                        <div className="image-col">
                          <div className="image-title">Add Categories</div>
                          <div className="image-description">Create and organize product categories for better inventory management</div>
                          <div className="image-box lightbox-trigger" onClick={() => openLightbox(categoriesImg, 'Add Categories')}>
                            <img src={categoriesImg} alt="Add Categories" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>

                        <div className="image-col">
                          <div className="image-title">Categories Management</div>
                          <div className="image-description">Edit, delete, and organize product categories with hierarchical structure</div>
                          <div className="image-box lightbox-trigger" onClick={() => openLightbox(categManagementImg, 'Categories Management')}>
                            <img src={categManagementImg} alt="Categories Management" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>
                      </div>

                      <h3 className="predictions-header-title">Analytical Predictions</h3>
                      <div className="operational-image-row" style={{ marginTop: '16px' }}>
                        <div className="image-col">
                          <div className="image-box analytical-image-box lightbox-trigger" onClick={() => openLightbox(dataPredict1Img, 'Data Predictions')}>
                            <img src={dataPredict1Img} alt="Analytical Predictions" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                          <div className="image-box analytical-image-box lightbox-trigger" style={{ marginTop: '16px' }} onClick={() => openLightbox(seasonal1Img, 'Seasonal Analysis')}>
                            <img src={seasonal1Img} alt="Seasonal 1" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>
                        <div className="image-col">
                          <div className="image-box analytical-image-box lightbox-trigger" onClick={() => openLightbox(dataPredictionsImg, 'Data Predictions Chart')}>
                            <img src={dataPredictionsImg} alt="Data Predictions" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                          <div className="image-box analytical-image-box lightbox-trigger" style={{ marginTop: '16px' }} onClick={() => openLightbox(accountMgmtImg, 'Account Management')}>
                            <img src={accountMgmtImg} alt="Account Management" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>
                        <div className="image-col">
                          <div className="image-box analytical-image-box lightbox-trigger" onClick={() => openLightbox(seasonalImg, 'Seasonal Predictions')}>
                            <img src={seasonalImg} alt="Seasonal" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                          <div className="image-box analytical-image-box lightbox-trigger" style={{ marginTop: '16px' }} onClick={() => openLightbox(userSettingsImg, 'User Settings')}>
                            <img src={userSettingsImg} alt="User Settings" className="box-image" />
                            <div className="lightbox-hint">🔍 Click to enlarge</div>
                          </div>
                        </div>
                      </div>
                      <div className="predictions-desc-container">
                        <div className="prediction-desc-item">
                          <h4 className="prediction-desc-title">Data Predictions</h4>
                          <p className="prediction-desc-text">
                            Used to forecast sales and identify inventory issues. It tracks revenue trends, estimates next‑week earnings, and flags items at risk of overstock or slow movement.
                          </p>
                        </div>

                        <div className="prediction-desc-item">
                          <h4 className="prediction-desc-title">Demand Forecasting</h4>
                          <p className="prediction-desc-text">
                            Used to predict product demand, highlight growth trends, and spot seasonal surges. It helps your app guide inventory planning by showing which items may need restocking or promotion.
                          </p>
                        </div>

                        <div className="prediction-desc-item">
                          <h4 className="prediction-desc-title">Seasonal Predictions Dashboard</h4>
                          <p className="prediction-desc-text">
                            Tracks product demand by season, highlights shortage risks, and suggests restocking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxAlt}
        >
          <div className="lightbox-modal" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image">
              ✕
            </button>
            <div className="lightbox-img-wrapper">
              <img src={lightboxImg} alt={lightboxAlt} className="lightbox-image" />
            </div>
            {lightboxAlt && (
              <div className="lightbox-caption">{lightboxAlt}</div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
