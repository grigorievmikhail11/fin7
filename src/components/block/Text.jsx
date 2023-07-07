import clsx from 'clsx'
import styles from './styles/Text.module.scss'

export default function Text ({size ='20px', position='center', children}) {
  return (
    <div className={clsx(styles.text, styles[position])} 
       style={{ fontSize: size}} >
             {children}
    </div>)
}