import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);
CustomEase.create("hop", "0.87, 0.0, 0.13, 1.0");

const sideMenu = [
  { title: "Home", link: "#home" },
  { title: "Work", link: "#works" },
  { title: "About", link: "#about" },
  { title: "Highlight", link: "#" },
];

const socialLinks = [
  { title: "Instagram", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "LinkedIn", link: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (isMenuOpen) {
        tl.to(".sideMenu", {
          y: -110,
          duration: 0.3,
          opacity: 0,
          ease: "hop",
        });
        tl.to(
          ".slide",
          {
            yPercent: -100,
            duration: 0.5,
            opacity: 1,
            stagger: 0.03,
          },
          "-=0.1",
        );
        tl.to(
          ".menu",
          {
            bottom: 0,
            left: 0,
            height: "100vh",
            opacity: 1,
            ease: "power2",
            duration: 0.7,
          },
          "-=0.5",
        );
      }
      // Close Menu
      else {
        tl.to(".menu", {
          bottom: "-100vh",
          height: "0",
          // opacity: 0,
          ease: "power2",
          duration: 0.7,
        });
        tl.to(
          ".slide",
          {
            yPercent: 100,
            duration: 0.5,
            stagger: 0.03,
          },
          "-=0.7",
        );
        tl.to(
          ".sideMenu",
          {
            y: 0,
            opacity: 1,
            ease: "hop",
            duration: 0.3,
          },
          "-=0.3",
        );
      }
    },
    { dependencies: [isMenuOpen] },
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Slides */}
      <div className="pointer-events-none fixed top-0 left-0 z-2 flex h-full w-screen">
        <div className="slide bg-text h-full basis-1/4 opacity-0" />
        <div className="slide bg-text h-full basis-1/4 opacity-0" />
        <div className="slide bg-text h-full basis-1/4 opacity-0" />
        <div className="slide bg-text h-full basis-1/4 opacity-0" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-3 z-10 flex w-full items-start justify-between px-3 text-indigo-100 mix-blend-difference md:px-10">
        <div className="sideMenu hidden basis-1/3 flex-col gap-y-0 lg:flex">
          {sideMenu.map((item) => (
            <a
              href={item.link}
              key={item.title}
              className="text-sm font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>

        <p className="instrument-italic text-center text-xl font-bold md:basis-1/3 md:text-3xl">
          Chêne
        </p>

        <div className="flex basis-1/3 justify-end">
          <button
            className="border-border cursor-pointer rounded-full border px-4 py-0.5 text-sm md:py-1"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Menu */}

      <section
        className={`menu bg-foreground fixed z-5 flex h-0 w-screen origin-bottom items-end p-5 opacity-0`}
      >
        <div className="bg-background flex h-[95%] w-full flex-col overflow-hidden rounded-lg lg:flex-row">
          <div className="flex basis-[30%] flex-col">
            {/* Menu */}
            <div className="border-border flex basis-4/5 flex-col justify-around gap-y-3 border-b p-10 xl:gap-y-0">
              {sideMenu.map((item, index) => (
                <a
                  href={item.link}
                  key={item.title}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`w-fit text-3xl font-medium transition-all delay-50 duration-300 ease-linear lg:text-5xl ${activeIndex !== null && activeIndex !== index ? "text-text/20 translate-x-2" : "text-text"}`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="border-x-border hidden basis-[45%] border-x lg:block"></div>
          <div className="flex basis-full flex-col justify-between lg:basis-[25%] lg:items-center">
            {/* Social Links */}

            <p className="mt-10 p-10 text-xl font-medium lg:p-0">Social</p>
            <div className="flex flex-col gap-y-2 px-10 lg:p-0">
              {socialLinks.map((item) => (
                <a
                  href={item.link}
                  key={item.title}
                  className="text-sm font-medium"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="border-t-border group relative isolate flex h-16 w-full items-center justify-center border-t">
              <a
                href="#"
                className="text-sm font-medium transition-all duration-200 ease-in-out group-hover:text-white"
              >
                hello@chene.studio
              </a>
              <div className="bg-primary ease- absolute bottom-0 left-0 -z-1 h-0 w-full origin-bottom transition-all duration-150 group-hover:h-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Navbar;
