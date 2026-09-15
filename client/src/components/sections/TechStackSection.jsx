import { techStack } from '../../data/techStack'
import Panel from '../layout/Panel'

function SkillItems({ skills, hidden = false }) {
  return (
    <ul className="tech-marquee-set" aria-hidden={hidden || undefined}>
      {skills.map((skill) => (
        <li
          key={skill.name}
          className={`tech-item tech-item--${skill.variant}`}
          title={skill.name}
        >
          <div className="tech-item-content">
            <span className="tech-item-frame">
              <img
                src={skill.icon}
                alt={hidden ? '' : skill.name}
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
  )
}

export default function TechStackSection() {
  return (
    <Panel
      id="tech-stack"
      title="Tools and Technologies"
      titleId="tech-stack-title"
      className="tech-panel"
    >
      <div className="tech-marquee" aria-label="Tools and technologies">
        <div className="tech-marquee-track">
          <SkillItems skills={techStack} />
          <SkillItems skills={techStack} hidden />
        </div>
      </div>
    </Panel>
  )
}
