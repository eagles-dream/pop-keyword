import styles from './keyword.module.css'

const Keyword = ({word, traffic}) => {
  const num = traffic.map((a)=>{return a.replace("+","")})
  //console.log(num)
  const traffic1 = num.map((a)=>{return parseInt(a)})
  //console.log(traffic1)

  return (  
    <div className={styles.container}>
      <div className={styles.title}>실시간 검색어</div>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          word.slice(0, 5).map((item, i)=>{
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
                      <span>{traffic1[i]}천+ 검색</span>
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
          word.slice(5, 10).map((item, i)=>{
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
                      <span>{traffic1[i]}천+ 검색</span>
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
 
export default Keyword;