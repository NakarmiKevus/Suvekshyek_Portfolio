import HorizontalScroll from "../Animation/Horizontalscroll";
function Experience() {
  const Education = [
    {
      period: "2022 – 2025",
      degree: "BSc (Hons) Computing",
      institution: "Islington College",
      affiliation: "Affiliated with London Metropolitan University",
      description:
        "Graduated with a strong foundation in software development and modern web technologies. Focused on frontend development, database systems, and application development. Developed practical knowledge in MERN stack and UI/UX principles through academic and project-based learning.",
    },
    {
      period: "2020 – 2022",
      degree: "+2 (NEB – Science)",
      institution: "National School of Sciences",
      affiliation: "Kathmandu",
      description:
        "Completed higher secondary education under the National Board Examination (NEB) with a science background.",
    },
    {
      period: "2019 – 2020",
      degree: "SEE",
      institution: "Kathmandu Vidhya Kunja Secondary School",
      affiliation: "Secondary Education Examination",
      description:
        "Completed secondary education under NEB, building foundational academic and analytical skills.",
    },
  ];

  const WorkExperience = [
    {
      period: "Nov 2024 – Jan 2025",
      role: "UI/UX Design Intern",
      company: "Armis Tech Pvt. Ltd.",
      description: [
        "Designed user interfaces for both web and mobile applications",
        "Created wireframes, prototypes, and high-fidelity mockups using Figma",
        "Collaborated with developers and senior designers to meet project requirements",
        "Focused on usability, accessibility, and clean design systems",
        "Contributed to improving user flow and interaction design",
      ],
    },
    {
      period: "2022 – Present",
      role: "Architectural Designer",
      company: "Canopy Nepa Engineering Pvt. Ltd.",
      description: [
        "Managed complex projects and coordinated with teams and clients",
        "Developed solutions using technical tools and software (AutoCAD, design planning)",
        "Handled documentation and ensured project deadlines were met",
        "Applied problem-solving and organizational skills transferable to frontend projects",
        "Contributed to design workflows and effective project planning",
      ],
    },
  ];

  return (
    <>
      <section
        id="experience"
        className="container mx-auto px-8 py-4 scroll-mt-28"
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-100 text-center">
              Experience
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-normal text-center mx-auto">
              My journey blends academic learning with real-world experience.
              From technical education to professional roles, each step has
              shaped my problem-solving mindset and design-thinking approach.
            </p>
          </div>

          {/* Education */}

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-blue-400 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
                Education
              </h2>
            </div>
            <div className="relative flex flex-col gap-6">
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-600/60" />

              {Education.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <HorizontalScroll key={index}>
                    <div
                      className={`relative flex ${
                        isLeft ? "lg:justify-start" : "lg:justify-end"
                      }`}
                    >
                      <div className="lg:w-[48%] flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 cursor-pointer hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-blue-400/10 border border-blue-400/30 rounded-md px-3 py-1 w-fit">
                          <p className="text-sm text-blue-400 font-medium">
                            {item.period}
                          </p>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-medium text-gray-300">
                          {item.degree}
                        </h3>

                        <p className="text-base sm:text-lg text-gray-400">
                          {item.institution}
                        </p>

                        <p className="text-base sm:text-lg text-gray-400">
                          {item.affiliation}
                        </p>

                        <p className="text-base sm:text-lg text-gray-400">
                          {item.description}
                        </p>
                      </div>

                      <div className="hidden lg:block absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 border-4 border-slate-900 shadow shadow-blue-400/30" />
                    </div>
                  </HorizontalScroll>
                );
              })}
            </div>
          </div>

          {/* Work Experience */}

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-blue-400 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
                Work Experience
              </h2>
            </div>
            <div className="relative flex flex-col gap-6">
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-600/60" />

              {WorkExperience.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <HorizontalScroll key={index}>
                    <div
                      className={`relative flex ${
                        isLeft ? "lg:justify-start" : "lg:justify-end"
                      }`}
                    >
                      <div className="lg:w-[48%] flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 cursor-pointer hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-blue-400/10 border border-blue-400/30 rounded-md px-3 py-1 w-fit">
                          <p className="text-sm text-blue-400 font-medium">
                            {item.period}
                          </p>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-medium text-gray-300">
                          {item.role}
                        </h3>

                        <p className="text-base sm:text-lg text-gray-400">
                          {item.company}
                        </p>

                        <ul className="flex flex-col gap-1 list-disc list-inside">
                          {item.description.map((point, i) => (
                            <li
                              key={i}
                              className="text-base sm:text-lg text-gray-400"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="hidden lg:block absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 border-4 border-slate-900 shadow shadow-blue-400/30" />
                    </div>
                  </HorizontalScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
