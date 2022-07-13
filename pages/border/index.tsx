import { NextPage } from 'next'
import styles from './border.module.scss'

const Border: NextPage = () => {
  return (
    <>
      <div className={styles.page}>
        {/* Full grunge <br /> */}
        <br />
        <div className={styles.content1}></div>
        <br />
        {/* Line art <br /> */}
        <br />
        <div className={styles.content2}></div>
        <br />
        {/* Grunge with clean middle <br /> */}
        <br />
        <div className={styles.content3}></div>
        <br />
        <br />
      </div>
    </>
  )
}

export default Border
