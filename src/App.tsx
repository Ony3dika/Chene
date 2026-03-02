import Lenis from "lenis";
import Preloader from "./preloader";
import About from "./about";
import Hero from "./hero";
import Navbar from "./navbar";
import Works from "./works";
import Craft from "./craft";
import Commission from "./commission";
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
          type: "words",
          mask: "words",
        });

        gsap.from(split.words, {
          scrollTrigger: {
            trigger: text,
            scroller: document.body,
            start: "top 80%",
            end: "top 20%",
            scrub: false,
            markers: false,
          },
          yPercent: 100,
          filter: "blur(15px)",
          scaleY: 0,
          transformOrigin: "top",
          opacity: 0,
          stagger: { each: 0.03, from: "start" },
        });
      });
    },
    { dependencies: [] },
  );
  return (
    <main className="bg-background text-text dm-sans relative overflow-x-clip">
      <Preloader />

      <Navbar />
      <Hero />
      <Works />
      <About />
      <Craft />
      <Commission />
      <Footer />
    </main>
  );
}

export default App;
