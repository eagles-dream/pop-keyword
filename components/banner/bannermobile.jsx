import styles from './bannermobile.module.css'

const BannerMobile = () => {
  return ( 
    <div className={styles.container}>
        <a className={styles.center} href="https://coupa.ng/cbrPAP" target="_blank" referrerPolicy="unsafe-url" rel="noreferrer">
          <img src="https://ads-partners.coupang.com/banners/26883?subId=&traceId=V0-301-879dd1202e5c73b2-I26883&w=320&h=50" alt=""/>
        </a>
    </div>
   );
}
 
export default BannerMobile;