import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfileHeader from './components/layout/ProfileHeader'
import AnimatedBackground from './components/layout/AnimatedBackground'
import {
  AboutSection,
  CertificationsSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  TechStackSection,
} from './components/sections'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import { useTheme } from './hooks/useTheme'

function App() {
  const { darkMode, toggleTheme } = useTheme()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 320)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Router>
      <AnimatedBackground />
      <Routes>
        <Route
          path="/"
          element={
            <div className="page-shell">
              <ProfileHeader darkMode={darkMode} onToggleTheme={toggleTheme} />

              <main className="portfolio-card">
                <div className="content-grid content-grid--card">
                  <div className="content-column">
                    <AboutSection />
                    <TechStackSection />
                    <CertificationsSection />
                    <EducationSection />
                  </div>

                  <div className="sidebar-column">
                    <ProjectsSection />
                    <ExperienceSection />
                  </div>
                </div>
              </main>

              {showScrollTop && (
                <button
                  type="button"
                  className="scroll-top-btn"
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                >
                  ↑
                </button>
              )}
            </div>
          }
        />
        <Route path="/project/:projectId" element={<ProjectDetailsPage darkMode={darkMode} onToggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  )
}

export default App
