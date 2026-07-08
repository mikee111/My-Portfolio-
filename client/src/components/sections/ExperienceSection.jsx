import { experience } from '../../data/experience'
import Panel from '../layout/Panel'

export default function ExperienceSection() {
  return (
    <Panel
      id="experience"
      title="Experience"
      titleId="experience-title"
      className="experience-panel"
    >
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.year}-${item.role}`} className="timeline-item">
            <span
              className={`timeline-dot${item.current ? ' is-current' : ''}`}
              aria-hidden="true"
            />
            <div className="timeline-body">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  {item.company && <p className="timeline-company">{item.company}</p>}
                </div>
                <time className="timeline-year">{item.year}</time>
              </div>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  )
}
