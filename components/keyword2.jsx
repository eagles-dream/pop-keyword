import styles from './keyword2.module.css'
import '@fortawesome/fontawesome-free/js/all.js'

const Keyword2 = ({word2, traffic2}) => {
  const icon = (data) => {
    if(data==='up') {
      return(
        <span className={styles.icon_up}><i className={`fas fa-arrow-up`}></i></span>
        )
    } else if(data==='down') {
      return(
        <span className={styles.icon_down}><i className={`fas fa-arrow-down`}></i></span>
      )
    } else {
      return(
        <span className={styles.icon_equal}><i className={`fas fa-minus`}></i></span>
      )
    }    
  }
  return (  
    <div className={styles.container}>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          word2.slice(0, 5).map((item, i)=>{
            const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword} key={i}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+1}</span>
                      <span className={styles.word}>{item}</span>
                    </div>
                    <div className={styles.traffic}>
                      {icon(traffic2[i])}
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
          word2.slice(5, 10).map((item, i)=>{
            const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword} key={i}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className={styles.list_top}>
                    <div className={styles.list}>
                      <span className={styles.number}>{i+6}</span>
                      <span className={styles.word}>{item}</span>
                    </div>
                    <div className={styles.traffic}>
                    {icon(traffic2[i])}
                    </div>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}
 
export default Keyword2;