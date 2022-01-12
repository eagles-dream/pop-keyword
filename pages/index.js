import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Tabs from '../components/tabs';
import Keyword1 from '../components/keyword1';
import Keyword2 from '../components/keyword2';
import Keyword3 from '../components/keyword3';
import Keyword4 from '../components/keyword4';
import Youtube from '../components/youtube';
import Footer from '../components/footer'
import News from '../components/news';
import Title from '../components/title'
//import BannerPc from '../components/banner/bannerpc'
import { useEffect, useState } from 'react';
import Search from '../components/search';
import Script from 'next/script';
import Coupang10 from '../components/coupang10';
//import OpenModal from '../components/openmodal';

export default function Home({items, data, coupangData, youtube}) {
  const [wordArray1, setWordArray1] = useState([])
  const [wordArray2, setWordArray2] = useState([])
  const [youtubeArr, setYoutubeArr] = useState([])
  const [time, setTime] = useState()

  //여기서 부터 수정작업 
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)
  const [tab3, setTab3] = useState(false)
  const [tab4, setTab4] = useState(false)
  //console.log(wordArray1)
  //console.log(youtube)
  //console.log(youtubeArr)

  const Tab1 = () => { setTab1(true), setTab2(false), setTab3(false), setTab4(false) }
  const Tab2 = () => { setTab1(false), setTab2(true), setTab3(false), setTab4(false) }
  const Tab3 = () => { setTab1(false), setTab2(false), setTab3(true), setTab4(false) }
  const Tab4 = () => { setTab1(false), setTab2(false), setTab3(false), setTab4(true) }

  /* const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  }
  const handleShow = () => {
    setShow(true)
  } */

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
        <title>랭크보드</title>
        <meta 
          name="description" 
          content="네이버, 구글, 유튜브, 쿠팡과 연결해 실시간 검색어 순위 및 인기뉴스, 인기유튜브, 인기상품 등 실시간 트렌드를 확인할 수 있는 서비스입니다." />
        <meta 
          name="keywords" 
          content="실시간검색어, 실검, 네이버검색어, 구글검색어, 구글트랜드, 인기유튜브, 인기상품, 인기검색어, 키워드트렌드, 실시간트렌드, 마케팅, 키워드, 검색어순위, 인기뉴스" />
        <meta name="naver-site-verification" content="b62a7b3bb84d2b3a6b5712724d2f693f37bd4515" />
        <meta property="og:type" content="website" /> 
        <meta property="og:title" content="랭크보드" />
        <meta property="og:description" content="네이버, 구글, 유튜브, 쿠팡과 연결해 실시간 검색어 순위 및 인기뉴스, 인기유튜브, 인기상품 등 실시간 트렌드를 확인할 수 있는 서비스입니다." />
        <meta property="og:image" content="https://www.rankboard.co.kr/logo.png" />
        <meta property="og:url" content="https://www.rankboard.co.kr" />
      </Head>
      <Search tab1={tab1} tab2={tab2} tab3={tab3} />
      {/* <BannerPc /> */}      
      <Title time={time} tab1={tab1} tab2={tab2} tab3={tab3} />
      <Tabs tab1={tab1} tab2={tab2} tab3={tab3} tab4={tab4} Tab1={Tab1} Tab2={Tab2}  Tab3={Tab3} Tab4={Tab4} />
      {
        tab1
        ?<Keyword2 time={time} word2={word2} traffic2={traffic2} />
        : tab2 ? <Keyword1 time={time} word1={word1} traffic1={traffic1} />
               : tab3 ? <Keyword3 coupangData={coupangData} />
                      : <Keyword4 youtubeArr={youtubeArr} />
      }
      <News imgUrl={imgUrl} newsTitle={newsTitle} newsUrl={newsUrl} />
      <Coupang10 coupangData={coupangData} imgUrl={imgUrl} newsTitle={newsTitle} newsUrl={newsUrl} />
      <Youtube youtubeArr={youtubeArr} />      
      {/* <OpenModal show={show} handleClose={handleClose} handleShow={handleShow} /> */}
      <Script type="text/javascript" src="https://openmain.pstatic.net/js/openmain.js" />
      <div className={styles.open_main}>
        <div className={styles.space}></div>
        <div className="nv-openmain" data-title="랭크보드" data-url="https://www.rankboard.co.kr/" data-type="W2"></div>
        <div className={styles.space}></div>
      </div>
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

/* export async function getServerSideProps() {  
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
} */

export async function getServerSideProps() {  
  const [itemsRes, dataRes, coupangRes, youtubeRes] = await Promise.all([
    axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR'), 
    axios('https://search.zum.com/issue.zum'),
    axios('https://ads-partners.coupang.com/widgets.html?id=546675&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${process.env.API_KEY}`),
  ])
  const [items, data, coupangData, youtube] = await Promise.all([  
    JSON.parse(require("xml-js").xml2json(itemsRes.data)),
    dataRes.data,
    coupangRes.data,
    youtubeRes.data,
  ])

  return { props: { items, data, coupangData, youtube } };
}