import FadeUp from "../Animation/Fadeup";

function Skills() {
  const skills = [
    {
      img: "../Images/html.png",
      label: "HTML5",
      alt: "HTML5",
    },
    {
      img: "../Images/css.png",
      label: "CSS3",
      alt: "CSS3",
    },
    {
      img: "../Images/js.png",
      label: "JavaScript",
      alt: "JavaScript",
    },
    {
      img: "../Images/react.png",
      label: "React",
      alt: "React",
    },
    {
      img: "../Images/next.png",
      label: "Next.js",
      alt: "Next Js",
    },
    {
      img: "../Images/typescript.png",
      label: "TypeScript",
      alt: "TypeScript",
    },
    {
      img: "../Images/tailwind.png",
      label: "Tailwind CSS",
      alt: "Tailwind",
    },
    {
      img: "../Images/bootstrap.png",
      label: "Bootstrap",
      alt: "Bootstrap",
    },
    {
      img: "../Images/github.png",
      label: "Git & GitHub",
      alt: "GitHub",
    },
    {
      img: "../Images/node-.png",
      label: "Node",
      alt: "Node",
    },
    {
      img: "../Images/figma.png",
      label: "Figma",
      alt: "Figma",
    },
    {
      img: "../Images/communication.png",
      label: "Communication",
      alt: "Communication",
    },
    {
      img: "../Images/presentation.png",
      label: "Presentation",
      alt: "Presentation",
    },
    {
      img: "../Images/doc.png",
      label: "Documentation",
      alt: "Documentation",
    },
  ];

  const row1 = [...skills, ...skills, ...skills];
  const row2 = [
    ...skills.slice(5),
    ...skills,
    ...skills,
    ...skills.slice(0, 5),
  ];
  const row3 = [
    ...skills.slice(8),
    ...skills,
    ...skills,
    ...skills.slice(0, 8),
  ];

  return (
    <>
      <section id="skills" className="container mx-auto px-8 py-4 scroll-mt-28">
        <FadeUp>
          <div className="flex flex-col gap-12">
            <div className="contact flex flex-col items-center gap-6 w-full">
              <div className="flex flex-col items-center gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-100 text-center">
                  Skills and Technologies
                </h1>

                <p className="text-base sm:text-lg text-gray-400 leading-normal text-center max-w-2xl mx-auto">
                  Modern technologies and tools are my arsenal for creating
                  engaging digital experiences. Every skill is sharpened through
                  real projects and practical application. I keep evolving to
                  deliver interfaces that are clean, fast, and user-friendly.
                </p>
                <div className="bg-blue-400/10 text-blue-300 border border-blue-400/20 px-3 py-1 rounded-full text-sm font-medium">
                  Technical Expertise
                </div>
              </div>
            </div>

            {/* First carousel - starts at position 0 */}
            <div className="overflow-hidden">
              <div className="grid grid-flow-col auto-cols-[150px] gap-12 skill-scroll hover:[animation-play-state:paused]">
                {row1.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg items-center justify-center py-2 h-full"
                  >
                    <img
                      src={skill.img}
                      alt={skill.alt}
                      className="w-15 h-auto"
                    />
                    <p className="text-base sm:text-lg text-gray-400 max-w-20xl">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second carousel - starts at position 3 (reverse direction) */}
            <div className="overflow-hidden">
              <div className="grid grid-flow-col auto-cols-[150px] gap-12 skill-scroll-rev hover:[animation-play-state:paused]">
                {row2.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg items-center justify-center py-2 h-full"
                  >
                    <img
                      src={skill.img}
                      alt={skill.alt}
                      className="w-15 h-auto"
                    />
                    <p className="text-base sm:text-lg text-gray-400 max-w-20xl">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Third carousel - starts at position 6 */}
            <div className="overflow-hidden">
              <div className="grid grid-flow-col auto-cols-[150px] gap-12 skill-scroll hover:[animation-play-state:paused]">
                {row3.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg items-center justify-center py-2 h-full"
                  >
                    <img
                      src={skill.img}
                      alt={skill.alt}
                      className="w-15 h-auto"
                    />
                    <p className="text-base sm:text-lg text-gray-400 max-w-20xl">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
export default Skills;
