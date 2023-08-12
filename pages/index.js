import react from 'react'
import Head from 'next/head'

import Image from 'next/image'
import brain from "../public/brain.ico";

import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Faq from '../components/Faq.js'
import Section from '../components/Section.js'
import Pricing from '../components/Pricing.js'

export default function Home() {
  return (
    <>
    <Head>
      <title>Relembra.ai</title>
      <link rel="icon" href="https://raw.githubusercontent.com/FelipeFerreiraSS/app-memorizacao/main/public/icoLogo.ico" />
    </Head>
    <main>
      <Header />
      <Banner />
      <Section />
      <Pricing />
      <Faq />
      <Footer />
    </main>
    </>
  )
}
