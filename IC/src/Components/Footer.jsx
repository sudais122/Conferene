
import React from "react";
import { MdArrowUpward } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="top" className="w-full bg-[#0b2540] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">

          {/* Conference */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="max-w-md text-lg font-bold leading-snug sm:text-xl">
              1st International Conference on Health &amp;{" "}
              <br className="hidden sm:block" />
              Sports Sciences
            </h2>

            <p className="mt-4 text-sm text-[#9fb3c8]">
              Sports, Nutrition, and Mental Health for a Healthier Society
            </p>

            <p className="mt-6 text-xs font-bold text-white sm:text-sm">
              16th &amp; 17th March 2027 · Abdul Wali Khan University Mardan
            </p>
          </div>

          {/* Links column 1 */}
          <div className="flex">
            <nav className="flex flex-col gap-4 sm:gap-5">
              <a
                href="#home"
                className="text-[#c3d2e0] transition-colors hover:text-white"
              >
                Home
              </a>

              <a
                href="#conference-areas"
                className="text-[#c3d2e0] transition-colors hover:text-white"
              >
                Conference Areas
              </a>

              <a
                href="#leadership"
                className="text-[#c3d2e0] transition-colors hover:text-white"
              >
                Leadership
              </a>
            </nav>
          </div>

          {/* Links column 2 */}
          <div className="flex">
            <nav className="flex flex-col gap-4 sm:gap-5">
              <a
                href="#about"
                className="text-[#c3d2e0] transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#important-dates"
                className="text-[#c3d2e0] transition-colors hover:text-white"
              >
                Important Dates
              </a>

              <a
                href="#contact"
                className="text-[#c3d2e0] transition-colors hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          <p className="text-[11px] leading-4 text-[#9fb3c8] sm:text-xs">
            © 2027 1st International Conference on Health &amp; Sports Sciences.
            Abdul Wali Khan University Mardan.
          </p>

          <a
            href="#top"
            className="group flex w-fit items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#c3d2e0] transition-colors hover:text-white"
          >
            Back to top

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-[#008A5E] group-hover:bg-[#008A5E]">
              <MdArrowUpward className="h-3 w-3" />
            </span>
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
