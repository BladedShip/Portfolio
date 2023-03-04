import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-[#2c2c2c] text-[#fcfcfc] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Adithyan Jayakumar</title>
      </Head>

      {/* Header */}
      <Header/>

      {/* TODO:Hero */}
      <section id="hero" className='snap-center'>
        <Hero/>
      </section>

      {/* TODO:About */}

      {/* TODO:Experience */}

      {/* TODO:Skills */}

      {/* TODO:Projects */}

      {/* TODO:Contact */}
      
    </div>
  )
}
