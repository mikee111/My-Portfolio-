import { aboutParagraphs } from '../../data/about'
import Panel from '../layout/Panel'

export default function AboutSection() {
  return (
    <Panel id="about" title="About" titleId="about-title" className="about-panel">
      <div className="about-body">
        {aboutParagraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </Panel>
  )
}
