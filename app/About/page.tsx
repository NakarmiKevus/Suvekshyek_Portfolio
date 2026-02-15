import HorizontalScroll from "../Animation/Horizontalscroll";
import ImageReveal from "../Animation/Imagereveal";

function About() {
  const productivity = [
    {
      img: "../Images/thunder.png",
      alt: "Thunder",
      value: "10%",
      label: "Performance Increase",
    },
    {
      img: "../Images/globe.png",
      alt: "Globe",
      value: "4+",
      label: "Production Apps",
    },
  ];

  const technologies = [
    {
      img: "../Images/js.png",
      alt: "JavaScript",
      label: "JavaScript",
    },
    {
      img: "../Images/react.png",
      alt: "React",
      label: "React",
    },
    {
      img: "../Images/next.png",
      alt: "Next",
      label: "Next",
    },
    {
      img: "../Images/tailwind.png",
      alt: "Tailwind",
      label: "Tailwind",
    },
    {
      img: "../Images/git.png",
      alt: "Git",
      label: "Git",
    },
    {
      img: "../Images/github.png",
      alt: "GitHub",
      label: "GitHub",
    },
    {
      img: "../Images/Mongo.png",
      alt: "MongoDb",
      label: "MongoDb",
    },
    {
      img: "../Images/node.png",
      alt: "Node",
      label: "Node",
    },
  ];

  return (
    <>
      <section className="container mx-auto px-8 py-4">
        <div className="flex flex-col gap-16 [@media(min-width:1440px)]:px-42 [@media(min-width:1440px)]:py-4 mb-12">
          <div className="flex flex-col text-center gap-6">
            <h1 className=" text-slate-100 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Frontend Developer
            </h1>
            <h3 className="text-xl text-gray-400 sm:text-2xl font-medium">
              Building modern, responsive web applications with React, Next.js,
              Tailwind CSS, and the MERN stack, with a strong emphasis on UI/UX
              and performance.
            </h3>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-col flex-1">
              <h2 className="text-2xl text-slate-100 sm:text-3xl font-semibold">
                From Design to Interactive Reality
              </h2>
              <div className="flex flex-col gap-1 mb-6 ">
                <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-20xl">
                  I’m a Full-Stack Developer based in Kathmandu, Nepal, with a
                  strong focus on frontend development and user experience. I
                  build clean, responsive interfaces using React and Next.js,
                  while integrating scalable backend solutions with Node.js,
                  Express, and MongoDB.
                </p>
                <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-20xl">
                  With experience in UI/UX design (Figma) and projects like my
                  trekking application NepTrip, I enjoy turning ideas into
                  intuitive, visually engaging digital products, guided by clean
                  code, thoughtful design, and continuous learning.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {productivity.map((production, index) => (
                  <ImageReveal key={index}>
                    <div className="flex flex-col items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300">
                      <img
                        src={production.img}
                        alt={production.alt}
                        className="w-20 h-auto"
                      />
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-400">
                        {production.value}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-400 leading-normal text-center">
                        {production.label}
                      </p>
                    </div>
                  </ImageReveal>
                ))}
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <img
                src="../Images/pp.png"
                alt="Profile"
                className="rounded-3xl w-500 h-150 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden w-full mb-10">
        <div className="flex gap-20 animate-scroll hover:[animation-play-state:paused] cursor-pointer">
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <div
                key={index}
                className="flex gap-4 items-center justify-center shrink-0"
              >
                <img src={tech.img} alt={tech.alt} className="w-10 h-auto" />
                <p className="text-base sm:text-lg text-gray-400 whitespace-nowrap">
                  {tech.label}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}
export default About;
