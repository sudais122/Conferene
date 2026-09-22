
import React from 'react'

import AboutIntro from '../Components/AboutIntro'
import AboutCard from '../Components/AboutCard'

const About = () => {
  return (
    <div className="w-full">
      {/* Conference Introduction */}
      <AboutIntro />

      {/* Three Conference Pillars */}
      <div className="mt-12 sm:mt-14 md:mt-16">
        <AboutCard />
      </div>
    </div>
  )
}

export default About
