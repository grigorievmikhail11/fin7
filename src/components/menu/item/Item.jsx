import styles from './Item.module.scss'

export default function Item({ item }) {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <ion-icon name={`${item.ion}`} size="large"></ion-icon>
      </div>

      <div className={styles.short}>
        {item.ind}. &nbsp; {item.short}
      </div>

      <div className={styles.title}> {item.title}</div>
    </div>
  )
}
