import styles from './keyword1.module.css'
import BannerMobile from '../components/banner/bannermobile'

const Keyword1 = ({word1, traffic1}) => {
  const num = traffic1.map((a)=>{return a.replace("+","")})
  //console.log(num)
  const traffic = num.map((a)=>{return parseInt(a)})
  //console.log(traffic1)

  return (  
    <div className={styles.container}>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          word1.slice(0, 5).map((item, i)=>{
            const url = `https://www.google.com/search?q=${item}`
            return (
              <div className={styles.keyword} key={i}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+1}</span>
                      <span className={styles.word}>{item}</span>
                    </div>
                    <div className={styles.traffic}>
                      <span>{traffic[i]}천+ 검색</span>
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
          word1.slice(5, 10).map((item, i)=>{
            const url = `https://www.google.com/search?q=${item}`
            return (
              <div className={styles.keyword} key={i}>
                <a href={url} target="_blank" rel="noreferrer">
                <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+6}</span>
                      <span className={styles.word}>{item}</span>
                    </div>
                    <div className={styles.traffic}>
                      <span>{traffic[i]}천+ 검색</span>
                    </div>
                  </div>
                </a>
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
 
export default Keyword1;