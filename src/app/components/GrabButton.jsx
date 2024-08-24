"use client"

import React, { useState, useRef, useEffect } from 'react';

const DraggableButton = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);

      useEffect(() => {

        // Calculate initial position to center the button
        if (buttonRef.current) {
          const buttonWidth = buttonRef.current.offsetWidth;
          const buttonHeight = buttonRef.current.offsetHeight;
          //   window.innerWidth 
          const centerX = 1100 / 2 - buttonWidth / 2;
          const centerY = 900 / 3 - buttonHeight / 2;
        //   window.innerHeight
          setPosition({ x: centerX, y: centerY });
        }
      }, []);



    const handleMouseDown = (e) => {
        setIsDragging(true);
        e.preventDefault();
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        // Calculate the new position
        const newX = e.clientX - buttonRef.current.offsetWidth / 2;
        const newY = e.clientY - buttonRef.current.offsetHeight / 2;

        // Update the position state
        setPosition({ x: newX, y: newY });
    };

    // Attach and remove mousemove event listener dynamically
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={buttonRef}
            onMouseDown={handleMouseDown}
            style={{ left: `${position.x}px`, top: `${position.y}px`, position: 'absolute' }}
            className={`cursor-${isDragging ? 'grabbing' : 'grab'} bg-black text-red-600 text-5xl rounded-xl font-bold py-2 px-4 shadow-lg -rotate-[24deg]`}
        >
            VICIO
        </div>
    );
};

export default DraggableButton;
