
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
      title="Personal Project"
      titleId="projects-title"
      className="projects-panel"
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline project-btn"
                >
                  View on GitHub
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
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline project-btn"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Panel>
  )
}