import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Tabs from '../components/tabs';
import Keyword1 from '../components/keyword1';
import Keyword2 from '../components/keyword2';
import Youtube from '../components/youtube';
import Footer from '../components/footer'
import News from '../components/news';
import Title from '../components/title'
import { useEffect, useState } from 'react';

export default function Home({items, data, youtube}) {
  const [wordArray1, setWordArray1] = useState([])
  const [wordArray2, setWordArray2] = useState([])
  const [youtubeArr, setYoutubeArr] = useState([])
  const [time, setTime] = useState()
  const [tab, setTab] = useState(true)
  //console.log(wordArray1)
  //console.log(youtube)
  //console.log(youtubeArr)

  const Tab1 = () => { setTab(true) }
  const Tab2 = () => { setTab(false) }

  const word1 = wordArray1.map((a)=>{return a.elements[0].elements[0].text})
  //console.log(word1)
  const word2 = wordArray2.map((a)=>{return a.keyword})
  //console.log(word2)
  const traffic1 = wordArray1.map((a)=>{return a.elements[1].elements[0].text})
  const traffic2 = wordArray2.map((a)=>{return a.directionClass})
  //console.log(traffic2)
  const imgUrl = wordArray1.map((a)=>{return a.elements[5].elements[0].text})
  //console.log(imgUrl)
  const newsTitle = wordArray1.map((a)=>{return a.elements[7].elements[0].elements[0].text})
  //const newsTitle = wordArray1.map((a)=>{return a.elements[7]})
  //console.log(newsTitle)
  /* const newsTitle1 = newsTitle.map((a)=>{
    if(a===undefined) {
      return {elements:[{elements:[{text: "No Data"}]}]}
    } else {
      return a
    }
  }) */
  //console.log(newsTitle1)
  //const newsTitle2 = newsTitle1.map((a)=>{return a.elements[0].elements[0].text})
  //console.log(newsTitle2)
  const newsUrl = wordArray1.map((a)=>{return a.elements[7].elements[2].elements[0].text})
  //const newsUrl = wordArray1.map((a)=>{return a.elements[7]})
  //console.log(newsUrl)

  useEffect(()=>{
    setWordArray1(items.elements[0].elements[0].elements.slice(4,24));
  }, [])

  useEffect(()=>{
    setWordArray2(data.issue.slice(0,20));
  }, [])

  useEffect(()=>{
    setYoutubeArr(youtube.items);
  }, [])

  useEffect(()=>{
    setTime(data.issueTime);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>인기 검색어</title>
        <meta 
          name="description" 
          content="네이버와 연결해 실시간 검색어 순위 및 인기뉴스 등 실시간 트렌드를 확인할 수 있는 서비스입니다." />
        <meta 
          name="keywords" 
          content="실시간검색어, 키워드트렌드, 실시간트렌드, 마케팅, 키워드, 검색어순위, 인기뉴스" />
      </Head>
      <Title time={time} />
      <Tabs tab={tab} Tab1={Tab1} Tab2={Tab2} />
      {
        tab
        ?<Keyword2 time={time} word2={word2} traffic2={traffic2} />
        :<Keyword1 time={time} word1={word1} traffic1={traffic1} />
      }
      <Youtube youtubeArr={youtubeArr} />
      <News imgUrl={imgUrl} newsTitle={newsTitle} newsUrl={newsUrl}  />
      <Footer />
    </div>
  )
}


/* export async function getServerSideProps() {
  const res = await axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR')
  const data = await res.data;
  const convert = require("xml-js");
  const items = JSON.parse(convert.xml2json(data));
  
  return { props: { items } }
} */

/* export async function getStaticProps() {
  const res = await axios('https://search.zum.com/issue.zum')
  const data = await res.data;
  
  return { props: { data } }
} */

/* export async function getStaticProps() {
  const [itemsRes, dataRes, youtubeRes] = await Promise.all([
    axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR'), 
    axios('https://search.zum.com/issue.zum'),
    axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=KR&key=${process.env.API_KEY}`)
  ])  
  const [items, data, youtube] = await Promise.all([  
    JSON.parse(require("xml-js").xml2json(itemsRes.data)),
    dataRes.data,
    youtubeRes.data
  ])

  return { props: { items, data, youtube }, revalidate: 1, }
} */

export async function getServerSideProps() {  
  const [itemsRes, dataRes, youtubeRes] = await Promise.all([
    axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR'), 
    axios('https://search.zum.com/issue.zum'),
    axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=KR&key=${process.env.API_KEY}`)
  ])  
  const [items, data, youtube] = await Promise.all([  
    JSON.parse(require("xml-js").xml2json(itemsRes.data)),
    dataRes.data,
    youtubeRes.data
  ])

  return { props: { items, data, youtube } };
}