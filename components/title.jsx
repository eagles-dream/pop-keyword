import styles from './title.module.css'

const Title = ({time}) => {
  return ( 
    <div className={styles.container}>
      <span className={styles.title}>실시간 검색어</span>
      <span className={styles.time}>{time}</span>
    </div>
   );
}
 
export default Title;