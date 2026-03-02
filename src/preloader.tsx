import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Preloader = () => {
  useGSAP(
    () => {
      const img = document.querySelector(".preloader-img");
      const preloader = document.querySelector(".preloader");
      const tl = gsap.timeline();

      tl.from(".preloader-img", {
        scale: 0.1,
        duration: 2.5,
        ease: "expo.inOut",
      });
      tl.from(
        ".preloader",
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 2.5,
          ease: "expo.inOut",
        },
        "-=1.1",
      );

      tl.to(
        ".preloader-img",
        {
          opacity: 0,
          display: "none",
          onComplete: () => {
            img?.remove();
            preloader?.remove();
          },
        },
        "-=1.1",
      );
    },
    { dependencies: [] },
  );

  return (
    <>
      <div className="bg-dark preloader fixed z-11 flex h-screen w-screen scale-y-0 items-center justify-center"></div>
      <img
        src="/pic1.webp"
        className="preloader-img fixed top-1/2 left-1/2 z-11 h-1/4 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover lg:h-64 lg:w-64"
      />
    </>
  );
};

export default Preloader;
