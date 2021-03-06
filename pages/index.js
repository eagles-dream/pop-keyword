import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Title from '../components/title'
import Search from '../components/search';
import Tabs from '../components/tabs';
import Keyword1 from '../components/keyword1';
import Keyword2 from '../components/keyword2';
import Keyword3 from '../components/keyword3';
import Keyword4 from '../components/keyword4';
//import News from '../components/news';
import Coupang10 from '../components/coupang10';
import Youtube from '../components/youtube';
import OpenMain from '../components/openmain';
import Footer from '../components/footer'
import Script from 'next/script';
import { useEffect, useState } from 'react';
import BannerPc from '../components/banner/bannerpc'
//import BannerMobile3 from '../components/banner/bannermobile3'

export default function Home({items, data, coupangData1, coupangData2, /* coupangData3, */ /* coupangData4, */ youtube}) {
  const [wordArray1, setWordArray1] = useState([])
  const [wordArray2, setWordArray2] = useState([])
  const [youtubeArr, setYoutubeArr] = useState([])
  //const [time, setTime] = useState()
  //console.log(data)

  //여기서 부터 수정작업 
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)
  const [tab3, setTab3] = useState(false)
  const [tab4, setTab4] = useState(false)
  //console.log(wordArray1)
  //console.log(wordArray2)
  //console.log(youtube)
  //console.log(youtubeArr)
  //console.log(time)

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
  //console.log(traffic1)
  const traffic2 = wordArray2.map((a)=>{return a.directionClass})
  //console.log(traffic2)
  //const imgUrl = wordArray1.map((a)=>{return a.elements[5].elements[0].text}).slice(6,16)
  //console.log(imgUrl)
  
  //const newsTitleTemp = wordArray1.map((a)=>{return a.elements[7]}).slice(6,16)
  //const newsTitle = newsTitleTemp.map((a)=>{return a.elements[0].elements[0].text})
  //const newsTitle = wordArray1.map((a)=>{return a.elements[7].elements[0].elements[0].text})
  //console.log(wordArray1)
  //console.log(newsTitleTemp)
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
  
  //const newsUrlTemp = wordArray1.map((a)=>{return a.elements[7]}).slice(6,16)
  //const newsUrl = newsUrlTemp.map((a)=>{return a.elements[2].elements[0].text})
  //const newsUrl = wordArray1.map((a)=>{return a.elements[7].elements[2].elements[0].text})
  //console.log(newsUrl)

  const start1 = coupangData1.indexOf("[")
  const end1 = coupangData1.indexOf("]", start1)
  const item1 = coupangData1.substring(start1+1, end1-1)  
  const list1 = item1.split("},")
  const lists1 = list1.map((a)=>{return a.concat("}")})
  const lists1End = lists1.slice(0, -1)
  //console.log(lists1End)

  const start2 = coupangData2.indexOf("[")
  const end2 = coupangData2.indexOf("]", start2)
  const item2 = coupangData2.substring(start2+1, end2-1)  
  const list2 = item2.split("},")
  const lists2 = list2.map((a)=>{return a.concat("}")})
  const lists2End = lists2.slice(0, -1)
  //console.log(lists2End)

  /* const start3 = coupangData3.indexOf("[")
  const end3 = coupangData3.indexOf("]", start3)
  const item3 = coupangData3.substring(start3+1, end3-1)  
  const list3 = item3.split("},")
  const lists3 = list3.map((a)=>{return a.concat("}")})
  const lists3End = lists3.slice(0, 10)
  //console.log(lists3End) */

  /* const start4 = coupangData4.indexOf("[")
  const end4 = coupangData4.indexOf("]", start4)
  const item4 = coupangData4.substring(start4+1, end4-1)  
  const list4 = item4.split("},")
  const lists4 = list4.map((a)=>{return a.concat("}")})
  const lists4End = lists4.slice(0, 10)
  //console.log(lists4End) */

  const listsFinal = [...lists1End, ...lists2End, /* ...lists3End, */ /* ...lists4End */]
  //console.log(listsFinal)
  
  const finals = listsFinal.map((a)=>{return JSON.parse(a)})
  //console.log(final)

  const shuffle = finals
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const [final, setFinal] = useState(finals)

  useEffect(()=>{
    setFinal(shuffle)
  }, [])

  useEffect(()=>{
    setWordArray1(items.elements[0].elements[0].elements.slice(4,24));
  }, [])

  useEffect(()=>{
    setWordArray2(data[0].issue.slice(0,10));
  }, [])

  useEffect(()=>{
    setYoutubeArr(youtube.items);
  }, [])

  /* useEffect(()=>{
    setTime(data.issueTime);
  }, []) */

  return (
    <div className={styles.container}>
      <Head>
        <title>랭크보드</title>
        <meta 
          name="description" 
          content="네이버, 구글, 유튜브, 쿠팡과 연결해 실시간 검색어 순위 및 인기뉴스, 인기유튜브, 인기상품 등 실시간 트렌드를 확인할 수 있는 서비스입니다." />
        <meta 
          name="keywords" 
          content="실시간검색어, 실검, 네이버검색어, 네이버실검, 실검폐지, 네이버실검폐지, 구글검색어, 구글트랜드, 인기유튜브, 인기상품, 인기검색어, 키워드트렌드, 실시간트렌드, 마케팅, 키워드, 검색어순위, 인기뉴스" />
        <meta name="naver-site-verification" content="b62a7b3bb84d2b3a6b5712724d2f693f37bd4515" />
        <meta property="og:type" content="website" /> 
        <meta property="og:title" content="랭크보드" />
        <meta property="og:description" content="네이버, 구글, 유튜브, 쿠팡과 연결해 실시간 검색어 순위 및 인기뉴스, 인기유튜브, 인기상품 등 실시간 트렌드를 확인할 수 있는 서비스입니다." />
        <meta property="og:image" content="https://www.rankboard.co.kr/logo.png" />
        <meta property="og:url" content="https://www.rankboard.co.kr" />
      </Head>
      <Search tab1={tab1} tab2={tab2} tab3={tab3} />
      <BannerPc />      
      <Title /* time={time} */ tab1={tab1} tab2={tab2} tab3={tab3} />
      <Tabs tab1={tab1} tab2={tab2} tab3={tab3} tab4={tab4} Tab1={Tab1} Tab2={Tab2}  Tab3={Tab3} Tab4={Tab4} />
      {
        tab1
        ?<Keyword2 /* time={time} */ word2={word2} traffic2={traffic2} />
        //?<Keyword1 /* time={time} */ word1={word1} traffic1={traffic1} />
        : tab2 ? <Keyword1 /* time={time} */ word1={word1} traffic1={traffic1} />
               : tab3 ? <Keyword3 final={final} />
                      : <Keyword4 youtubeArr={youtubeArr} />
      }
      {/* <News imgUrl={imgUrl} newsTitle={newsTitle} newsUrl={newsUrl} /> */}
      {/* <BannerMobile3 /> */}
      <Coupang10 final={final} />
      <Youtube youtubeArr={youtubeArr} />      
      <Script type="text/javascript" src="https://openmain.pstatic.net/js/openmain.js" />
      <OpenMain />      
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

export async function getStaticProps() {
  const [itemsRes, dataRes, coupangRes1, coupangRes2, /* coupangRes3, */ /* coupangRes4, */ youtubeRes] = await Promise.all([
    axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR'), 
    axios('https://search.zum.com/issue.zum'),
    axios('https://ads-partners.coupang.com/widgets.html?id=546675&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    axios('https://ads-partners.coupang.com/widgets.html?id=548595&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    //axios('https://ads-partners.coupang.com/widgets.html?id=548626&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    //axios('https://ads-partners.coupang.com/widgets.html?id=548627&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${process.env.API_KEY}`),
  ])
  const [items, data, coupangData1, coupangData2, /* coupangData3, */ /* coupangData4, */ youtube] = await Promise.all([  
    JSON.parse(require("xml-js").xml2json(itemsRes.data)),
    dataRes.data,
    coupangRes1.data,
    coupangRes2.data,
    //coupangRes3.data,
    //coupangRes4.data,
    youtubeRes.data,
  ])

  return { props: { items, data, coupangData1, coupangData2, /* coupangData3, */ /* coupangData4, */ youtube }, revalidate: 1, };
}

/* export async function getServerSideProps() {  
  const [itemsRes, dataRes, coupangRes1, coupangRes2, youtubeRes] = await Promise.all([
    axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR'), 
    axios('https://search.zum.com/issue.zum'),
    axios('https://ads-partners.coupang.com/widgets.html?id=546675&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    axios('https://ads-partners.coupang.com/widgets.html?id=548595&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    //axios('https://ads-partners.coupang.com/widgets.html?id=548626&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    //axios('https://ads-partners.coupang.com/widgets.html?id=548627&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70'),
    axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${process.env.API_KEY}`),
  ])
  const [items, data, coupangData1, coupangData2, youtube] = await Promise.all([  
    JSON.parse(require("xml-js").xml2json(itemsRes.data)),
    dataRes.data,
    coupangRes1.data,
    coupangRes2.data,
    //coupangRes3.data,
    //coupangRes4.data,
    youtubeRes.data,
  ])

  return { props: { items, data, coupangData1, coupangData2, youtube } };
} */