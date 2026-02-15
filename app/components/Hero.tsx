"use client";
import React from "react";
import CountUp from "react-countup";
import BlurFade from "../Animation/BlurFade";

import dynamic from "next/dynamic";
const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

function Hero() {
  const infos = [
    {
      img: "../Images/download.png",
      label: "Resume",
      alt: "resume",
      link: "/resume.pdf",
    },
    {
      img: "../Images/github.png",
      label: "GitHub",
      alt: "github",
      link: "https://github.com/NakarmiKevus",
    },
    {
      img: "../Images/linkedin.png",
      label: "Linkedin",
      alt: "linkedin",
      link: "https://www.linkedin.com/in/suvekshyek-nakarmi-427808284/",
    },
    {
      img: "../Images/gmail.png",
      label: "Email",
      alt: "email",
      link: "mailto:nakarmisuvekshyek@gmail.com?subject=Portfolio Inquiry&body=Hi Suvekshyek, I'd like to connect with you.",
    },
  ];

  const experiences = [
    {
      value: 4,
      label: "PROJECTS",
      suffix: "+",
    },
    {
      value: 6,
      label: "TECH STACKS",
      suffix: "+",
    },
    {
      value: 100,
      label: "HOURS CODED",
      suffix: "+",
    },
    {
      value: 4000,
      label: "BUG SQUASHED",
      suffix: "+",
    },
  ];

  return (
    <section id="home" className="container mx-auto px-8 py-4 scroll-mt-28 ">
      <BlurFade delay={0}>
        <div className="flex justify-between items-center gap-6">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-2 items-center mb-6 lg:items-start">
              <h1 className="flex gap-2 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-100">
                <span className="wave inline-block text-6xl">👋</span>
                Hi, I'm
              </h1>

              <h3 className="text-3xl sm:text-4xl font-bold text-gray-400 text-center lg:text-justify lg:text-5xl xl:text-6xl">
                <Typewriter
                  options={{
                    strings: [
                      "Suvekshyek Nakarmi",
                      "Frontend Developer",
                      // "Full-Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </div>

            <div className="flex flex-col">
              <p className="text-base sm:text-lg text-gray-400 leading-normal text-center lg:text-left mb-12">
                I'm a Frontend and Full-Stack Developer who enjoys crafting
                clean UI and reliable backend logic. Always learning and
                improving through real-world projects.
              </p>

              <div className="grid grid-cols-2 gap-10 cursor-pointer md:flex justify-center lg:justify-start">
                {infos.map((info, index) => (
                  <a
                    href={info.link}
                    key={index}
                    target={info.label !== "Email" ? "_blank" : undefined}
                    rel={
                      info.label !== "Email" ? "noopener noreferrer" : undefined
                    }
                  >
                    <div className="flex gap-2 justify-center items-center bg-slate-700 py-2 px-5 rounded-full transition-all duration-500 hover:scale-[1.2]">
                      <img
                        src={info.img}
                        alt={info.alt}
                        className="w-5 h-auto"
                      />
                      <p className="text-base text-slate-300 font-medium md:text-lg">
                        {info.label}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-1 cursor-pointer transition-all duration-800 hover:scale-[1.1]">
            <img src="../Images/developer.png" alt="developer" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-5 px-2 ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <p className="text-4xl text-slate-100 lg:text-5xl font-bold">
                <CountUp
                  end={experience.value}
                  duration={3.5}
                  suffix={experience.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <p className="text-base text-slate-300 font-medium md:text-lg uppercase tracking-wide text-center">
                {experience.label}
              </p>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}

export default Hero;
