import React from "react";

import AboutIntro from "../Components/AboutIntro";
import AboutCard from "../Components/AboutCard";

const About = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-27">

      {/* Three Conference Pillars */}
            {/* Conference Introduction */}
      <div className="w-full pt-40 sm:pt-20 md:pt-14 lg:pt-16 xl:pt-20">
      </div>
      <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
                <AboutIntro />

        <AboutCard />
      </div>
    </div>
  );
};

export default About;
