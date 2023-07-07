import clsx from 'clsx'
import styles from './styles/ContentBlock.module.scss'
import { useResize } from '../../hooks/useResize'

export default function ContentBlock ({direction, gap, gridRow, gridColumn, bg,  children}) {
  const {width} = useResize()  
  let none = width < 537

  let len = children.length === 2 ? 'twoBlock' : 'oneBlock' 
  let d = direction === 'column' ? 'column' : 'row'    
  
  return <div
   className={clsx(styles.contentBlock, styles[d], styles[len], styles[bg]) }
   style={!none ?{ gridColumn:gridColumn, gridRow: gridRow, gap: gap} : {}}>{children}</div>
} 