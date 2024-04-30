import styles from './Header.module.css'
import logo from '../img/logo.svg'
import Button from '../UI/Button'

function Header() {
  return (
    <div className={styles.headerMainScreen}>
      <div className={styles.headerNav}>
        <img className={styles.headerLogo} src={logo} alt="Ug consult logo" />
        <div className={styles.phoneNumbers}>
          <a href="tel:+79788293802">+7 (978) 82 93 802</a>
          <a href="tel:+79787569940">+7 (978) 75 69 940</a>
          <a href="mailto:ug-consulting@yandex.ru ">ug-consulting@yandex.ru </a>
        </div>
      </div>
      <h1 className={styles.headerTitle}
      ><span>БЦ "ЮГ-КОНСАЛТИНГ"</span><br />
        РЕГИСТРАЦИЯ ООО ИЛИ ИП БЕСПЛАТНО, ПРИ ЗАКЛЮЧЕНИИ ДОГОВОРА НА ОБСЛУЖИВАНИЕ НА 12 МЕСЯЦЕВ
      </h1>
      <div className={styles.btn}>
        <Button text='Получить предложение' />
      </div>
    </div>
  )
}


export default Header