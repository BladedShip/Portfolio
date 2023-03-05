import Head from 'next/head'

import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <div className='bg-[#2c2c2c] text-[#fcfcfc] h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Adithyan Jayakumar</title>
      </Head>

      {/* TODO: Add proper Social icons (Through Sanity) */}
      <Header/>

      {/* FIXME:Hero */}
      <section id="hero"  className="">
        <Hero/>
      </section>

      {/* FIXME:About */}
      <section id="about">
        <About/>
      </section>

      {/* FIXME:Experience */}
      <section id="experience">
        <Experience/>
      </section>

      {/* TODO:Skills */}
      <section id="skills">
        <Skills/>
      </section>

      {/* TODO:Projects */}
      <section id="projects">
        <Projects/>
      </section>

      {/* TODO:Contact */}
      
    </div>
  )
}
