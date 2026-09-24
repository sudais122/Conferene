import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Hometext = () => {
  return (
    <div className="flex max-w-4xl flex-col gap-5">
      {/* University */}
      <p className="text-sm font-semibold tracking-wide text-[#00895D] sm:text-base">
        Abdul Wali Khan University Mardan presents
      </p>

      {/* Main Heading */}
      <h1 className="max-w-4xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
        1st International Conference on Health, Nutrition, Mental Well-Being &
        Sports Sciences
      </h1>

      {/* Subtitle with vertical white accent */}
      <div className="flex items-stretch gap-4">
        <div className="w-1 shrink-0 rounded-full bg-white" />

        <h5 className="max-w-2xl text-base font-medium leading-relaxed text-white/90 sm:text-lg md:text-xl">
          Sports, Nutrition, and Mental Health for a Healthier Society
        </h5>
      </div>

      {/* Conference Information */}
      <div className="mt-2 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:gap-8">
        {/* Date */}
        <div className="flex items-center gap-3">
          <FaRegCalendarAlt className="shrink-0 text-lg text-[#00895D] sm:text-xl" />

          <p className="text-sm font-medium sm:text-base">
            16th &amp; 17th March 2027
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <IoLocationOutline className="shrink-0 text-xl text-[#00895D] sm:text-2xl" />

          <p className="text-sm font-medium sm:text-base">
            Abdul Wali Khan University Mardan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hometext;
