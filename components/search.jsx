import { useRef } from 'react';
import styles from './search.module.css'
//import { useRouter } from 'next/router';

const Search = ({tab}) => {
  //const [querry, setQuerry] = useState()
  //console.log(querry)
  const searchRef = useRef()
  //const router = useRouter()
  const handleSearch = () => {
    const querry = searchRef.current.value
    console.log(querry)
    //router.push(`https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${querry}`, '_blank')
    {
      tab
      ? window.open(`https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${querry}`, '_blank')
      : window.open(`https://www.google.com/search?q=${querry}`, '_blank')
    }
    searchRef.current.value = null

  }
  const onClick = () => {
    handleSearch()
  }
  const onKeyPress = (event) => {
    if(event.key==='Enter') {
      handleSearch()
    }
  }

  return(
    <div className={styles.container}>
      <div className={styles.logo}></div>
      {
        tab
        ? <div className={styles.naver_search}>
            <span className={styles.naver_title}>N</span>
            <input ref={searchRef} className={styles.naver} type='search' onKeyDown={onKeyPress} placeholder='검색어를 입력해 주세요' />
            <div className={styles.naver_button} type='submit' onClick={onClick}><i className="fas fa-search"></i></div>
          </div>
        : <div className={styles.google_search}>
            <span className={styles.google_title}>G</span>
            <input ref={searchRef} className={styles.google} type='search' onKeyDown={onKeyPress} placeholder='검색어를 입력해 주세요' />
            <div className={styles.google_button} type='submit' onClick={onClick}><i className="fas fa-search"></i></div>
          </div>
      }
      <div className={styles.guide}></div>
    </div>
  )
}

export default Search;