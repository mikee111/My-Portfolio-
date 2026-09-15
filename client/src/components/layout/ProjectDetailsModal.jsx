export default function ProjectDetailsModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="project-details-page">
      <button className="details-back-btn" onClick={onClose}>
        ← Back
      </button>

      <div className="details-container">
        <div className="details-header">
          <h2 className="details-title">{project.title}</h2>
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
      </div>
    </div>
  )
}
