
import React from 'react'

const pillars = [
  {
    title: 'Sports',
    image: '../../public//Card1.png',
    alt: 'People participating in sports and physical activity',
    description:
      'Physical activity, movement, exercise, and active lifestyles.',
  },
  {
    title: 'Nutrition',
    image: '../../public/Card2.png',
    alt: 'People preparing a balanced meal with fresh vegetables and grains',
    description:
      'Healthy food, balanced nutrition, and healthy living.',
  },
  {
    title: 'Mental Health',
    image: '../../public/Card3.png',
    alt: 'A diverse group practicing mindfulness together outdoors',
    description:
      'Mental well-being, mindfulness, balance, and psychological health.',
  },
]

const AboutCard = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pillars.map((pillar) => (
        <article
          key={pillar.title}
          className="group overflow-hidden rounded-2xl border border-[#DCE8E8] bg-white shadow-sm transition-all duration-300 "
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden sm:h-64">
            <img
              src={pillar.image}
              alt={pillar.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#003B68]/70 via-transparent to-transparent" />
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Topic */}
            <h3 className="text-2xl font-bold text-[#003B68]">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-[#526673]">
              {pillar.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default AboutCard
