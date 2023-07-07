import clsx from 'clsx'
import styles from './styles/Title.module.scss'

export default function Title ({size ='32px', position='center', color='black', children}) {
  return (<div className={clsx(styles.title, styles[position])} 
  style={{color: color, fontSize: size}} >
    {children}
    </div>)
}