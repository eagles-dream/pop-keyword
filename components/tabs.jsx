import styles from './tabs.module.css'

const Tabs = ({tab1, tab2, tab3, tab4, Tab1, Tab2, Tab3, Tab4}) => {

  return(
    <div className={styles.container}>
      {
        tab1
        ? <span className={styles.title_active} onClick={Tab1}>국내기준</span>
        : <span className={styles.title} onClick={Tab1}>국내기준</span>
      }
      {
        tab2
        ? <span className={styles.title_active} onClick={Tab2}>구글기준</span>
        : <span className={styles.title} onClick={Tab2}>구글기준</span>
      }      
      {
        tab3
        ? <span className={styles.title_active} onClick={Tab3}>쿠팡기준</span>
        : <span className={styles.title} onClick={Tab3}>쿠팡기준</span>
      }      
      {
        tab4
        ? <span className={styles.title_active} onClick={Tab4}>유튜브</span>
        : <span className={styles.title} onClick={Tab4}>유튜브</span>
      }      
    </div>
  )
}

export default Tabs;