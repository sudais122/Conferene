
import React from 'react'

import Header from './Components/header'
import Navbar from './Components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import ConferencAreashead from './Components/ConferencAreashead'

const App = () => {
  return (
    <div className="min-h-screen bg-[#FDFEFE]">
      {/* Sticky Header + Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <Header />
        <Navbar />
      </div>

      {/* Main Page Content */}
      <main className="w-full">
        {/* Home / Hero Section */}
        <section id="home" className="w-full">
          <Home />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full bg-[#FDFEFE] px-5 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 md:px-8 md:pb-24 md:pt-36 lg:px-10 lg:pt-40 xl:px-12"
        >
          <div className="mx-auto max-w-7xl px-10">
            <About />
          </div>
        </section>
        <ConferencAreashead />
      </main>
    </div>
  )
}

export default App
