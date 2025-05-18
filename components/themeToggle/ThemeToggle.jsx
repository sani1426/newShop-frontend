import Image from 'next/image'
import styles from './themeToggle.module.css'




const ThemeToggle = () => {
  return (
    <div className={styles.container}>
        <Image  src='/icons/moon.png' alt='moon' width={14} height={14}/>
        <div className={styles.ball}></div>
        <Image src='/icons/sun.png' alt='moon' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle