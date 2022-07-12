import { NextPage } from 'next'
import styles from './border.module.scss'

const Border: NextPage = () => {
  return (
    <>
      <div className={styles.page}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.content}>
          <div>
            <p>words here</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Border
