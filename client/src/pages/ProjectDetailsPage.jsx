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
import seasonalImg from '../assets/images/seasonal .png'
import seasonal1Img from '../assets/images/seasonla 1.png'
import accountMgmtImg from '../assets/images/account management.png'
import userSettingsImg from '../assets/images/user settings .png'
import barberLandingImg from '../assets/certifications/barbershop/my landing page.jpeg.png'
import barberLoginImg from '../assets/certifications/barbershop/login page.jpeg.png'
import barberRegImg from '../assets/certifications/barbershop/registration page.png'
import barberAboutImg from '../assets/certifications/barbershop/about.jpeg.png'
import barberServicesImg from '../assets/certifications/barbershop/services.jpeg.png'
import barberContactImg from '../assets/certifications/barbershop/contact.jpeg.png'
import barberAdminDashImg from '../admin dashboards/dashboard.jpeg'
import barberAppointmentImg from '../admin dashboards/appointmnet.jpeg'
import barberAddCrewImg from '../admin dashboards/add new barber.jpeg.png'
import barberClientHistory from '../admin dashboards/client history.jpeg'
import barberCustomersImg from '../admin dashboards/custumers account.jpeg.png'
import barberSecurityImg from '../admin dashboards/security page.jpeg.png'
import userAppointmentsImg from '../user dash/appointmentsuser.jpeg.png'
import userSelectServiceImg from '../user dash/selectservice.jpeg.png'
import userSelectDateImg from '../user dash/selectdate.jpeg.png'
import userSelectBarberImg from '../user dash/select barber.jpeg.png'
import userSelectTimeImg from '../user dash/selcttime.jpeg.png'
import userServiceDetailsImg from '../user dash/services.jpeg (2).png'
export default function ProjectDetailsPage() {
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
                </div>
              </div>
            </div>
          </div>

          {/* BreadTalk Showcase - Centered with equal left and right spacing and balanced alignment (same as Teresitas) */}
          {project.id === 'bread-inventory' && (
            <div className="terisitas-showcase-container bread-showcase">
              <div className="terisitas-showcase-block">
                <div className="showcase-card-big">
                  <div className="image-title">Landing Page</div>
                  <div className="image-box lightbox-trigger" onClick={() => openLightbox(landingImg, 'Landing Page')}>
                    <img src={landingImg} alt="Landing Page" className="box-image" />
                    <div className="lightbox-hint">🔍 Click to enlarge</div>
                  </div>
                  <div className="image-description">Welcome page introducing the application with key features and call-to-action</div>
                </div>

                <div className="showcase-card-big">
                  <div className="image-title">Login Page</div>
                  <div className="image-box lightbox-trigger" onClick={() => openLightbox(loginImg, 'Login Page')}>
                    <img src={loginImg} alt="Login Page" className="box-image" />
                    <div className="lightbox-hint">🔍 Click to enlarge</div>
                  </div>
                  <div className="image-description">Secure authentication interface for user access with email/password validation</div>
                </div>

                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Dashboard Page</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(dashboardImg, 'Dashboard Page')}>
                      <img src={dashboardImg} alt="Dashboard Page" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Main overview with key metrics, charts, and quick access to essential features</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Analytical Page</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(analyticalImg, 'Analytical Page')}>
                      <img src={analyticalImg} alt="Analytical Page" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Detailed data analysis with interactive charts and performance insights</div>
                  </div>
                </div>

                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Add Items Page</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(addItemsImg, 'Add Items Page')}>
                      <img src={addItemsImg} alt="Add Items Page" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Form interface for adding new products with details, pricing, and categories</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">All Items</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(allItemsImg, 'All Items')}>
                      <img src={allItemsImg} alt="All Items" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Complete inventory listing with search, filter, and bulk action capabilities</div>
                  </div>
                </div>

                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Add Categories</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(categoriesImg, 'Add Categories')}>
                      <img src={categoriesImg} alt="Add Categories" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Create and organize product categories for better inventory management</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Categories Management</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(categManagementImg, 'Categories Management')}>
                      <img src={categManagementImg} alt="Categories Management" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Edit, delete, and organize product categories with hierarchical structure</div>
                  </div>
                </div>

                <div className="showcase-section-header">
                  <h3 className="showcase-section-title">Analytical Predictions</h3>
                </div>

                <div className="auth-image-row" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
                  <div className="auth-card">
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(dataPredict1Img, 'Data Predictions')}>
                      <img src={dataPredict1Img} alt="Data Predictions" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-box lightbox-trigger" style={{ marginTop: '14px' }} onClick={() => openLightbox(seasonal1Img, 'Seasonal Analysis')}>
                      <img src={seasonal1Img} alt="Seasonal Analysis" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                  </div>
                  <div className="auth-card">
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(dataPredictionsImg, 'Data Predictions Chart')}>
                      <img src={dataPredictionsImg} alt="Data Predictions Chart" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-box lightbox-trigger" style={{ marginTop: '14px' }} onClick={() => openLightbox(accountMgmtImg, 'Account Management')}>
                      <img src={accountMgmtImg} alt="Account Management" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                  </div>
                  <div className="auth-card">
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(seasonalImg, 'Seasonal Predictions')}>
                      <img src={seasonalImg} alt="Seasonal Predictions" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-box lightbox-trigger" style={{ marginTop: '14px' }} onClick={() => openLightbox(userSettingsImg, 'User Settings')}>
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

          {/* Terisitas Barbershop Showcase - Centered with equal left and right spacing and balanced alignment */}
          {project.id === 'terisitas-barbershop' && (
            <div className="terisitas-showcase-container">
              <div className="terisitas-showcase-block">
                {/* The 4 Big Showcase Pages with descriptions below the image */}
                <div className="showcase-card-big">
                  <div className="image-title">Landing Page</div>
                  <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberLandingImg, 'Landing Page')}>
                    <img src={barberLandingImg} alt="Landing Page" className="box-image" />
                    <div className="lightbox-hint">🔍 Click to enlarge</div>
                  </div>
                  <div className="image-description">Welcome page introducing the application with key features and call-to-action</div>
                </div>

                <div className="showcase-card-big">
                  <div className="image-title">Services Page</div>
                  <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberServicesImg, 'Services Page')}>
                    <img src={barberServicesImg} alt="Services Page" className="box-image" />
                    <div className="lightbox-hint">🔍 Click to enlarge</div>
                  </div>
                  <div className="image-description">Display of haircut options, styling packages, and grooming pricing</div>
                </div>

                <div className="showcase-card-big">
                  <div className="image-title">About Page</div>
                  <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberAboutImg, 'About Page')}>
                    <img src={barberAboutImg} alt="About Page" className="box-image" />
                    <div className="lightbox-hint">🔍 Click to enlarge</div>
                  </div>
                  <div className="image-description">Barbershop background, barber experience, and service standards</div>
                </div>

                <div className="showcase-card-big">
                  <div className="image-title">Contact Page</div>
                  <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberContactImg, 'Contact Page')}>
                    <img src={barberContactImg} alt="Contact Page" className="box-image" />
                    <div className="lightbox-hint">🔍 Click to enlarge</div>
                  </div>
                  <div className="image-description">Location details, opening hours, customer support, and booking inquiries</div>
                </div>

                {/* 2 Small Auth Pages side-by-side with clean consistent alignment */}
                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Login Page</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberLoginImg, 'Login Page')}>
                      <img src={barberLoginImg} alt="Login Page" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Secure authentication interface for user access with email/password validation</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Registration Page</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberRegImg, 'Registration Page')}>
                      <img src={barberRegImg} alt="Registration Page" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">Customer sign-up interface for online appointment booking and account management</div>
                  </div>
                </div>

                {/* User Dashboard Section Title */}
                <div className="showcase-section-header">
                  <h3 className="showcase-section-title">Admin Dashboard</h3>
                </div>


                {/* Admin Dashboard Pages side-by-side (Sales Dashboard below Login, Appointments below Registration) */}
                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Sales Dashboard</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberAdminDashImg, 'Sales Dashboard')}>
                      <img src={barberAdminDashImg} alt="Sales Dashboard" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The Terisitas Barbershop Admin Dashboard provides a clear overview of the barbershop's sales, revenue, bookings, and customer information, allowing the admin to efficiently monitor and manage daily operations.</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Appointments</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberAppointmentImg, 'Appointments')}>
                      <img src={barberAppointmentImg} alt="Appointments" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">This Appointment Schedule is part of the admin dashboard. It displays bookings made by users, showing details such as client names, services requested, assigned barbers, appointment times, and booking status.</div>
                  </div>
                </div>

                {/* Admin Management Pages side-by-side (Add Barbers Crew & Client History) */}
                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Add Barbers Crew</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberAddCrewImg, 'Add Barbers Crew')}>
                      <img src={barberAddCrewImg} alt="Add Barbers Crew" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The Barbers Crew feature in the admin dashboard allows the admin to add and manage barbers by entering their details, specialties, working schedule, and contact information.</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Client History</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberClientHistory, 'Client History')}>
                      <img src={barberClientHistory} alt="Client History" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">This is the Client History of the admin dashboard. In this history, it shows past transactions and customer appointment records, useful for auditing and tracking.</div>
                  </div>
                </div>

                {/* Admin Management Pages side-by-side (Customers Account & Security Page) */}
                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Customers Account</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberCustomersImg, 'Customers Account')}>
                      <img src={barberCustomersImg} alt="Customers Account" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The Customers Account feature allows the admin to view registered user profiles, contact details, account statuses, and manage customer records.</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Security Page</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(barberSecurityImg, 'Security Page')}>
                      <img src={barberSecurityImg} alt="Security Page" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The Security Page provides authentication settings, password management, and role-based access safeguards to protect sensitive barbershop and client information.</div>
                  </div>
                </div>

                {/* User Dashboard Section Title */}
                <div className="showcase-section-header">
                  <h3 className="showcase-section-title">User Dashboard</h3>
                </div>

                {/* User Dashboard Pages side-by-side (User Appointments & Select Service) */}
                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">User Appointments</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(userAppointmentsImg, 'User Appointments')}>
                      <img src={userAppointmentsImg} alt="User Appointments" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The user appointment interface allows clients to book reservation slots, choose preferred dates and times, and monitor the status of their barber appointments.</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Select Service</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(userSelectServiceImg, 'Select Service')}>
                      <img src={userSelectServiceImg} alt="Select Service" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The service selection screen enables customers to explore available haircut and styling packages, view service details and pricing, and customize their visit.</div>
                  </div>
                </div>

                {/* User Booking Pages side-by-side (Select Date & Select Barber) */}
                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Select Date</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(userSelectDateImg, 'Select Date')}>
                      <img src={userSelectDateImg} alt="Select Date" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The date and time scheduling interface enables clients to select their preferred appointment date and view available booking slots.</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Select Barber</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(userSelectBarberImg, 'Select Barber')}>
                      <img src={userSelectBarberImg} alt="Select Barber" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The barber selection interface presents available stylists and their specialties, allowing customers to choose their preferred barber.</div>
                  </div>
                </div>

                {/* User Booking Pages side-by-side (Select Time & Select Services) */}
                <div className="auth-image-row">
                  <div className="auth-card">
                    <div className="image-title">Select Time</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(userSelectTimeImg, 'Select Time')}>
                      <img src={userSelectTimeImg} alt="Select Time" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The time slot selection interface lets customers pick an available appointment time that fits their schedule seamlessly.</div>
                  </div>

                  <div className="auth-card">
                    <div className="image-title">Select Services</div>
                    <div className="image-box lightbox-trigger" onClick={() => openLightbox(userServiceDetailsImg, 'Select Services')}>
                      <img src={userServiceDetailsImg} alt="Select Services" className="box-image" />
                      <div className="lightbox-hint">🔍 Click to enlarge</div>
                    </div>
                    <div className="image-description">The service overview interface displays comprehensive options, pricing, and styling details for clients to customize their appointments.</div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
