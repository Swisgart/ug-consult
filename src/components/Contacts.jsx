import styles from './Contacts.module.css'

function Contacts() {
  return (
    <div className={styles.contactsWrapper}>
      <h2 className={styles.contactsTitle}><span>Адрес</span></h2>

      <div className={styles.contactsInner}>
        <div className={styles.contactsInfo}>
          <p>ООО «БЦ»ЮГ-КОНСАЛТИНГ»</p>
          <p>ОГРН 1149102042913</p>
          <p>ИНН/КПП 9102026170/910201001</p>
          <p><b>295000, Республика Крым, г.Симферополь,<br />
            ул. Петропавловская, дом 12, 3 этаж, офис 308</b></p>
            <p><a href="tel:+79788293802">+7 (978) 82 93 802</a></p>
            <p><a href="tel:+79787569940">+7 (978) 75 69 940</a></p>
            <p><a href="mailto:ug-consulting@yandex.ru ">ug-consulting@yandex.ru </a></p>
        </div>
        <div className="contactsMap">
          <div style={{position:'relative',overflow:'hidden', borderRadius:'20px'}}>
            <a href="https://yandex.ru/maps/146/simferopol/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '0px'
              }}>Симферополь</a>
            <a href="https://yandex.ru/maps/146/simferopol/house/petropavlovskaya_ulitsa_12/Z00YdwdkTUYFQFpufXV0cXRlYQ==/?from=mapframe&ll=34.104432%2C44.950866&source=mapframe&um=constructor%3A1432823cf4611b85e39074e5b4c309a39f5a62ed16e5574afc6b33870b66e489&utm_medium=mapframe&utm_source=maps&z=16.69" style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '14px'
            }}>Яндекс Карты — транспорт, навигация, поиск мест</a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=34.104389%2C44.950556&source=mapframe&um=constructor%3A1432823cf4611b85e39074e5b4c309a39f5a62ed16e5574afc6b33870b66e489&utm_source=mapframe&z=17" 
              width="650"
              height="450"
              frameborder="1"
              allowfullscreen="true"
              style={{position:'relative', border:'none'}}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contacts