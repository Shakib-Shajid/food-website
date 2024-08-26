// // src/app/components/HorizontalScrollWrapper.js

// "use client"; // Make sure this is a client component

// import { useEffect, useRef } from "react";

// export default function HorizontalScrollWrapper({ children }) {
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;

//     const handleWheel = (event) => {
//       // Prevent default vertical scrolling behavior
//       event.preventDefault();

//       // Scroll horizontally instead of vertically
//       scrollContainer.scrollBy({
//         left: event.deltaY,
//         behavior: "smooth", // Smooth scrolling
//       });
//     };

//     // Attach the wheel event listener to the container
//     scrollContainer.addEventListener("wheel", handleWheel);

//     // Clean up the event listener on component unmount
//     return () => scrollContainer.removeEventListener("wheel", handleWheel);
//   }, []);

//   return (
//     <div
//       ref={scrollContainerRef}
//       className="h-screen flex flex-row overflow-x-auto overflow-y-hidden scroll-smooth"
//     >
//       {children}
//     </div>
//   );
// }




// src/app/components/HorizontalScrollWrapper.js

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
      className="h-screen flex flex-row overflow-x-auto overflow-y-hidden"
    >
      {children}
    </div>
  );
}
