import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="inline-block">
            <Image src="/burger.png" className="hover:scale-95 translate-transform duration-500" alt="" width="500" height="500" />
            <div className="relative">
                <div>
                    <FiArrowUpRight className="absolute text-2xl" /> <br />
                    <Image src="/rollBurger.gif" width="50" height="50" alt="" className="" />
                    <span>lorem</span>
                </div>
                <div className="relative inline-block overflow-hidden group ">
                    {/* Original Text */}
                    <span className="text-7xl font-bold  ml-5 block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                        COLLECTION
                    </span>

                    {/* Hover Text */}
                    <span className="text-7xl font-bold  ml-5 absolute left-0 top-0 block transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        COLLECTION
                    </span>
                </div>
            </div>




        </div>
    );
};

export default Banner;