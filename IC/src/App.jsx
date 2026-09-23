import React from 'react'
import { MdArrowUpward } from 'react-icons/md'

import Header from './Components/header'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ConferencAreashead from './Components/ConferencAreashead'
import Confrenceareadgrid from './Components/Confrenceareadgrid'
import { Dates } from './Components/Dates'
import { LeadershipConf } from './pages/LeadershipConf'
import { ContactConf } from './pages/ContactConf'
import { FooterConf } from './pages/FooterConf'

const App = () => {
  return (
    <div id="top" className="relative min-h-screen bg-[#FDFEFE]">

      <div className="sticky top-0 z-50 w-full">
        <Header />
        <Navbar />
      </div>

      <main className="w-full">
        <section id="home" className="w-full scroll-mt-32">
          <Home />
        </section>

        <section id="about" className="w-full scroll-mt-32">
          <About />
        </section>

        <section id="conference-areas" className="w-full scroll-mt-32">
          <ConferencAreashead />
          <Confrenceareadgrid />
        </section>

        <section id="important-dates" className="w-full scroll-mt-32">
          <Dates />
        </section>

        <section id="leadership" className="w-full scroll-mt-32">
          <LeadershipConf />
        </section>

        <section id="contact" className="w-full scroll-mt-32">
          <ContactConf />
        </section>
      </main>

      <FooterConf />

      {/* Back To Top */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#008A5E] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f4c5c] sm:bottom-8 sm:right-8"
      >
        <MdArrowUpward className="h-5 w-5" />
      </a>

    </div>
  )
}

export default App