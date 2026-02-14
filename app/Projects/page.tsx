import ImageReveal from "../Animation/Imagereveal";
import { ReadMore } from "../components/Readmore";

function Projects() {
  const projects = [
    {
      img: "../Images/mush.png",
      alt: "Mush",
      heading: "React ViteProject",
      webTool: "React Vite",
      descriptions: [
        "Developed a modern e-commerce frontend using React and Vite",
        "Structured the application using reusable and modular React components",
        "Implemented multi-page navigation with seamless routing experience",
        "Designed product listing, product details, and cart UI interfaces",
        "Maintained clean component hierarchy for better scalability",
        "Built responsive layouts optimized for mobile, tablet, and desktop devices",
        "Implemented dynamic UI rendering using static product data",
        "Focused on performance optimization using Vite's fast build system",
        "Applied consistent styling and layout structure across all pages",
        "Frontend-only implementation with static functionality for UI demonstration",
      ],
      netlify: "https://mush-project.netlify.app/",
      github: "https://github.com/NakarmiKevus/Mush-project",
    },
    {
      img: "../Images/glow.png",
      alt: "Mush",
      heading: "HTML CSS Project",
      webTool: "HTML & CSS",
      descriptions: [
        "Designed and developed a beauty product landing page using pure HTML and CSS",
        "Created a fully scrollable single-page website with structured content sections",
        "Implemented responsive design using CSS media queries",
        "Organized layout using flexbox and modern CSS positioning techniques",
        "Focused on clean typography and visual hierarchy for better readability",
        "Applied hover effects to enhance user interaction",
        "Maintained consistent spacing and alignment throughout the page",
        "Designed product showcase sections with attractive UI styling",
        "Ensured cross-device compatibility for mobile, tablet, and desktop",
        "Structured the codebase for clarity and maintainability",
      ],
      netlify: "https://glow-ecommerce-webpage.netlify.app/",
      github: "https://github.com/NakarmiKevus/Glow-Ecommerce",
    },
    {
      img: "../Images/skillshikshya.png",
      alt: "Skillshyishya",
      heading: "HTML CSS Project",
      webTool: "HTML & CSS",
      descriptions: [
        "Developed a fully responsive single-page website using HTML and CSS",
        "Implemented CSS animations to create engaging visual interactions",
        "Designed interactive hover effects to enhance user experience",
        "Structured webpage layout using semantic HTML elements",
        "Utilized flexbox and modern layout techniques for alignment and spacing",
        "Created smooth scrolling sections for better navigation flow",
        "Maintained clean and organized CSS structure for scalability",
        "Optimized UI components for consistent design across devices",
        "Focused on improving visual hierarchy and section clarity",
        "Ensured responsiveness for all screen sizes including mobile devices",
      ],
      netlify: "https://skillshikshya-webpage.netlify.app/",
      github: "https://github.com/NakarmiKevus/Skillshikshya",
    },
  ];

  return (
    <>
      <section
        id="project"
        className="container mx-auto px-8 py-4 scroll-mt-28 mb-12"
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-100 text-center">
              My Projects
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-normal text-center mx-auto">
              Turning ideas into responsive and interactive web experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 cursor-pointer items-start">
            {projects.map((project, index) => (
              <ImageReveal key={index} delay={index * 0.15}>
                <div
                  key={index}
                  className="group flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg py-4 px-4 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src={project.img}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col gap-4 transition-transform duration-300">
                    <h3 className="mt-6 text-xl text-gray-400 sm:text-2xl font-medium">
                      {project.heading}
                    </h3>

                    <p className="text-base sm:text-lg text-blue-300">
                      {project.webTool}
                    </p>

                    <ReadMore descriptions={project.descriptions} />

                    <div className="flex justify-between items-center gap-12 mt-4">
                      <a
                        href={project.netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg text-blue-300 hover:underline underline-offset-2 hover:text-blue-400"
                      >
                        Launch Live Site →
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 text-sm font-medium text-slate-200 transition cursor-pointer hover:bg-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 duration-300 px-3 py-2"
                      >
                        <img
                          src="/Images/github.png"
                          alt="github"
                          className="w-5 h-auto"
                        />
                        <span className="text-base sm:text-lg text-blue-300">
                          Github
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
