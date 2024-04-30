import styles from './Contacts.module.css'

function Contacts() {
  return (
    <div className={styles.contactsWrapper}>
      <h2 className="contactsTitle"><span>Адрес</span></h2>

      <div className="contactsInnet">
        <div className="contactsInfo">
          <p>ООО «БЦ»ЮГ-КОНСАЛТИНГ»
          </p>
          <p>ОГРН 1149102042913</p>
          <p>ИНН/КПП 9102026170/910201001</p>
          <p>295000, Республика Крым, г.Симферополь,
            ул. Петропавловская, дом 12, 3 этаж, офис 308</p>
          <a href="tel:+79788293802">+7 (978) 82 93 802</a>
          <a href="tel:+79787569940">+7 (978) 75 69 940</a>
          <a href="mailto:ug-consulting@yandex.ru ">ug-consulting@yandex.ru </a>
        </div>
        <div className="contactsMap">
          <div style={{position:'relative',overflow:'hidden'}}>
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
              src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=34.104432%2C44.950866&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDUzMDI5ODQxEnLQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCa0YDRi9C8LCDQodC40LzRhNC10YDQvtC_0L7Qu9GMLCDQn9C10YLRgNC-0L_QsNCy0LvQvtCy0YHQutCw0Y8g0YPQu9C40YbQsCwgMTIiCg3vaghCFbDNM0I%2C&source=mapframe&um=constructor%3A1432823cf4611b85e39074e5b4c309a39f5a62ed16e5574afc6b33870b66e489&utm_source=mapframe&z=16.69"
              width="560"
              height="400"
              frameborder="1"
              allowfullscreen="true"
              style={{position:'relative'}}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contacts