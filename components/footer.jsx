import styles from './footer.module.css'

const Footer = () => {
  return(
    <div className={styles.container}>
      <span className={styles.copyright}>본 서비스는 사용자 여러분이 주신 의견으로 함께 만들어집니다. <br/>서비스 관련 건의 및 개선 사항들이 있으신분들은 언제든지 메일로 제안 부탁 드립니다.</span>
      <span className={styles.copyright}><p>Contack Email : everyrank@gmail.com</p></span>
      <span className={styles.copyright}>본 서비스는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공 받습니다.</span>
      <span className={styles.copyright}>© copyright rankboard.co.kr All right reserved.</span>
    </div>
  )
}

export default Footer;
