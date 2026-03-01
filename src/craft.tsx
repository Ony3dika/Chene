import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import pic11 from "/pic11.webp";
import pic12 from "/pic12.webp";
import pic13 from "/pic13.webp";

const craftData = [
  {
    title: "Oak Sourcing",
    img: pic11,
    description:
      "We work primarily with solid oak, selected for its strength, character, and longevity. Each plank is carefully sourced for grain consistency, structural integrity, and natural warmth.",
  },
  {
    title: "Upholstery",
    img: pic12,
    description:
      "Our textiles are chosen to complement the architectural clarity of our forms. Soft yet structured, each fabric is selected for durability, tactility, and depth of tone.",
  },
  {
    title: "Finishing",
    img: pic13,
    description:
      "Finishes at Chêne are restrained and deliberate. We use natural oils and matte treatments that enhance the grain rather than mask it. No high gloss. No excess. Only depth, warmth, and a surface that evolves beautifully over time.",
  },
];

const Craft = () => {
  const [activeCraft, setActiveCraft] = useState(0);
  const activeRef = useRef(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".craft",
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const total = craftData.length;
        const newIndex = Math.min(Math.floor(progress * total), total - 1);

        if (newIndex !== activeRef.current) {
          activeRef.current = newIndex;

          const descEl = descRef.current;
          if (descEl) {
            gsap.to(descEl, {
              opacity: 0,
              y: 12,
              duration: 0.25,
              ease: "expo",
              onComplete: () => {
                setActiveCraft(newIndex);
                gsap.to(descEl, {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  ease: "power2.out",
                });
              },
            });
          } else {
            setActiveCraft(newIndex);
          }
        }
      },
    });
  }, []);

  return (
    <main id="craft" className="px-3 md:px-10">
      <p className="body-text text-center text-2xl font-medium lg:text-6xl">
        Every piece begins with material <br /> every detail, intentional
        <br /> every finish to endure.
      </p>

      <section className="craft mt-20 flex h-screen flex-col items-center justify-center xl:flex-row">
        {/* Titles */}
        <div className="order-2 my-5 flex w-full flex-col items-center justify-center gap-y-3 font-medium xl:order-1 xl:my-0 xl:h-2/3 xl:basis-1/3 xl:gap-y-5">
          {craftData.map((item, index) => (
            <div
              key={item.title}
              className="flex w-4/5 items-center gap-x-2 xl:w-1/2"
            >
              <span
                className={`text-3xl transition-all duration-100 ease-in-out ${
                  index === activeCraft ? "text-text opacity-100" : "opacity-0"
                }`}
              >
                •
              </span>
              <p
                className={`text-xl transition-all duration-100 ease-in-out lg:text-3xl ${
                  index === activeCraft ? "text-text opacity-100" : "opacity-30"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="order-1 flex basis-1/3 items-center justify-center overflow-clip pt-10 xl:order-2 xl:pt-0">
          <img
            ref={imgRef}
            src={craftData[activeCraft].img}
            className="h-ful w-fulll rounded-lg"
            alt={craftData[activeCraft].title}
          />
        </div>

        {/* Description */}
        <div className="order-3 flex h-1/4 flex-col items-center xl:h-2/3 xl:basis-1/3 xl:justify-center xl:py-0">
          <p ref={descRef} className="w-4/5 text-justify xl:w-2/3">
            {craftData[activeCraft].description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Craft;
