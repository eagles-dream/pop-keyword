import styles from './news.module.css'
import Image from "next/image";
//import BannerMobile3 from '../components/banner/bannermobile3'

const News = ({imgUrl, newsTitle, newsUrl}) => {
  //console.log(imgUrl)
  return (  
    <div className={styles.container}>
      <div className={styles.title}>인기뉴스 TOP10</div>
      <div className={styles.list}>
        <div className={styles.left}>
        {
          imgUrl.slice(0, 5).map((item, i)=>{ 
            return (
              <a href={newsUrl[i]} key={i} target="_blank" rel="noreferrer">
                <div className={styles.news}>
                  {/* <img className={styles.img} alt="news" src={item} /> */}
                  <div>
                    <Image className={styles.img} alt="news" src={item} width={100} height={100} layout='fixed' />
                  </div>
                  <div className={styles.order}>
                    <span className={styles.number}>인기 {i+1}위</span>
                    <span className={styles.text}>{newsTitle[i].replace(/&#39;|&quot;|<b>\<\/b>|<b>|<\/b>/g,"")}</span>
                  </div>
                </div>
              </a>
          )})
        }
        </div>
        {/* <BannerMobile3 /> */}
        <div className={styles.right}>
        {
          imgUrl.slice(5, 10).map((item, i)=>{ 
            return (
              <a href={newsUrl[i+5]} key={i} target="_blank" rel="noreferrer">
                <div className={styles.news}>
                  {/* <img className={styles.img} alt="news" src={item} /> */}
                  <div>
                    <Image className={styles.img} alt="news" src={item} width={100} height={100} layout='fixed' />
                  </div>
                  <div className={styles.order}>
                    <span className={styles.number}>인기 {i+6}위</span>
                    <span className={styles.text}>{newsTitle[i+5].replace(/&#39;|&quot;|<b>\<\/b>|<b>|<\/b>/g,"")}</span>
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
 
export default News;