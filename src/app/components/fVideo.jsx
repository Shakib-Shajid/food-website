
"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';

const Fvideo = () => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.muted = true; // Ensure the video is muted for autoplay
            videoRef.current.play(); // Play video on hover
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause(); // Pause video when not hovering
            videoRef.current.currentTime = 0; // Reset video to the first frame
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative ml-10 w-52'
        >
            {!isHovered && (
                <Image
                    src="/woman.jpg" // The path to your placeholder image
                    alt="Video placeholder"
                    width="200"
                    height="200"
                    style={{ position: 'absolute', objectFit: 'cover' }}
                />
            )}
            <video
                ref={videoRef}
                src="https://cdn.prod.website-files.com/6234368c451e783a0caa24f2/64aeae4d44364ffd96bf696a_VICIO-Web-01-transcode.mp4"
                width="200"
                height="200"

                type="video/mp4"
                muted // Ensure video is muted for autoplay
                style={{ display: isHovered ? 'block' : 'none' }}
            ></video>
        </div>
    );
};

export default Fvideo;
