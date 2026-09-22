
import React from 'react'

import Hometext from '../Components/Hometext'
import CountDown from '../Components/CountDown'

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[680px] w-full bg-[#003C69] sm:min-h-[720px] lg:min-h-[760px]"
    >

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/conference.jpg"
          alt="International Conference"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Horizontal Blue → Transparent Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003C69] via-[#003C69]/95 to-[#003C69]/20" />

      {/* Bottom Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#003C69]/50 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:min-h-[720px] sm:px-6 md:px-8 lg:min-h-[760px] lg:px-10 lg:py-24">
        <div className="w-full max-w-3xl">
          <Hometext />
        </div>
      </div>

      {/* Floating Countdown */}
      <CountDown />

    </section>
  )
}

export default Home