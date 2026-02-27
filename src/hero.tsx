import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import pic1 from "../public/pic1.jpg";
import pic2 from "../public/pic2.jpg";
import pic3 from "../public/pic3.jpg";
import pic4 from "../public/pic4.jpg";

gsap.registerPlugin(ScrollTrigger);

const furnitures = [
  { id: 1, name: "Revolve", image: pic1 },
  { id: 2, name: "Evolve", image: pic2 },
  { id: 3, name: "Strand", image: pic3 },
  { id: 4, name: "Oakley", image: pic4 },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState<number | null>(null);
  const nextImgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isAnimating = useRef(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".hero-text", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=50%",
          scrub: true,
        },
      });
      tl.to(".hero-img", {
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

  const handleClick = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const next = (currentImage + 1) % furnitures.length;
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
    <main className="hero flex h-screen items-center justify-center">
      <div className="absolute top-1/2 lg:left-1/3 z-2 -translate-y-1/2 overflow-clip mix-blend-difference">
        <p
          ref={textRef}
          className="hero-text instrument-italic text-primary text-6xl font-medium"
        >
          {furnitures[currentImage].name}
        </p>
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
