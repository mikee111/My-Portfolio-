import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import Panel from '../layout/Panel'

const TERESITAS_DEMO_ACCOUNTS = [
  {
    label: 'USER ACCOUNT',
    email: 'demo.user@teresitas.com',
    password: 'DemoUser123',
  },
  {
    label: 'ADMIN ACCOUNT',
    email: 'demo.admin@teresitas.com',
    password: 'DemoAdmin123',
  },
]

export default function ProjectsSection() {
  const navigate = useNavigate()
  const [showDemoCredentials, setShowDemoCredentials] = useState(false)

  const handleViewCaseStudy = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  useEffect(() => {
    if (!showDemoCredentials) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setShowDemoCredentials(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [showDemoCredentials])

  return (
    <Panel
      id="projects"
      title="Personal Projects"
      titleId="projects-title"
      className="projects-panel"
    >
      <div className="projects-grid">
        {projects.filter(p => !p.hideFromGrid).map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-images-container">
              {project.images && project.images.map((img, idx) => (
                <div key={idx} className="project-image-wrap half-width">
                  <img
                    src={img}
                    alt={idx === 0 ? project.title : (project.secondTitle || 'Terisitas Reservation Barbershops')}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Fallback for projects with single image */}
              {!project.images && project.image && (
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
            <div className="project-info">
              <div className="project-col">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-buttons-container">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-btn"
                    >
                      View GitHub
                    </a>
                  )}
                  {project.objectives && (
                    <button
                      onClick={() => handleViewCaseStudy(project.id)}
                      className="btn btn-outline project-btn"
                    >
                      View Case Study
                    </button>
                  )}
                </div>
              </div>

              <div className="project-col">
                <h3 className="project-title">{project.secondTitle || 'Teresitas Barbershop Reservation System'}</h3>
                <div className="project-buttons-container">
                  <a
                    href={project.secondGithubUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline project-btn"
                  >
                    View GitHub
                  </a>
                  <a
                    href={project.secondDemoUrl || 'https://teresitas-barbershop.vercel.app'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline project-btn"
                  >
                    Live Demo
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowDemoCredentials(true)}
                    className="btn btn-outline project-btn"
                  >
                    Demo Credentials
                  </button>
                  <button
                    type="button"
                    onClick={() => handleViewCaseStudy(project.secondProjectId || project.id)}
                    className="btn btn-outline project-btn"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {showDemoCredentials && (
        <div
          className="demo-credentials-overlay"
          onClick={() => setShowDemoCredentials(false)}
          role="presentation"
        >
          <div
            className="demo-credentials-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-credentials-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="demo-credentials-title" className="demo-credentials-title">
              Demo Credentials
            </h3>

            {TERESITAS_DEMO_ACCOUNTS.map((account) => (
              <div key={account.label} className="demo-credentials-account">
                <p className="demo-credentials-label">{account.label}</p>
                <p>Email: {account.email}</p>
                <p>Password: {account.password}</p>
              </div>
            ))}

            <button
              type="button"
              className="demo-credentials-close"
              onClick={() => setShowDemoCredentials(false)}
            >
              [ Close ]
            </button>
          </div>
        </div>
      )}
    </Panel>
  )
}