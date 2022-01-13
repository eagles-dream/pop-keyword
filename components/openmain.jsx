import styles from './openmain.module.css'

const OpenMain = () => {
  return(
    <div className={styles.container}>
      <div className={styles.space}></div>
      <div className="nv-openmain" data-title="랭크보드" data-url="https://www.rankboard.co.kr/" data-type="W2"></div>
      <div className={styles.space}></div>
    </div>
  )
}

export default OpenMain;