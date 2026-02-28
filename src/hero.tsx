import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import pic1 from "/pic1.webp";
import pic2 from "/pic2.webp";
import pic3 from "/pic3.webp";
import pic4 from "/pic4.webp";
import pic5 from "/pic9.webp";

gsap.registerPlugin(ScrollTrigger);

const furnitures = [
  { id: 1, name: "Marais", image: pic1 },
  { id: 2, name: "Montaigne", image: pic2 },
  { id: 3, name: "Rêve", image: pic3 },
  { id: 4, name: "Sierra", image: pic4 },
  { id: 5, name: "Céleste", image: pic5 },
];  

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState<number | null>(null);
  const nextImgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isAnimating = useRef(false);
  const currentImageRef = useRef(currentImage);
  const progressTlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
     
      gsap.to(".hero-img", {
        borderRadius: 0,
        width: "100%",
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });
    },

    { dependencies: [] },
  );

  // Progress
  useGSAP(
    () => {
      const progressTl = gsap.timeline({ repeat: -1 });
      progressTl.to(".progress", {
        width: "100%",
        duration: 5,
        ease: "none",

        onComplete: () => {
          handleClick();
        },
      });
      progressTlRef.current = progressTl;
    },

    { dependencies: [] },
  );

  const handleClick = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // Restart the progress bar
    if (progressTlRef.current) {
      progressTlRef.current.restart();
    }

    const next = (currentImageRef.current + 1) % furnitures.length;
    currentImageRef.current = next;
    setNextImage(next);

    requestAnimationFrame(() => {
      if (!nextImgRef.current) {
        isAnimating.current = false;
        return;
      }

      gsap.set(nextImgRef.current, { yPercent: 100 });

      if (textRef.current) {
        gsap.to(textRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }

      gsap.to(nextImgRef.current, {
        yPercent: 0,
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => {
          setCurrentImage(next);
          setNextImage(null);
          isAnimating.current = false;

          if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { yPercent: 100, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.35,
                ease: "power2.out",
              },
            );
          }
        },
      });
    });
  };

  return (
    <main id="home" className="hero flex h-screen items-center justify-center">
      <div className="absolute top-1/2 z-2 min-w-1/7 -translate-y-1/2 overflow-clip mix-blend-difference lg:left-1/3">
        <p
          ref={textRef}
          className=" instrument-italic text-primary text-6xl font-medium"
        >
          {furnitures[currentImage].name}
        </p>
        <div className="progress bg-text h-[0.4px] w-0" />
      </div>
      <div
        onClick={handleClick}
        className="hero-img relative h-1/4 w-3/5 cursor-pointer overflow-clip rounded-lg lg:h-64 lg:w-64"
      >
        <img
          src={furnitures[currentImage].image}
          className="h-full w-full object-cover"
          alt={furnitures[currentImage].name}
        />

        {nextImage !== null && (
          <img
            ref={nextImgRef}
            src={furnitures[nextImage].image}
            className="absolute inset-0 h-full w-full object-cover"
            alt={furnitures[nextImage].name}
          />
        )}
      </div>
    </main>
  );
};

export default Hero;
