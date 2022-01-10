import styles from './footer.module.css'

const Footer = () => {
  return(
    <div className={styles.container}>
      <span className={styles.copyright}>실시간 인기검색어 서비스 랭크보드</span>
      <span className={styles.copyright}>Contack Email : everyrank@gmail.com</span>
      <span className={styles.copyright}>© Copyright RankBoard</span>
    </div>
  )
}

export default Footer;
