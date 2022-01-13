import styles from './keyword3.module.css'
import '@fortawesome/fontawesome-free/js/all.js'
import BannerMobile5 from './banner/bannermobile5'

const Keyword3 = ({final}) => {   
  return (  
    <div className={styles.container}>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          final.slice(0, 5).map((item, i)=>{
            return (
              <div className={styles.keyword} key={i}>
                <a href={item.landingUrl} target="_blank" rel="noreferrer">
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+1}</span>
                      <span className={styles.word}>{item.name}</span>
                    </div>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
        <div className={styles.right}>
        {
          final.slice(5, 10).map((item, i)=>{
            return (
              <div className={styles.keyword} key={i}>
                <a href={item.landingUrl} target="_blank" rel="noreferrer">
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+6}</span>
                      <span className={styles.word}>{item.name}</span>
                    </div>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
      </div>
      {/* <BannerMobile5 /> */}
    </div>
  );
}
 
export default Keyword3;