import styles from './bannerpc.module.css'

const BannerPc = () => {
  return ( 
    <div className={styles.container}>
      <iframe className={styles.left}
        src="https://ads-partners.coupang.com/widgets.html?id=545320&template=banner&trackingCode=AF6264577&subId=&width=160&height=600" 
        width="160" height="600" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url">
      </iframe>
        {/* <a className={styles.left} href="https://coupa.ng/cbrOjO" target="_blank" referrerPolicy="unsafe-url" rel="noreferrer">
          <img src="https://ads-partners.coupang.com/banners/545320?subId=&traceId=V0-301-969b06e95b87326d-I545320&w=160&h=600" alt=""/>
        </a> */}
      <iframe className={styles.right}
        src="https://ads-partners.coupang.com/widgets.html?id=165511&template=banner&trackingCode=AF6264577&subId=&width=160&height=600" 
        width="160" height="600" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url">
      </iframe>
        {/* <a className={styles.right} href="https://coupa.ng/cbrNMT" target="_blank" referrerPolicy="unsafe-url" rel="noreferrer">
          <img src="https://ads-partners.coupang.com/banners/165511?subId=&traceId=V0-301-371ae01f4226dec2-I165511&w=160&h=600" alt=""/>
        </a> */}
    </div>
   );
}
 
export default BannerPc;