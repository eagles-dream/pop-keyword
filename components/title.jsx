import styles from './title.module.css'

const Title = ({/* time, */ tab1, tab2, tab3}) => {
  const date = new Date()

  return ( 
    <div className={styles.container}>
      {
        tab1
        ? <span className={styles.title}>실시간 검색어</span>
        : tab2 ? <span className={styles.title}>실시간 검색어</span>
               : tab3 ? <span className={styles.title}>인기상품</span>
                      : <span className={styles.title}>인기 동영상</span>
      }      
      <span className={styles.time}>
        {/* <span>{date.getFullYear()}년 </span> */}
        <span>{date.getMonth()+1}월 </span> 
        <span>{date.getDate()}일 </span> 
        <span>{date.getHours()}시 </span> 
        <span>{date.getMinutes()}분 기준</span>
        {/* {time} */}
      </span>
    </div>
   );
}
 
export default Title;