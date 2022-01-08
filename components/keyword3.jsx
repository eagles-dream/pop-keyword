import styles from './keyword3.module.css'
import '@fortawesome/fontawesome-free/js/all.js'
import BannerMobile from './banner/bannermobile'

const Keyword3 = ({coupangData}) => {
  //console.log(coupangData)
  const start = coupangData.indexOf("[")
  //console.log(start)
  const end = coupangData.indexOf("]", start)
  //console.log(end)
  const item = coupangData.substring(start+1, end-1)
  //console.log(item)
  
  const list = item.split("},")
  const lists = list.map((a)=>{return a.concat("}")})
  //console.log(lists[0])
  
  const final = lists.map((a)=>{return JSON.parse(a)})
  
  /* const baseUrlStart = coupangData.indexOf("thumbnailBaseUrl")
  const baseUrlEnd = coupangData.indexOf(",", baseUrlStart)
  console.log(baseUrlStart)
  console.log(baseUrlEnd)
  const baseUrl = coupangData.substring(baseUrlStart+18, baseUrlEnd)
  console.log(baseUrl)
  const baseUrlFinal = JSON.parse(baseUrl)
  console.log(baseUrlFinal)

  const thumbnail = final[0].imagePath
  console.log(thumbnail) */
  
  return (  
    <div className={styles.container}>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          final.slice(10, 15).map((item, i)=>{
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
          final.slice(15, 20).map((item, i)=>{
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
      <BannerMobile />
    </div>
  );
}
 
export default Keyword3;