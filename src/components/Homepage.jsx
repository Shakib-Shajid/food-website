import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";
import { FiArrowUpRight } from "react-icons/fi";
import Fvideo from "./Fvideo";
import Link from "next/link";

const Homepage = () => {


    return (
        <div>
            <Link href="/vicio-cities">
                <small className="flex gap-3 items-center relative -bottom-3 my-2"><TfiWorld className="text-xl" /><TfiWorld className="absolute left-2 flex items-baseline text-xl" /><span>VICIO BURGER CLUB</span></small>

                <div className="relative inline-block overflow-hidden group ">

                    <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                        <h1 className="text-7xl md:text-9xl font-extrabold my-2 md:my-0 ml-10 md:ml-0"><span className="hidden md:inline-block">VICIO</span> CITIES</h1>
                    </span>

                    <FiArrowUpRight className="absolute text-2xl bottom-3 transform transition-transform group-hover:rotate-90 duration-500 hidden md:visible" />


                    <span className="absolute left-0 top-0  transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        <div className="relative">
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute -top-2 " />
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute bottom-4 left-24" />
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute -top-1 left-[178px]" />
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute top-8 left-[345px]" />
                            <h1 className="text-9xl font-extrabold ">VICIO CITIES</h1>

                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[355px] bottom-[33px]" />
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[216px] -top-1" />
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-40 bottom-7" />
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[88px] bottom-[70px]" />
                            <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-0 bottom-7" />

                        </div>
                    </span>
                </div>
            </Link>

            <Fvideo />



        </div>
    );
};

export default Homepage;