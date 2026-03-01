import Lenis from "lenis";
import About from "./about";
import Hero from "./hero";
import Navbar from "./navbar";
import Works from "./works";
import Craft from "./craft";
import Footer from "./footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const lenis = new Lenis();

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  useGSAP(
    () => {
      document.querySelectorAll(".body-text").forEach((text) => {
        const split = new SplitText(text, {
          type: "lines",
        });

        gsap.fromTo(
          split.lines,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: text,
              scroller: document.body,
              start: "top 80%",
              end: "bottom 80%",
              scrub: true,
              markers: true,
            },
          },
        );
      });
    },
    { dependencies: [] },
  );
  return (
    <main className="bg-background text-text dm-sans relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Craft />
      <Footer />
    </main>
  );
}

export default App;
