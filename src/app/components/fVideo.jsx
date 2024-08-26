
"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';

const Fvideo = () => {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    // first video
    const handleMouseEnter1 = () => {
        setIsHovered1(true);
        if (videoRef1.current) {
            videoRef1.current.muted = true; // Ensure the video is muted for autoplay
            videoRef1.current.play(); // Play video on hover
        }
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
        if (videoRef1.current) {
            videoRef1.current.pause(); // Pause video when not hovering
            videoRef1.current.currentTime = 0; // Reset video to the first frame
        }
    };

    // second video
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
        if (videoRef2.current) {
            videoRef2.current.muted = true; // Ensure the video is muted for autoplay
            videoRef2.current.play(); // Play video on hover
        }
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
        if (videoRef2.current) {
            videoRef2.current.pause(); // Pause video when not hovering
            videoRef2.current.currentTime = 0; // Reset video to the first frame
        }
    };


    // third video
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
        if (videoRef3.current) {
            videoRef3.current.muted = true; // Ensure the video is muted for autoplay
            videoRef3.current.play(); // Play video on hover
        }
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
        if (videoRef3.current) {
            videoRef3.current.pause(); // Pause video when not hovering
            videoRef3.current.currentTime = 0; // Reset video to the first frame
        }
    };

    return (
        <div className='grid grid-cols-3 ml-10  w-10/12 gap-5'>
            {/* First video container */}
            <div
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                className="relative "
            >
                {!isHovered1 && (
                    <Image
                        src="/woman.jpg" // The path to your placeholder image
                        alt="Video placeholder"
                        width="300"
                        height="300"
                    // style={{ position: 'absolute', objectFit: 'cover' }}
                    />
                )}
                <video
                    ref={videoRef1}
                    src="https://cdn.prod.website-files.com/6234368c451e783a0caa24f2/64aeae4d44364ffd96bf696a_VICIO-Web-01-transcode.mp4"
                    width="300"
                    height="300"
                    type="video/mp4"
                    muted // Ensure video is muted for autoplay
                    style={{ position: 'absolute', display: isHovered1 ? 'block' : 'none' }}
                ></video>
            </div>

            {/* Second video container */}
            <div
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                className="relative "
            >

                {/* .................................................................... */}
                <div
                    className="absolute bottom-5 left-1 w-[104%] bg-white overflow-hidden"
                    style={{
                        transform: 'rotate(10deg)',
                        // transformOrigin: 'top left',  // Adjust transform origin
                        marginLeft: '-5%',
                    }}
                >
                    <div className="marquee-content flex space-x-3 animate-marquee whitespace-nowrap ">
                        <span className="text-red-600 font-bold text-5xl">VICIO</span>
                        <span className="font-bold text-5xl slanted-text text-transparent [-webkit-text-stroke:2px_red]">VICIO</span>
                        {/* Repeat the content to ensure continuous scrolling */}
                        <span className="text-red-600 font-bold text-5xl">VICIO</span>
                        <span className="font-bold text-5xl slanted-text text-transparent [-webkit-text-stroke:2px_red]">VICIO</span>
                    </div>
                </div>

                {/* .................................................................... */}

                {!isHovered2 && (
                    <div>

                        <Image
                            src="/burgerBun.png" // The path to your placeholder image
                            alt="Video placeholder"
                            width="300"
                            height="300"
                        // style={{ position: 'absolute', objectFit: 'cover' }}
                        />

                    </div>
                )}

                <video
                    ref={videoRef2}
                    src="https://cdn.prod.website-files.com/6234368c451e783a0caa24f2/64aeae4d44364ffd96bf696a_VICIO-Web-01-transcode.mp4"
                    width="300"
                    height="300"
                    type="video/mp4"
                    muted // Ensure video is muted for autoplay
                    style={{ position: 'absolute', display: isHovered2 ? 'block' : 'none' }}

                ></video>

            </div>

            {/* third video container */}
            <div
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                className="relative "
            >
                {!isHovered3 && (
                    <Image
                        src="/man.png" // The path to your placeholder image
                        alt="Video placeholder"
                        width="300"
                        height="300"
                    />
                )}
                <video
                    ref={videoRef3}
                    src="https://cdn.prod.website-files.com/6234368c451e783a0caa24f2/650c390df2891a9386c9989e_VICIO-Web-03-v2-transcode.mp4"
                    width="300"
                    height="300"
                    type="video/mp4"
                    muted // Ensure video is muted for autoplay
                    style={{ position: 'absolute', display: isHovered3 ? 'block' : 'none' }}
                ></video>
            </div>
        </div>
    );
};

export default Fvideo;
