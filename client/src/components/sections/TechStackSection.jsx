import { techStack } from '../../data/techStack'
import Panel from '../layout/Panel'

export default function TechStackSection() {
  return (
    <Panel
      id="tech-stack"
      title="Tech Stack"
      titleId="tech-stack-title"
      className="tech-panel"
    >
      {techStack.map((group) => (
        <div key={group.label} className="tech-group">
          <h3 className="tech-group-label">{group.label}</h3>
          <ul className="tech-grid" aria-label={group.label}>
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className={`tech-item tech-item--${skill.variant}`}
                title={skill.name}
              >
                <div className="tech-item-content">
                  <span className="tech-item-frame">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`tech-item-icon tech-item-icon--${skill.variant}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="tech-item-name">{skill.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Panel>
  )
}
