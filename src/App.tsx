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
      document.querySelectorAll(".body-text").forEach((text, i) => {
        const split = new SplitText(text, {
          type: "words",
          mask: "words",
        });

        gsap.from(
          split.words,
          {
            scrollTrigger: {
              trigger: text,
              scroller: document.body,
              start: "top 80%",
              end: "top 20%",
              scrub: false,
              markers: false,
            },
            yPercent: 100,
            scaleY: 0,
            transformOrigin: "top",
            opacity: 0,
            stagger: 0.03,
            duration: 0.3,
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
