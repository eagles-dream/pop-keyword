import styles from './keyword4.module.css'
import '@fortawesome/fontawesome-free/js/all.js'
import BannerMobile2 from './banner/bannermobile2'

const Keyword4 = ({youtubeArr}) => {
  
  return (  
    <div className={styles.container}>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          youtubeArr.slice(0, 5).map((item, i)=>{
            return (
              <div className={styles.keyword} key={i}>
                <a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noreferrer">
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+1}</span>
                      <span className={styles.word}>{item.snippet.title}</span>
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
          youtubeArr.slice(5, 10).map((item, i)=>{
            return (
              <div className={styles.keyword} key={i}>
                <a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noreferrer">
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+6}</span>
                      <span className={styles.word}>{item.snippet.title}</span>
                    </div>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
      </div>
      <BannerMobile2 />
    </div>
  );
}
 
export default Keyword4;