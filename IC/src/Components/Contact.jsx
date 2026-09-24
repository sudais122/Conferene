import React from "react";

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdAccessTime,
  MdArrowOutward,
} from "react-icons/md";

const contactDetails = [
  {
    icon: MdEmail,
    title: "Email",
    value: "farooqhussain@awkum.edu.pk",
    href: "mailto:Farooqhussain@awkum.edu.pk",
  },
  {
    icon: MdPhone,
    title: "Phone",
    value: "+92 333 9192912",
    href: "tel:+923339192912",
  },
  {
    icon: MdLocationOn,
    title: "Venue",
    value: "Abdul Wali Khan University Mardan",
    href: "#venue",
  },
  {
    icon: MdAccessTime,
    title: "Conference Dates",
    value: "16 & 17 March 2027",
    href: "#dates",
  },
];

const Contact = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#008A5E] sm:text-base">
            Get in touch
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-[#003B68] sm:text-4xl ">
            Contact the Conference Team
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#526673] sm:text-[16px]">
            Have a question about registration, abstract submission, or the
            conference programme? Contact the conference team using the
            information below.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-[#cbdde3] bg-white p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#008A5E]">
              Conference Secretariat
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#003B68]">
              We're here to help
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#526673] sm:text-base">
              For conference-related inquiries, please contact the conference
              secretariat through the details provided below.
            </p>

            <div className="mt-8 space-y-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-[#cbdde3] hover:bg-[#eef7f4]"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#d5f3ef] text-[#003B68] transition-colors duration-300 group-hover:bg-[#c5eee8]">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#008A5E]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#003B68] sm:text-base">
                        {item.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    <MdArrowOutward className="ml-auto h-5 w-5 shrink-0 text-[#526673] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Venue */}
          <div
            id="venue"
            className="overflow-hidden rounded-2xl border border-[#cbdde3] bg-white"
          >
            {/* Static Map Area */}
            <div className="flex h-64 items-center justify-center bg-[#eef7f4]">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d5f3ef] text-[#003B68]">
                  <MdLocationOn className="h-7 w-7" />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-[#008A5E]">
                  Conference Venue
                </p>

                <p className="mt-2 text-lg font-bold text-[#003B68]">
                  Abdul Wali Khan University Mardan
                </p>
              </div>
            </div>

            {/* Venue Details */}
            <div className="p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#008A5E]">
                Location
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#003B68]">
                Abdul Wali Khan University Mardan
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#526673] sm:text-base">
                Mardan, Khyber Pakhtunkhwa, Pakistan
              </p>

              <a
                href="https://www.google.com/maps/place/Abdul+Wali+Khan+University+Mardan+(+AWKUM+-+Garden+Campus+)/@34.149108,72.0566219,17z/data=!3m1!4b1!4m6!3m5!1s0x38dec9541fd88b4f:0x2a74fe7d04c5d2c5!8m2!3d34.149108!4d72.0591968!16s%2Fg%2F11c3t9d9ml?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#003B68] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0f4c5c]"
              >
                View on Google Maps
                <MdArrowOutward className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;