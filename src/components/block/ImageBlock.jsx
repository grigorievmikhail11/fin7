import clsx from 'clsx'
import styles from './styles/ImageBlock.module.scss'

export default function ImageBlock({ src, size, radius, position}) { 
  let r = radius === false ? 'br_none' : 'br_15px'
  let s = size === 'logo' ? 'logo' : 'normal'

  let p

  switch (position) {
    case 'center':
      p = 'logo_center'
      break;
    case 'left':
      p = 'logo_left'
        break;
    case 'right':
      p = 'logo_right'
          break;
    default:
      p = 'logo_left'
      break;
  }
  
  return (
    <div className={clsx(styles.imageBlock, styles[s], styles[r], styles[p]) } >
      <div className={styles.imageContainer}>
         <img src={src} alt="some" />
      </div>
     
    </div>
  )
}
