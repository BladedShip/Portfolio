import Head from 'next/head'

import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <div className='bg-[#2c2c2c] text-[#fcfcfc] h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Adithyan Jayakumar</title>
      </Head>

      {/* Header */}
      <Header/>

      {/* FIXME:Hero */}
      <section id="hero">
        <Hero/>
      </section>

      {/* FIXME:About */}
      <section id="about">
        <About/>
      </section>

      {/* TODO:Experience */}

      {/* TODO:Skills */}

      {/* TODO:Projects */}

      {/* TODO:Contact */}
      
    </div>
  )
}
