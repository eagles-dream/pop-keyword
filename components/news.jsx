import styles from './news.module.css'

const News = ({imgUrl, newsTitle, newsUrl}) => {
  console.log(newsTitle)
  return (  
    <div className={styles.container}>
      <div className={styles.title}>인기뉴스</div>
      {
        imgUrl.map((item, i)=>{ 
          return (
            <a href={newsUrl[i]} key={i} target="_blank" rel="noreferrer">
              <div className={styles.news}>
                <img className={styles.img} alt="news" src={item} />
                <div className={styles.order}>
                  <span className={styles.number}>인기 {i+1}위</span>
                  <span className={styles.text}>{newsTitle[i].replace(/&#39;|&quot;/g,"")}</span>
                </div>
              </div>
            </a>
        )})
      }
    </div>
  );
}
 
export default News;