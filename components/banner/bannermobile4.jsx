import styles from './bannermobile4.module.css'

const BannerMobile4 = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.space}></div>
        <iframe 
          src="https://ads-partners.coupang.com/widgets.html?id=165514&template=banner&trackingCode=AF6264577&subId=&width=320&height=50" 
          width="320" height="50" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url">
        </iframe>
      <div className={styles.space}></div>
    </div>
   );
}
 
export default BannerMobile4;