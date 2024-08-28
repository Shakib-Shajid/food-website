import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Text from "./Text";

const About = () => {
    return (
        <div className="relative">
            <div className="relative inline-block overflow-hidden group  -left-28 -bottom-52">


                <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                    <h1 className="text-9xl font-extrabold">ABOUT US</h1>
                </span>

                <FiArrowUpRight className="absolute text-2xl top-0 transform transition-transform group-hover:rotate-90 duration-500" />


                <span className="absolute left-0 top-0  transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    <div className="relative">

                        <h1 className="text-9xl font-extrabold ">ABOUT US</h1>

                        <Image src="/rocket.gif" width="40" height="40" alt="" className="absolute top-10 left-52 -rotate-90" />

                        <Image src="/rollBurger.gif" width="40" height="40" alt="" className="bg-transparent absolute top-12 right-[180px] rotate-45" />

                        <h3 className="w-24 rounded-xl -rotate-12 text-center text-black bg-red-600 font-extrabold text-3xl absolute top-12 right-10">VICIO</h3>


                    </div>
                </span>



            </div>

            <div className="flex justify-end absolute -right-44 z-10">
                <Image src="/burgerHalf.png" width="300" height="300" className="h-96 w-80" alt="" />
            </div>
            <div className="absolute overflow-hidden bottom-40 -left-32">
                {/* <Text /> */}

                {/* .............................................................................. */}
                <div className="relative bg-white overflow-hidden w-[690px]">
                    <div className="marquee-content flex space-x-3 animate-marquee whitespace-nowrap ">
                        <span className="text-red-600 font-bold text-5xl">VICIO - BURGER CLUB- <span className="bg-red-600 text-red-600">.........</span></span>
                        {/* Repeat the content to ensure continuous scrolling */}
                        <span className="text-red-600 font-bold text-5xl">VICIO - BURGER CLUB- <span className="bg-red-600 text-red-600">.........</span></span>
                    </div>
                </div>
                {/* .............................................................................. */}



            </div>
            <div className="absolute text-[8px] overflow-hidden bottom-32 -left-32 flex gap-5 w-[660px]">
                <div>
                    <p className="">FAST, GOOD & LOUD 
                        ESTO ES VICIO.</p>
                </div> 
                <div className=" w-full text-right">
                    <p className="uppercase font-bold">@ganasdevicio</p>

                </div>
            </div>
        </div>
    );
};

export default About;

