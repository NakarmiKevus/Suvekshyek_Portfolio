import HorizontalScroll from "../Animation/Horizontalscroll";
function Footer() {
  return (
    <>
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-12" />
      <section className="container mx-auto px-8 py-4">
        <HorizontalScroll>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 mb-20">
            <div className="aboutMe flex flex-col gap-6 ">
              <div className="text-lg text-blue-400 font-bold tracking-tight">
                <p>Suvekshyek</p>
                <p>Nakarmi</p>
              </div>
              <div>
                <p className="text-base text-slate-300 font-medium text-justify">
                  Crafting interactive and visually stunning web experiences
                  with modern frontend technologies and clean code.
                </p>
              </div>
            </div>

            <div className="footerNavigation flex flex-col lg:items-center">
              <h2 className="text-xl font-semibold text-slate-100 mb-6">
                Navigation
              </h2>
              <ul className="flex flex-col justify-between gap-4">
                <li className="text-base text-slate-300 font-medium transition-all duration-200 hover:text-blue-400 hover:translate-x-4">
                  <a href="/#home">Home</a>
                </li>
                <li className="text-base text-slate-300 font-medium transition-all duration-200 hover:text-blue-400 hover:translate-x-4">
                  <a href="/#about">About</a>
                </li>
                <li className="text-base text-slate-300 font-medium transition-all duration-200 hover:text-blue-400 hover:translate-x-4">
                  <a href="/#skills">Skills</a>
                </li>
                <li className="text-base text-slate-300 font-medium transition-all duration-200 hover:text-blue-400 hover:translate-x-4">
                  <a href="/#project">Project</a>
                </li>
                <li className="text-base text-slate-300 font-medium transition-all duration-200 hover:text-blue-400 hover:translate-x-4">
                  <a href="/#experience">Experience</a>
                </li>
                <li className="text-base text-slate-300 font-medium transition-all duration-200 hover:text-blue-400 hover:translate-x-4">
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="FooterContact ">
              <p className="text-xl font-semibold text-slate-100 mb-6">
                Connect
              </p>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <img
                    src="../Images/mail2.png"
                    alt="mail2"
                    className="w-6 h-auto opacity-80"
                  />
                  <img
                    src="../Images/phone.png"
                    alt="mail2"
                    className="w-6 h-auto opacity-80"
                  />
                  <img
                    src="../Images/address.png"
                    alt="mail2"
                    className="w-6 h-auto opacity-80"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-base text-slate-300 font-medium hover:text-blue-400 transition-colors duration-200"
                  >
                    nakarmisuvekshyek@gmail.com
                  </a>
                  <a
                    href="#"
                    className="text-base text-slate-300 font-medium hover:text-blue-400 transition-colors duration-200"
                  >
                    +977 9803031743
                  </a>
                  <a
                    href="#"
                    className="text-base text-slate-300 font-medium hover:text-blue-400 transition-colors duration-200"
                  >
                    Samakhusi, Tokha Road, Kathmandu
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-base text-slate-300 font-medium">
              Designed & built by Suvekshyek Nakarmi
            </p>
            <p className="text-sm text-slate-400 font-medium">
              © 2026 Suvekshyek Nakarmi. All content © me
            </p>
          </div>
        </HorizontalScroll>
      </section>
    </>
  );
}
export default Footer;
