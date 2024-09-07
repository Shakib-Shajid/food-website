
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
const Banner = () => {


    return (
        <div className="inline-block">

            <Link href="/product"><Image src="/burger.png" className="hover:scale-95 translate-transform duration-500 -ml-20" alt="" width="500" height="500" /></Link>
            <div className="relative group flex">

                <div className="ml-4">
                    <div className="flex justify-end">
                        <FiArrowUpRight className="absolute text-2xl group-hover:rotate-90 transition-transform duration-300 " /> <br />

                    </div>
                    <div className="relative my-[2px]">
                        <Image src="/border.png" width="50" height="50" alt="" className="absolute" />
                        <Image src="/rollBurger.gif" width="50" height="50" alt="" className="invisible group-hover:visible transition-transform duration-500 ease-in" />
                    </div>
                    <Image src="/map-world.png" width="50" height="50" alt="" />
                </div>

                <Link href="/collection">
                    <div className="relative inline-block overflow-hidden group ">
                        {/* Original Text */}
                        <span className="text-7xl font-bold  ml-3 mr-2 block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                            COLLECTION
                        </span>

                        {/* Hover Text */}
                        <span className="text-7xl font-bold  ml-3 mr-2 absolute left-0 top-0 block transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                            COLLECTION
                        </span>
                    </div>
                </Link>

            </div>
            <p className="text-xs font-bold text-end  mr-3">AQUÍ TIENES NUESTRO MENÚ</p>
            <p className="text-xs ml-4">
                VICIO Originals/La Pollos/BBQ Bacon Cheeseburger/ <br />
                Vegan Truffle Burger/Cheeseburger Iberica/ Vegan Burger/<br />
                Cheeseburger Trufada/Bacon Cheeseburger/Cheeseburger/ <br />
                Single Burger/
            </p>


        </div>
    );
};

export default Banner;