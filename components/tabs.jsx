import styles from './tabs.module.css'

const Tabs = ({tab, Tab1, Tab2}) => {

  return(
    <div className={styles.container}>
      {
        tab
        ? <span className={styles.title_active} onClick={Tab1}>국내기준</span>
        : <span className={styles.title} onClick={Tab1}>국내기준</span>
      }
      {
        !tab
        ? <span className={styles.title_active} onClick={Tab2}>구글기준</span>
        : <span className={styles.title} onClick={Tab2}>구글기준</span>
      }      
    </div>
  )
}

export default Tabs;