import { useLocation } from 'react-router-dom'

export default function AnimatedBackground() {
  const { pathname } = useLocation()

  return <div key={pathname} className="animated-background" aria-hidden="true" />
}