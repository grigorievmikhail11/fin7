import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import styles from './Layout.module.scss'
import Container from '../Container/Container'

export default function Layout() {
  return (
    <Container>
      <div className={styles.layout}>
        <Header />      
        <Outlet />
        <Footer />
      </div>
    </Container>
  )
}
