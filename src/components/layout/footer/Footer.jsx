import logo from '../../../assets/app_store_logo.png'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_item}>
        <div className={styles.footer_item_text}>
          Безопасность прежде всего!
        </div>
        <div className={styles.footer_item_img}>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className={styles.footer_item}></div>

      <div className={styles.footer_item}>
        <div></div>
        <div>©2023 Собственность компанни "GLOBAL EDUCATION".</div>
      </div>
    </div>
  )
}
