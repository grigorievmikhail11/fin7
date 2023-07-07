import { Link } from 'react-router-dom'
import styles from './CustomLink.module.scss'

export default function CustomLink({ to, className, children }) {
  return (
    <Link to={to} className={styles[className]}>
      {children}
    </Link>
  )
}
