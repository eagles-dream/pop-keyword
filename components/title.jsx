import styles from './title.module.css'

const Title = ({time, tab1, tab2, tab3}) => {
  return ( 
    <div className={styles.container}>
      {
        tab1
        ? <span className={styles.title}>실시간 검색어</span>
        : tab2 ? <span className={styles.title}>실시간 검색어</span>
               : tab3 ? <span className={styles.title}>인기상품</span>
                      : <span className={styles.title}>인기 동영상</span>
      }      
      <span className={styles.time}>{time}</span>
    </div>
   );
}
 
export default Title;