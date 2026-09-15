
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import Panel from '../layout/Panel'

export default function ProjectsSection() {
  const navigate = useNavigate()

  const handleViewCaseStudy = (projectId) => {
    navigate(`/project/${projectId}`)
  }

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
                <h3 className="project-title">{project.secondTitle || 'terisitas reservation barbershops'}</h3>
                <div className="project-buttons-container">
                  <a
                    href={project.secondGithubUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline project-btn"
                  >
                    View GitHub
                  </a>
                  <button
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
    </Panel>
  )
}