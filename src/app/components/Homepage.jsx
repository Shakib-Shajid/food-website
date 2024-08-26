import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";
import { FiArrowUpRight } from "react-icons/fi";
import Fvideo from "./Fvideo";

const Homepage = () => {


    return (
        <div>
            <small className="flex gap-3 items-center relative -bottom-3"><TfiWorld className="text-xl" /><TfiWorld className="absolute left-2 flex items-baseline text-xl" /><span>VICIO BURGER CLUB</span></small>

            <div className="relative inline-block overflow-hidden group ">

                <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                    <h1 className="text-9xl font-extrabold">VICIO CITIES</h1>
                </span>

                <FiArrowUpRight className="absolute text-2xl bottom-3 transform transition-transform group-hover:rotate-90 duration-500" />


                <span className="absolute left-0 top-0  transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    <div className="relative">
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute -top-1 " />
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute bottom-2 left-[88px]" />
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute top-1 left-[178px]" />
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute top-8 left-[336px]" />
                        <h1 className="text-9xl font-extrabold ">VICIO CITIES</h1>

                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[328px] bottom-7" />
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[198px] top-2" />
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-36 bottom-7" />
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute right-[76px] bottom-16" />
                        <Image src="/fire.gif" width="24" height="24" alt="" className="absolute -right-1 bottom-4" />


                    </div>
                </span>



            </div>

            <Fvideo />



        </div>
    );
};

export default Homepage;