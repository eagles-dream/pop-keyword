import { useRef } from 'react';
import Coupang from './coupang';
import styles from './search.module.css'
import '@fortawesome/fontawesome-free/js/all.js'
//import { useRouter } from 'next/router';

const Search = ({tab1, tab2, tab3}) => {
  //const [querry, setQuerry] = useState()
  //console.log(querry)
  const searchRef = useRef()
  //const router = useRouter()
  const handleSearch = () => {
    const querry = searchRef.current.value
    //console.log(querry)
    //router.push(`https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${querry}`, '_blank')
    {
      tab1
      ? window.open(`https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${querry}`, '_blank')
      : tab2 ? window.open(`https://www.google.com/search?q=${querry}`, '_blank')
             : window.open(`https://www.youtube.com/results?search_query=${querry}`, '_blank')
    }
    searchRef.current.value = null

  }
  const onClick = () => {
    handleSearch()
  }
  const onKeyPress = (event) => {
    if(event.key==='Enter') {
      event.preventDefault()
      handleSearch()
    }
  }

  return(
    <div className={styles.container}>
      <div className={styles.logo}></div>
      {
        tab1
        ? <div className={styles.naver_search}>
            <span className={styles.naver_title}>N</span>
            <input ref={searchRef} className={styles.naver} type='text' onKeyPress={onKeyPress} placeholder='검색어를 입력해 주세요' />
            <div className={styles.naver_button} type='submit' onClick={onClick}><i className={`fas fa-search`}></i></div>
          </div>
        : tab2 ?  <div className={styles.google_search}>
                    <span className={styles.google_title}>G</span>
                    <input ref={searchRef} className={styles.google} type='text' onKeyPress={onKeyPress} placeholder='검색어를 입력해 주세요' />
                    <div className={styles.google_button} type='submit' onClick={onClick}><i className={`fas fa-search`}></i></div>
                  </div>
               : tab3 ?  <Coupang />
                      : <div className={styles.youtube_search}>
                          <div className={styles.youtube_title}><i className="fab fa-youtube"></i></div>
                          <input ref={searchRef} className={styles.youtube} type='text' onKeyPress={onKeyPress} placeholder='검색어를 입력해 주세요' />
                          <div className={styles.youtube_button} type='submit' onClick={onClick}><i className={`fas fa-search`}></i></div>
                        </div>
      }
    </div>
  )
}

export default Search;