"use client";
import { useRouter } from "next/navigation";
import { ReadMore } from "../components/Readmore";
import ImageReveal from "../Animation/Imagereveal";

function ProjectScroll() {
  const router = useRouter();

  const projects = [
    {
      img: "../Images/todo.png",
      alt: "Todo App",
      heading: "Todo App",
      webTool: "React, Vite, Tailwind CSS v4, JavaScript",
      descriptions: [
        "Developed a modern todo management application using React and Tailwind CSS",
        "Allows users to add, complete, and delete daily tasks efficiently",
        "Implemented task completion toggle with checkbox interaction and strikethrough styling",
        "Displays total task count and completed task count dynamically",
        "Added input validation with error messages for empty task submissions",
        "Managed application state using React useState hook",
        "Used spread operator to update and maintain immutable todo state",
        "Generated unique task IDs using Date.now() for efficient task management",
        "Implemented array methods including map() and filter() for rendering and deleting tasks",
        "Used conditional rendering for error messages, success messages, and empty states",
        "Built a responsive and user-friendly interface optimized for different screen sizes",
      ],
      netlify: "https://suvekshyek-todo-app.netlify.app/",
      github: "https://github.com/NakarmiKevus/react-todo-app.git",
    },
    {
      img: "../Images/weather-react.png",
      alt: "Weather App React",
      heading: "Weather App",
      webTool: "React, Vite, Tailwind CSS v4, JavaScript",
      descriptions: [
        "Built a responsive weather application using React and OpenWeatherMap Current Weather API",
        "Allows users to search weather information by city name worldwide",
        "Displays real-time temperature, weather condition, humidity, and wind speed",
        "Implemented API integration using Fetch API with async/await and error handling",
        "Added loading states while fetching weather data for better user experience",
        "Handled invalid city searches and API errors with proper error messages",
        "Used React hooks including useState for managing application states",
        "Implemented conditional rendering for loading, error, and weather display states",
        "Secured API credentials using environment variables with Vite .env configuration",
        "Designed a clean and responsive UI using Tailwind CSS v4 for mobile and desktop devices",
        "Optimized application performance with a lightweight React and Vite setup",
      ],
      netlify: "https://suvekshyek-weather.netlify.app/",
      github: "https://github.com/NakarmiKevus/weather-app-react.git",
    },

    {
      img: "../Images/weather.png",
      alt: "Weather App",
      heading: "Weather App",
      webTool: "HTML, Tailwind CSS, JavaScript",
      descriptions: [
        "Built a real-time weather application using OpenWeather API",
        "Displays current weather conditions based on user search",
        "Shows temperature, humidity, wind speed, and weather status",
        "Implemented clean and responsive UI using Tailwind CSS",
        "Added search functionality for different cities worldwide",
        "Handled API data fetching and error states efficiently",
        "Optimized UI for mobile, tablet, and desktop devices",
        "Dynamic UI updates based on live weather data",
        "Lightweight vanilla JavaScript project focused on performance",
        "Minimal and user-friendly design for quick weather access",
      ],
      netlify: "https://climatixx.netlify.app/",
      github: "https://github.com/NakarmiKevus/Weather-App",
    },
    {
      img: "../Images/repopeek.png",
      alt: "GitHub User Finder",
      heading: "RepoPeek - GitHub User Finder",
      webTool: "HTML, Tailwind CSS, JavaScript",
      descriptions: [
        "Built a GitHub user search and profile viewer tool",
        "Fetches real-time user data from GitHub API",
        "Displays repositories, followers, and profile statistics",
        "Simple and fast search-based interface for developers",
        "Handles loading states and API error responses smoothly",
        "Responsive UI designed with Tailwind CSS",
        "Shows user profile insights in a clean dashboard format",
        "Optimized for quick developer lookup experience",
        "Frontend-only project using vanilla JavaScript",
        "Focus on minimal design and fast interaction flow",
      ],
      netlify: "https://repopeeek.netlify.app/",
      github: "https://github.com/NakarmiKevus/Repopeek",
    },
    {
      img: "../Images/devdojo.png",
      alt: "Dev Dojo Quiz App",
      heading: "Dev Dojo - Quiz Game",
      webTool: "React",
      descriptions: [
        "Built a quiz game using React with static questions and answers",
        "Displays multiple-choice questions with interactive UI",
        "Calculates and shows final score at the end of quiz",
        "Uses React state for quiz flow and logic handling",
        "Simple navigation between questions and results screen",
        "Clean and minimal UI for better user engagement",
        "Fully frontend-based project with no backend",
        "Focus on React fundamentals and component structure",
        "Fast and responsive quiz experience",
        "Designed for learning and practice purposes",
      ],
      netlify: "https://devdojoqize.netlify.app/",
      github: "https://github.com/NakarmiKevus/Dev-Dojo-Quiz-",
    },
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
        className="container mx-auto px-8 py-4 scroll-mt-28"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 cursor-pointer items-stretch">
            {projects.map((project, index) => (
              <ImageReveal key={index} delay={index * 0.15}>
                <div
                  onClick={() => router.push("/Projects")}
                  className=" h-full  group flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg py-4 px-4 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src={project.img}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col gap-4 flex-1 justify-between transition-transform duration-300">
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
                        onClick={(e) => e.stopPropagation()}
                        className="text-base sm:text-lg text-blue-300 hover:underline underline-offset-2 hover:text-blue-400"
                      >
                        Launch Live Site →
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
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
export default ProjectScroll;
