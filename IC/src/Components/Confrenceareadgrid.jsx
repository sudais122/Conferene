
import React from "react";

import { CgGym } from "react-icons/cg";
import { CiApple } from "react-icons/ci";
import {
  LuBrain,
  LuUsers,
  LuLaptop,
  LuPersonStanding,
  LuMessageCircle,
  LuBookOpen,
} from "react-icons/lu";
const conferenceAreas = [
  {
    title: "Physical Activity, Health and Well-Being",
    icon: CgGym,
  },
  {
    title: "Nutrition, Dietetics and Healthy Lifestyles",
    icon: CiApple,
  },
  {
    title: "Lifestyle-Related Diseases, Aging and Active Living",
    icon: LuBrain,
  },
  {
    title: "Public Health and Community Development",
    icon: LuUsers,
  },
  {
    title: "Technology, Innovation and Sports Sciences",
    icon: LuLaptop,
  },
  {
    title: "Mind-Body Integration and Mental Health",
    icon: LuBrain,
  },
  {
    title: "Women, Gender Equity and Inclusion in Sports",
    icon: LuUsers,
  },
  {
    title: "Sports, Arts, Culture and Society",
    icon: LuPersonStanding,
  },
{
  title: "Media, Communication and Sports Journalism",
  icon: LuMessageCircle,
},
  {
    title: "Human Development through Sports and Physical Education",
    icon: LuBookOpen,
  },
];

export const Confrenceareadgrid = () => {
  return (
    <section className="bg-[#f8fafc] px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-16 xl:px-30 xl:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[#cbdde3] bg-white md:grid-cols-2">
          {conferenceAreas.map((area, index) => {
            const Icon = area.icon;

            const isLastMobileRow = index === conferenceAreas.length - 1;
            const isLastDesktopRow = index >= conferenceAreas.length - 2;

            return (
              <article
                key={area.title}
                className={`
                  group flex min-h-24 items-center gap-4
                  border-[#cbdde3] bg-white px-5 py-5
                  transition-colors duration-300
                  hover:bg-[#eef9f9]
                  sm:min-h-28 sm:gap-5 sm:px-7
                  ${!isLastMobileRow ? "border-b md:border-b-0" : ""}
                  ${index % 2 === 0 ? "md:border-r" : ""}
                  ${!isLastDesktopRow ? "md:border-b" : ""}
                `}
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-lg bg-[#d5f3ef] text-[#003B68]
                    transition-colors duration-300
                    group-hover:bg-[#c5eee8]
                    sm:h-12 sm:w-12
                  "
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <h3 className="text-base font-bold leading-snug tracking-tight text-[#101d26] sm:text-lg md:text-xl">
                  {area.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Confrenceareadgrid;
