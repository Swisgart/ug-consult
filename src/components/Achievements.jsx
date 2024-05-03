import logo1 from '../img/achive/logo-6.jpg'
import logo2 from '../img/achive/logo-2.jpg'

import styles from './Achievements.module.css'

function Achievements() {
  return (
    <div className={styles.achiveWrapper}>
      <h2>
      Наши <span className={styles.redText}>достижения </span>
      </h2>
      <div className="achiveItems">
          <div className={styles.achiveItem}>
            <img src={logo1} alt="" />
          </div>
          <div className="achiveItem">
            <img src={logo2} alt="" />
          </div>
      </div>

    </div>
  )
}

export default Achievements