import styles from './title.module.css'

const Title = ({time, tab3}) => {
  return ( 
    <div className={styles.container}>
      {
        !tab3
        ? <span className={styles.title}>실시간 검색어</span>
        : <span className={styles.title}>인기상품</span>
      }      
      <span className={styles.time}>{time}</span>
    </div>
   );
}
 
export default Title;