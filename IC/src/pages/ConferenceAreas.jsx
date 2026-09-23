
import React from 'react'

import ConferencAreashead from '../Components/ConferencAreashead'
import Confrenceareadgrid from '../Components/Confrenceareadgrid'

const ConferenceAreas = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
      <div className="w-full max-w-6xl">
        <ConferencAreashead />

        <div className="mt-8 sm:mt-10 md:mt-12">
          <Confrenceareadgrid />
        </div>
      </div>
    </section>
  )
}

export default ConferenceAreas
