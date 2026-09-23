import React from "react";

const milestones = [
  {
    label: "Milestone 1",
    title: "Registration Opens",
    date: "15th December 2026",
  },
  {
    label: "Milestone 2",
    title: "Abstract Submission Deadline",
    date: "15th January 2027",
  },
  {
    label: "Milestone 3",
    title: "Notification of Acceptance",
    date: "15th February 2027",
  },
  {
    label: "Milestone 4",
    title: "Conference",
    date: "16th & 17th March 2027",
  },
];

export const Dates = () => {
  return (
    <section className="w-full bg-[#eef7f4] px-4 py-12 sm:px-10 sm:py-16 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#008A5E] sm:text-base">
          Mark your calendar
        </p>

        <h1 className="mt-3 text-2xl font-extrabold text-[#003B68] sm:text-3xl md:text-4xl">
          Important Dates
        </h1>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 px-2 sm:mt-16 sm:grid-cols-2 sm:px-4 md:gap-y-16 md:px-6 lg:grid-cols-4">
        {/* Connecting line — only meaningful once items sit in one row */}
        <div className="absolute top-[6px] left-6 right-6 hidden h-[2px] bg-emerald-200 lg:block" />

        {milestones.map((m, i) => (
          <div key={i} className="relative">
            {/* Dot */}
            <div className="relative z-10 mb-5 h-3 w-3 rounded-full bg-emerald-600 sm:mb-6 sm:h-3.5 sm:w-3.5" />

            {/* Label */}
            <p className="text-[10px] font-bold uppercase text-[#008A5E] sm:text-[12px]">
              {m.label}
            </p>

            {/* Title */}
            <h3 className="mt-2 text-base font-bold leading-snug text-[#0f172a] sm:text-lg md:text-[18px]">
              {m.title}
            </h3>

            {/* Date */}
            <p className="mt-3 text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
              {m.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};