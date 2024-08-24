"use client"

import Image from "next/image";
import { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { FiArrowUpRight } from "react-icons/fi";

const Homepage = () => {

    const [isHover, setIsHover] = useState(false);

    const mouseEnter = () => { setIsHover(true) }
    const mouseLeave = () => { setIsHover(false) }

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="h-20 mt-10">
            <small className="flex gap-3 items-center relative -bottom-3"><TfiWorld className="text-xl" /><TfiWorld className="absolute left-2 flex items-baseline text-xl" /><span>VICIO BURGER CLUB</span></small>
            {
                isHover ? <div className="relative">
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute -top-3 " />
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute bottom-4 left-[102px]" />
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute -top-1 left-[174px]" />
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute top-8 left-[344px]" />
                    <h1 className="text-9xl font-extrabold ">VICIO CITIES</h1>
                    
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[356px] bottom-8" />
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-52 bottom-[106px]" />
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-40 bottom-8" />
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[92px] bottom-[70px]" />
                    <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-0 bottom-7" />

                    <FiArrowUpRight className="absolute rotate-90 text-2xl bottom-3 " />

                </div> : <div className="relative ">
                    <h1 className="text-9xl font-extrabold">VICIO CITIES</h1>
                    <FiArrowUpRight className="absolute text-2xl bottom-3 " />
                </div>
            }
        </div>
    );
};

export default Homepage;

