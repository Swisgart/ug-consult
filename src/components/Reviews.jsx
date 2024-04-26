import styles from './Reviews.module.css'

function Reviews() {
  return (
    <div className={styles.reviewsWrapper}>
      <h2 className={styles.reviewsHeader}>Нас выбирают, <span>за надежность, точность<br />
        и скорость предоставления услуг.</span></h2>

      <div className={styles.reviewsBlock}>
        <div style={
          {
            width: '800px',
            height: '600px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 0 15px rgba(134, 127, 127, 0.936)',
            borderRadius: '10px'
          }}>
          <iframe title="coments"
          className={styles.iframe}
            src="https://yandex.ru/maps-reviews-widget/145045104135?comments">
          </iframe>
          <a
            href="https://yandex.ru/maps/org/yug_konsalting/145045104135/"
            className={styles.reviewsLink}
          >Юг-Консалтинг на карте Симферополя — Яндекс Карты</a>
        </div>
      </div>
    </div>


  )
}

export default Reviews