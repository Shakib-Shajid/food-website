"use client";

import React, { useState, useRef, useEffect } from "react";

const DraggableButton = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - buttonRef.current.offsetWidth / 2;
    const newY = e.clientY - buttonRef.current.offsetHeight / 2;

    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div>
      <div
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        style={{
          position: "relative",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        className="bg-black text-red-600 text-5xl rounded-xl font-bold py-2 px-4 shadow-lg -rotate-[24deg] -left-[1000px] top-48  "
      >
        VICIO
      </div>
    </div>
  );
};

export default DraggableButton;

