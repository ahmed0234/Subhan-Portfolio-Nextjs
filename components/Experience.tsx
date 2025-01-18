"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a timeline for the animation
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      // Animate the numbers
      tl.from(".number", {
        y: 100,
        opacity: 0,
        stagger: 0.2, // Stagger the animation for each number
      });

      // Animate the text
      tl.from(
        ".text",
        {
          y: 50,
          opacity: 0,
          stagger: 0.2, // Stagger the animation for each text block
        },
        "-=0.5" // Overlap the text animation with the numbers
      );

      // Optional: Add a scale-up effect on hover for each item
      gsap.set(".experience-item", {
        transformOrigin: "center center",
      });

      gsap.to(".experience-item", {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        paused: true,
        onComplete: () => {
          gsap.to(".experience-item", {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });

      // Add hover effect
      containerRef.current
        ?.querySelectorAll(".experience-item")
        .forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, { scale: 1.05, duration: 0.3, ease: "power2.out" });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
    },
    { scope: containerRef } // Scope the animation to the container
  );

  return (
    <div ref={containerRef} className="container mt-16 2xl:mt-20">
      <div className="grid grid-cols-2 items-center justify-center gap-8 text-center md:grid-cols-4">
        <div className="experience-item flex flex-col lg:flex-row items-center justify-center gap-4">
          <h1 className="number text-5xl 2xl:text-7xl">8+</h1>
          <h1 className="text 2xl:text-xl">
            Years of <br />
            Experience
          </h1>
        </div>
        <div className="experience-item flex flex-col lg:flex-row items-center justify-center gap-4">
          <h1 className="number text-5xl 2xl:text-7xl">50+</h1>
          <h1 className="text 2xl:text-xl">
            Projects <br />
            Completed
          </h1>
        </div>
        <div className="experience-item flex flex-col lg:flex-row items-center justify-center gap-4">
          <h1 className="number text-5xl 2xl:text-7xl">100+</h1>
          <h1 className="text 2xl:text-xl">
            Happy <br />
            Clients
          </h1>
        </div>
        <div className="experience-item flex flex-col lg:flex-row items-center justify-center gap-4">
          <h1 className="number text-5xl 2xl:text-7xl">99%</h1>
          <h1 className="text 2xl:text-xl">
            Client <br />
            Satisfaction
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
