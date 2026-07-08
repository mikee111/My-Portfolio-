import cssLogo from '../assets/tech-stack/css.png'
import htmlLogo from '../assets/tech-stack/html.png'
import jsLogo from '../assets/tech-stack/javascript.png'
import reactLogo from '../assets/tech-stack/react.png'
import xamppLogo from '../assets/tech-stack/xampp.png'

export const techStack = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML', icon: htmlLogo, variant: 'html' },
      { name: 'CSS', icon: cssLogo, variant: 'css' },
      { name: 'JavaScript', icon: jsLogo, variant: 'js' },
      { name: 'React', icon: reactLogo, variant: 'react' },
    ],
  },
  {
    label: 'Database & Server',
    skills: [
      { name: 'XAMPP', icon: xamppLogo, variant: 'xampp' },
    ],
  },
]
