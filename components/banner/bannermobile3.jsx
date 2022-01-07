import styles from './bannermobile3.module.css'

const BannerMobile3 = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.space}></div>
      <iframe 
        src="https://ads-partners.coupang.com/widgets.html?id=546675&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70" 
        width="680" height="70" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url">
      </iframe>
      <div className={styles.space}></div>
    </div>
   );
  }
 
export default BannerMobile3;