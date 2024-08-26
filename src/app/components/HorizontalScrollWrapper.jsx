
"use client"; // Ensure this is a client component

import { useEffect, useRef } from "react";

export default function HorizontalScrollWrapper({ children }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      
      // Smooth horizontal scroll
      scrollContainer.scrollBy({
        left: event.deltaY * 1.5, // Adjust multiplier for speed
        behavior: "smooth",
      });
    };

    scrollContainer.addEventListener("wheel", handleWheel);

    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="h-[80vh] flex flex-row overflow-x-auto overflow-y-hidden"
    >
      {children}
    </div>
  );
}
