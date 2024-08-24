"use client"

import Image from "next/image";
import { useState } from "react";

const Homepage = () => {

    const [isHover, setIsHover] = useState(false);

    const mouseEnter = () => { setIsHover(true) }
    const mouseLeave = () => { setIsHover(false) }

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="h-20">
            {
                isHover ? <div className="border border-red-600 relative">
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute -top-5 " />
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute bottom-4 left-[102px]" />
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute -top-2 left-[170px]" />
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute top-8 left-[344px]" />
                    <h1 className="text-9xl font-extrabold ">VICIO CITIES</h1>
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute right-[356px] bottom-8" />
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute right-52 bottom-[106px]" />
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute right-40 bottom-8" />
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute right-[92px] bottom-[68px]" />
                    <Image src="/fire.gif" width="30" height="30" alt="" className="absolute right-0 bottom-7" />
                </div> : <h1 className="text-9xl font-extrabold ">VICIO CITIES</h1>
            }
        </div>
    );
};

export default Homepage;


