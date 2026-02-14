import ImageReveal from "../Animation/Imagereveal";

function Connect() {
  const contactInfo = [
    {
      img: "../Images/gmail.png",
      bg: "bg-pink-500",
      label: "email",
      alt: "Mail",
      value: "nakarmisuvekshyek@gmail.com",
    },
    {
      img: "../Images/phoneno.png",
      bg: "bg-pink-500",
      label: "phone",
      alt: "Phone",
      value: "+977 9803031743",
    },
    {
      img: "../Images/location.png",
      bg: "bg-pink-500",
      label: "address",
      alt: "Location",
      value: "Samakhusi, Tokha Road, Kathmandu",
    },
  ];

  const socialMedia = [
    {
      img: "../Images/github.png",
      bg: "bg-pink-500",
      alt: "Github",
      link: "https://github.com/NakarmiKevus",
    },
    {
      img: "../Images/linkedin.png",
      bg: "bg-pink-500",
      alt: "Linkedin",
      link: "https://www.linkedin.com/in/suvekshyek-nakarmi-427808284/",
    },
    {
      img: "../Images/instagram.png",
      bg: "bg-pink-500",
      alt: "Instagram",
      link: "https://www.instagram.com/nakarmi_kevus/",
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="container mx-auto px-8 py-4 scroll-mt-28 mb-12"
      >
        <div className="contact flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-blue-400/10 text-blue-300 border border-blue-400/20 px-3 py-1 rounded-full text-sm font-medium">
              Let's Connect
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-100 text-center">
              Get In Touch
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-normal text-center max-w-2xl mx-auto mb-12">
              Ready to bring your ideas to life? Let's discuss your project and
              create something amazing together.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 lg:flex-row ">
          {/* contact form */}
          <div className="flex-1">
            <ImageReveal>
              <div className=" bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 h-full hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 ">
                <p className="mb-4 text-slate-400 font-medium text-sm">
                  contact-form.tsx
                </p>

                <div className="flex gap-4 mb-2">
                  <div className="flex flex-col flex-1 min-w-0">
                    <label
                      htmlFor="firstName"
                      className="flex gap-1 text-sm mb-1 text-slate-300"
                    >
                      <span className="text-purple-400 text-base">const</span>
                      <span className="text-blue-300 text-base">firstName</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      className="bg-slate-700 text-slate-100 placeholder-slate-400 rounded p-2 text-sm w-full border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <label
                      htmlFor="lastName"
                      className="flex gap-1 text-sm mb-1 text-slate-300"
                    >
                      <span className="text-purple-400 text-base">const</span>
                      <span className="text-blue-300 text-base">lastName</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      className="bg-slate-700 text-slate-100 placeholder-slate-400 rounded p-2 text-sm w-full border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col flex-1">
                    <label
                      htmlFor="email"
                      className="flex gap-1 text-sm mb-1 text-slate-300"
                    >
                      <span className="text-purple-400 text-base">const</span>
                      <span className="text-blue-300 text-base">email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@gmail.com"
                      className="bg-slate-700 text-slate-100 placeholder-slate-400 rounded p-2 text-sm w-full border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label
                      htmlFor="subject"
                      className="flex gap-1 text-sm mb-1 text-slate-300"
                    >
                      <span className="text-purple-400 text-base">const</span>
                      <span className="text-blue-300 text-base">subject</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Project Discussion"
                      className="bg-slate-700 text-slate-100 placeholder-slate-400 rounded p-2 text-sm w-full border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label
                      htmlFor="message"
                      className="flex gap-1 text-sm mb-1 text-slate-300"
                    >
                      <span className="text-purple-400 text-base">const</span>
                      <span className="text-blue-300 text-base">message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      className="bg-slate-700 text-slate-100 placeholder-slate-400 rounded p-2 text-sm w-full min-h-36.5 border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-slate-100 font-medium rounded h-10 transition-colors cursor-pointer">
                    Send Message
                  </button>
                </div>
              </div>
            </ImageReveal>
          </div>

          <div className="flex-1">
            <ImageReveal>
              {/* contact info */}
              <div className=" bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 h-full hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300">
                <p className="mb-4 text-slate-400 font-medium text-sm">
                  contact-info.tsx
                </p>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="flex gap-6 bg-slate-700 rounded p-2 text-sm border border-slate-600 hover:border-blue-400/50 hover:bg-slate-700/80 transition-all duration-200 group"
                    >
                      <div
                        className={`${contact.bg} rounded-2xl p-3 cursor-pointer transition-all duration-200 group-hover:scale-110 shrink-0`}
                      >
                        <img
                          src={contact.img}
                          alt={contact.alt}
                          className="w-10 h-auto"
                        />
                      </div>
                      <div className="text-slate-300 flex-1 min-w-0">
                        <div className="mb-1 flex gap-1">
                          <span className="text-purple-400 text-base">
                            const
                          </span>
                          <span className="text-blue-400 text-base">
                            {contact.label}
                          </span>
                          <span className="text-slate-400 text-base">=</span>
                        </div>

                        <p className="text-emerald-300 text-sm sm:text-base break-words max-w-full overflow-wrap-anywhere ">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col items-center bg-slate-700 rounded p-2 text-sm border border-slate-600">
                    <div className="flex gap-1 mb-5">
                      <span className="text-purple-400 text-base">const</span>
                      <span className="text-blue-400 text-base">
                        Social Media
                      </span>
                      <span className="text-slate-400 text-base">=</span>
                    </div>
                    <div className="flex gap-6">
                      {socialMedia.map((media, index) => (
                        <a
                          key={index}
                          href={media.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            className={`${media.bg} rounded-xl p-3 cursor-pointer transition-all duration-200 hover:scale-[1.2]`}
                          >
                            <img
                              src={media.img}
                              alt={media.alt}
                              className="w-10 h-auto"
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Connect;
