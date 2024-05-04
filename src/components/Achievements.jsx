import styles from './Achievements.module.css'
import achive1 from '../img/achive/achievement-1.jpg'
import achive2 from '../img/achive/achievement-2.jpg'
import achive3 from '../img/achive/achievement-3.jpg'
import achive4 from '../img/achive/achievement-4.jpg'
import achive5 from '../img/achive/achievement-5.jpg'
import achive6 from '../img/achive/achievement-6.jpg'

function Achievements() {
  return (
    <div className={styles.achiveWrapper}>
      <h2>
      Наши <span className={styles.redText}>достижения </span>
      </h2>
      <div className={styles.achiveItems}>
          <div className={styles.achiveItem}>
            <img src={achive1} alt="" />
          </div>
          <div className={styles.achiveItem}>
            <img src={achive2} alt="" />
          </div>
          <div className={styles.achiveItem}>
            <img src={achive5} alt="" />
          </div>
          <div className={styles.achiveItem}>
            <img src={achive4} alt="" />
          </div>
          <div className={styles.achiveItem}>
            <img src={achive6} alt="" />
          </div>
          <div className={styles.achiveItem}>
            <img src={achive3} alt="" />
          </div>
      </div>

    </div>
  )
}

export default Achievements