import styles from './Header.module.css'
import logo from '../img/logo.svg'

function Header() {
  return (
    <div className={styles.headerMainScreen}>
      <div className={styles.headerNav}>
        <img className={styles.headerLogo} src={logo} alt="Ug consult logo" />
        <a href="tel:+79788293802">+7 (978) 82 93 802 </a>
        <p></p>
      </div>
    </div>
  )
}


export default Header