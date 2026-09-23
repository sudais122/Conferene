import React from 'react'

const AboutIntro = () => {
  return (
    <div className="w-full max-w-4xl px-0 pt-10 text-left sm:px-2 sm:pt-14 md:px-4 md:pt-16 lg:px-6 lg:pt-20">

      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00895D] sm:text-sm sm:tracking-[0.15em] md:text-base">
        Together toward a healthier society
      </p>

      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#526673] sm:text-sm sm:tracking-[0.12em]">
        About the conference
      </p>

      <h2 className="mt-4 text-2xl font-bold leading-[1.2] tracking-tight text-[#003B68] sm:text-3xl md:text-4xl lg:text-5xl">
        An interdisciplinary academic forum for healthier communities
      </h2>

      <div className="mt-5 h-1 w-12 rounded-full bg-[#00895D] sm:mt-6 sm:w-14" />

      <div className="mt-5 space-y-4 text-sm leading-6 text-[#526673] sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
        <p className="text-left">
          Hosted by Abdul Wali Khan University Mardan, the event is guided by
          the theme{' '}
          <strong className="font-semibold text-[#003B68]">
            "Sports, Nutrition, and Mental Health for a Healthier Society."
          </strong>
        </p>
      </div>

    </div>
  )
}

export default AboutIntro