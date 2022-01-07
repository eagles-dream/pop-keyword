import styles from './keyword3.module.css'
import '@fortawesome/fontawesome-free/js/all.js'
import BannerMobile from './banner/bannermobile'

const Keyword3 = () => {
  const word2 = ["준비중입니다.", "준비중입니다.", "준비중입니다.", "준비중입니다.", "준비중입니다.", "준비중입니다.", "준비중입니다.", "준비중입니다.", "준비중입니다.", "준비중입니다."]
  return (  
    <div className={styles.container}>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          word2.slice(0, 5).map((item, i)=>{
            //const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword} key={i}>
                {/* <a href={url} target="_blank" rel="noreferrer"> */}
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+1}</span>
                      <span className={styles.word}>{item}</span>
                    </div>
                    <div className={styles.traffic}>
                    </div>
                  </div>
                {/* </a> */}
              </div>
            )
          })
        }
        </div>
        <div className={styles.right}>
        {
          word2.slice(5, 10).map((item, i)=>{
            //const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword} key={i}>
                {/* <a href={url} target="_blank" rel="noreferrer"> */}
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+6}</span>
                      <span className={styles.word}>{item}</span>
                    </div>
                    <div className={styles.traffic}>
                    </div>
                  </div>
                {/* </a> */}
              </div>
            )
          })
        }
        </div>
      </div>
      <BannerMobile />
    </div>
  );
}
 
export default Keyword3;