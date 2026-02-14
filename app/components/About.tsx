import FadeUp from "../Animation/Fadeup";
import ImageReveal from "../Animation/Imagereveal";

function AboutScroll() {
  const cards = [
    {
      topic: "Modern Frontend Devlopment",
      desc: "I build responsive and performant user interfaces using React, Next.js and Tailwind CSS, focusing on clean structure and reusable components",
    },
    {
      topic: "UI/UX Driven Design",
      desc: "With experince in Figma, I design interfaces that prioritize cllarity, consistency and smooth user interactions",
    },
    {
      topic: "Attention to Detail",
      desc: "I focus on spacing, typography, animation and micro-interactions to create interfaces that feels refined and professional.",
    },
  ];
  return (
    <>
      <section id="about" className="container mx-auto px-8 py-4 scroll-mt-28">
        <FadeUp>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-bold leading-tight text-slate-100 max-w-2xl">
                How I build Interfaces
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-12xl">
                My primary focus is Frontend development- crafting clean,
                responsive and user-friendly interface that feels intutive and
                polished.
              </p>
            </div>
            <div className="flex flex-col gap-12 lg:flex-row ">
              {cards.map((card, index) => (
                <ImageReveal key={index}>
                  <div className="flex flex-col gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 cursor-pointer hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300">
                    <h3 className="text-xl text-gray-400 sm:text-2xl font-medium">
                      {card.topic}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-20xl">
                      {card.desc}
                    </p>
                  </div>
                </ImageReveal>
              ))}
            </div>

            <ImageReveal>
              <a href="/About">
                <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition cursor-pointer hover:bg-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 duration-300">
                  Learn more about me →
                </button>
              </a>
            </ImageReveal>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
export default AboutScroll;
