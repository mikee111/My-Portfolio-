import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProfileHeader from './components/layout/ProfileHeader'
import {
  AboutSection,
  CertificationsSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  TechStackSection,
} from './components/sections'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import { AnimatedSection } from './components/ui/AnimatedSection'
import { useTheme } from './hooks/useTheme'

function App() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="page-shell">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProfileHeader darkMode={darkMode} onToggleTheme={toggleTheme} />
              </motion.div>

              <main className="content-grid">
                <div className="content-column">
                  <AnimatedSection delay={0.1}>
                    <AboutSection />
                  </AnimatedSection>
                  <AnimatedSection delay={0.2}>
                    <EducationSection />
                  </AnimatedSection>
                  <AnimatedSection delay={0.3}>
                    <TechStackSection />
                  </AnimatedSection>
                  <AnimatedSection delay={0.4}>
                    <CertificationsSection />
                  </AnimatedSection>
                </div>


                <div className="sidebar-column">
                  <AnimatedSection delay={0.2}>
                    <ExperienceSection />
                  </AnimatedSection>
                  <AnimatedSection delay={0.3}>
                    <ProjectsSection />
                  </AnimatedSection>
                </div>
              </main>
            </div>
          }
        />
        <Route path="/project/:projectId" element={<ProjectDetailsPage darkMode={darkMode} onToggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  )
}

export default App
