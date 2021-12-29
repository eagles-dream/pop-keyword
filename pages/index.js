import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Keyword from '../components/keyword';
import Banner from '../components/banner';
import Footer from '../components/footer'
import News from '../components/news';

export default function Home({items}) {
  const wordArray = items.elements[0].elements[0].elements.slice(4,24)
  const word = wordArray.map((a)=>{return a.elements[0].elements[0].text})
  const imgUrl = wordArray.map((a)=>{return a.elements[5].elements[0].text})
  const newsTitle = wordArray.map((a)=>{return a.elements[7].elements[0].elements[0].text})
  const newsUrl = wordArray.map((a)=>{return a.elements[7].elements[2].elements[0].text})

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
      <Banner />
      <Keyword word={word} />
      <News imgUrl={imgUrl} newsTitle={newsTitle} newsUrl={newsUrl}  />
      <Footer />
    </div>
  )
}

/* export async function getStaticProps() {
  const res = await axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR')
  const data = await res.data;
  const convert = require("xml-js");
  const items = JSON.parse(convert.xml2json(data));

  return { props: { items }, revalidate: 1, }
} */

export async function getServerSideProps() {
  const res = await axios('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR')
  const data = await res.data;
  const convert = require("xml-js");
  const items = JSON.parse(convert.xml2json(data));

  return { props: { items } }
}