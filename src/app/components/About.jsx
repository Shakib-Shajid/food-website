import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

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

            <div className="flex justify-end absolute -right-44 "> 
                <Image src="/burgerHalf.png" width="300" height="300" className="h-96 w-80" alt="" />
            </div>
        </div>
    );
};

export default About;