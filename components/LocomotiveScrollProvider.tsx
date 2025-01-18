"use client"; // Client-side component for App Router

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import styles
import { useEffect, useRef } from "react";

const LocomotiveScrollProvider = ({ children }: any) => {
  const scrollRef = useRef(null); // Reference for scroll container
  const locoScroll = useRef(null); // Reference for LocomotiveScroll instance

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize LocomotiveScroll
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current, // Target scroll container
      smooth: true, // Enable smooth scrolling
      smoothMobile: true, // Enable on mobile devices
      lerp: 0.1, // Adjust scrolling speed (0.1 for smooth, 1 for immediate)
      multiplier: 1, // Adjust scroll speed (higher is faster)
    });

    // Clean up LocomotiveScroll on unmount
    return () => {
      if (locoScroll.current) {
        locoScroll.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
