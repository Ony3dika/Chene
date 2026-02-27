import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);
CustomEase.create("hop", "0.87, 0.0, 0.13, 1.0");

const sideMenu = [
  { title: "Home", link: "#" },
  { title: "Work", link: "#" },
  { title: "Services", link: "#" },
  { title: "Highlight", link: "#" },
];

const socialLinks = [
  { title: "Instagram", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "LinkedIn", link: "#" },
];

const Navbar = () => {
  const lenis = new Lenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (isMenuOpen) {
        setIsAnimating(true);

        lenis.stop();
        tl.to(".sideMenu", {
          y: -110,
          duration: 0.3,
          opacity: 0,
          ease: "hop",
        });

        tl.to(".menu", {
          bottom: 0,
          left: 0,
          height: "100vh",
          opacity: 1,
          ease: "expo",
          duration: 0.7,
        });

        tl.to(".slide", {
          yPercent: 100,
          duration: 0.2,
          backgroundColor: "red",
          stagger: 0.3,
        });
      } else {
        // tl.to(".menu", {
        //   bottom: "-100vh",
        //   height: "0",
        //   opacity: 0,
        //   ease: "expo.in",
        //   duration: 0.3,
        // });
        // tl.to(".sideMenu", {
        //   y: 0,
        //   opacity: 1,
        //   ease: "hop",
        //   duration: 0.3,
        // });
        tl.reverse();
      }
    },
    { dependencies: [isMenuOpen] },
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky z-10 flex w-full items-start justify-between px-10 pt-3">
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

        <p className="instrument-italic basis-1/3 text-center text-3xl font-bold">
          Chêne
        </p>

        <div className="flex basis-1/3 justify-end">
          <button
            className="border-border cursor-pointer rounded-full border px-4 py-1 text-sm"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Menu */}

      <section
        className={`menu bg-foreground fixed flex h-0 w-screen origin-bottom items-end p-5 opacity-0`}
      >
        <div className="bg-background flex h-[95%] w-full overflow-hidden rounded-lg">
          <div className="relative flex basis-[30%] flex-col">
            <div className="slide bg-background absolute top-0 left-0 z-1 h-full w-full" />
            {/* Menu */}
            <div className="border-border flex basis-4/5 flex-col justify-around border-b p-10">
              {sideMenu.map((item, index) => (
                <a
                  href={item.link}
                  key={item.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`w-fit text-5xl font-medium transition-all duration-300 ease-linear ${activeIndex !== null && activeIndex !== index ? "text-text/20 translate-x-2" : "text-text"}`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="border-x-border relative basis-[45%] border-x">
            <div className="slide bg-background absolute top-0 left-0 z-1 h-full w-full" />
          </div>
          <div className="relative flex basis-[25%] flex-col items-center justify-between">
            <div className="slide bg-background absolute top-0 left-0 z-1 h-full w-full" />
            {/* Social Links */}

            <p className="mt-10 text-xl font-medium">Social</p>
            <div className="flex flex-col gap-y-2">
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
