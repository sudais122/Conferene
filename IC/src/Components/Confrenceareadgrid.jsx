import React from "react";

const conferenceAreas = [
  {
    title: "Physical Activity, Health, and Well-Being",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14h3l2-5 3 10 2-5h6" />
        <circle cx="8" cy="5" r="2" />
        <path d="M8 7v4l-3 3" />
      </svg>
    ),
  },
  {
    title: "Nutrition, Dietetics, and Healthy Lifestyles",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21c-4-2-7-5.5-7-10 0-3 2-5 5-5 1.5 0 2.5.7 3 1.5C13.5 6.7 14.5 6 16 6c3 0 5 2 5 5 0 4.5-3 8-9 10Z" />
        <path d="M12 7c-1 3-1 7 0 10" />
      </svg>
    ),
  },
  {
    title: "Lifestyle-Related Diseases, Aging, and Active Living",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 12a8 8 0 1 1-2.34-5.66" />
        <path d="M20 5v5h-5" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    title: "Public Health and Community Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="7" r="3" />
        <circle cx="6" cy="14" r="2.5" />
        <circle cx="18" cy="14" r="2.5" />
        <path d="M12 10v4M8 14h8M4 20c0-2.5 1-4 2-4s2 1.5 2 4M16 20c0-2.5 1-4 2-4s2 1.5 2 4" />
      </svg>
    ),
  },
  {
    title: "Technology, Innovation, and Sports Sciences",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8M8 13h5M9 19v2M15 19v2" />
        <path d="m17 13 2 2 3-4" />
      </svg>
    ),
  },
  {
    title: "Mind-Body Integration and Mental Health",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
        <path d="M9 12h2l1-2 1.5 4 1-2H17" />
      </svg>
    ),
  },
];

const Confrenceareadgrid = () => {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#059669]">
            Conference Themes
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a2540] md:text-4xl">
            Conference Areas
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Explore the key research and discussion areas covered by the
            conference.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conferenceAreas.map((area) => (
            <article
              key={area.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f4c5c]/20 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e0f2f7] text-[#0f4c5c] transition-colors duration-300 group-hover:bg-[#0f4c5c] group-hover:text-white">
                <div className="h-7 w-7">
                  {area.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold leading-7 text-[#0a2540]">
                {area.title}
              </h3>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#059669] transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Confrenceareadgrid;