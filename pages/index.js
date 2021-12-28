import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Keyword from '../components/keyword';
import Banner from '../components/banner';
import Footer from '../components/footer'

export default function Home({items}) {
  const wordArray = items.elements[0].elements[0].elements.slice(4,24)
  const word = wordArray.map((a)=>{return a.elements[0].elements[0].text})

  return (
    <div className={styles.container}>
      <Banner />
      <Keyword word={word} />
      <Footer />
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