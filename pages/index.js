import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home({items}) {
  const wordArray = items.elements[0].elements[0].elements.slice(4,24)
  const word = wordArray.map((a)=>{return a.elements[0].elements[0].text})

  return (
    <div className={styles.container}>실시간 검색어
      <div className={styles.order}>
        <div className={styles.left}>
        {
          word.slice(0, 5).map((item, i)=>{
            const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword} key={i}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className={styles.list}>
                    <span className={styles.number}>{i+1}</span>
                    <span className={styles.word}>{item}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
        <div className={styles.right}>
        {
          word.slice(5, 10).map((item, i)=>{
            const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword} key={i}>
                <a href={url} target="_blank" rel="noreferrer" >
                  <div className={styles.list}>
                    <span className={styles.number}>{i+6}</span>
                    <span className={styles.word}>{item}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR')
  const data = await res.data;
  const convert = require("xml-js");
  const items = JSON.parse(convert.xml2json(data));
  // Assume xmlText contains the example XML

  // Pass data to the page via props
  return { props: { items }, revalidate: 1, }
}