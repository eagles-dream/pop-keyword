import styles from './coupang10.module.css'

const Coupang10 = ({final}) => {  
  return (  
    <div className={styles.container}>
      <div className={styles.title}>인기쇼핑 TOP10</div>
      <div className={styles.list}>
        <div className={styles.left}>
        {
          final.slice(10, 15).map((item, i)=>{ 
            return (
              <a href={item.landingUrl} key={i} target="_blank" rel="noreferrer">
                <div className={styles.news}>
                  <img className={styles.img} alt="news" src={`https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/${item.imagePath}`} />
                  <div className={styles.order}>
                    <span className={styles.number}>인기 {i+1}위</span>
                    <span className={styles.text}>{item.name}</span>
                    <div className={styles.rate}>할인률 {item.discountRate}%</div>
                  </div>
                </div>
              </a>
          )})
        }
        </div>
        <div className={styles.right}>
        {
          final.slice(15, 20).map((item, i)=>{ 
            return (
              <a href={item.landingUrl} key={i} target="_blank" rel="noreferrer">
                <div className={styles.news}>
                  <img className={styles.img} alt="news" src={`https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/${item.imagePath}`} />
                  <div className={styles.order}>
                    <span className={styles.number}>인기 {i+6}위</span>
                    <span className={styles.text}>{item.name}</span>
                    <div className={styles.rate}>할인률 {item.discountRate}%</div>
                  </div>
                </div>
              </a>
          )})
        }
        </div>
      </div>
    </div>
  );
}
 
export default Coupang10;