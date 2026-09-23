
import React from 'react'

const leaders = [
  {
    image: '/public/Prof.-Dr.-Jamil-Ahmad.webp',
    role: 'Conference President',
    name: 'Professor Dr. Jamil Ahmad',
    position: 'Vice Chancellor',
    institution: 'Abdul Wali Khan University Mardan',
  },
  {
    image: '/public/zahir shah.jpeg',
    role: 'Conference Vice President',
    name: 'Professor Dr. Zahir Shah',
    position: 'Dean Faculty of Social Sciences',
    institution: 'Abdul Wali Khan University Mardan',
  },
  {
    image: '/public/farooq.jpeg',
    role: 'Conference Secretary',
    name: 'Dr. Farooq Hussain',
    position: 'Chairman, Department of Rehabilitation',
    institution: 'Abdul Wali Khan University Mardan',
  },
]

const Leadership = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#008A5E] sm:text-base">
            Conference leadership
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-[#003B68] sm:text-4xl">
            Academic Leadership
          </h1>
        </div>

        {/* Leadership Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-2xl border border-[#cbdde3] bg-white px-6 py-8 text-center transition-all duration-300 hover:border-[#b7d8d7] hover:shadow-md"
            >

              {/* Round Image */}
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[#d5f3ef] bg-[#eef7f4]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#008A5E]">
                  {leader.role}
                </p>

                <h3 className="mt-2 text-xl font-bold leading-snug text-[#003B68]">
                  {leader.name}
                </h3>

                <p className="mt-3 text-sm font-semibold text-[#526673]">
                  {leader.position}
                </p>

                <p className="mt-1 text-sm leading-6 text-[#526673]">
                  {leader.institution}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Leadership