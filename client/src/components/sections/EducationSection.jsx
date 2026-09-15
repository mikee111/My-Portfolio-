import { education } from '../../data/education'
import Panel from '../layout/Panel'

export default function EducationSection() {
  return (
    <Panel
      id="education"
      title="Educational Background"
      titleId="education-title"
      className="education-panel"
    >
      {education.map((entry) => (
        <p key={entry.title}>
          <strong>{entry.title}</strong>
          <span>{entry.detail}</span>
        </p>
      ))}
    </Panel>
  )
}
