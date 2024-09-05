import Image from "next/image";
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5"


const ProductFirst = () => {
    return (
        <div className="flex flex-col justify-between ml-7 h-full">
            <div className="space-y-4">
                <h2 className="text-7xl font-bold uppercase">Cheeseburger <br /> Trufada</h2>
                <div className="group flex items-center font-bold uppercase ">
                    <IoMdArrowUp className="-rotate-45 group-hover:-rotate-90 transform transition-transform duration-300 " />
                    <span>Burgers</span>
                </div>
                <p className="text-[12px] w-3/4 border-b-2 border-dotted border-black pb-2">Doble smash burger, huevo frito, cheddar y salsa a base de trufa negra en un delicioso pan brioche.</p>
                <small className="underline uppercase font-bold ">Alérgenos</small>
            </div>

            <div className="flex gap-3">
                <div className="group">
                    <IoArrowForward className="text-2xl rotate-45 group-hover:rotate-[135deg] transform transition-transform duration-300"/>
                    <Image src="/product_1.png" width="120" height="120" alt="" />
                </div>

                <div className="mt-12">
                    <IoPlayCircleOutline className="text-4xl"/>
                    <p className="uppercase text-[10px]">No marketing <br /> bullshit, 2 minutos <br /> de burger</p>
                </div>
            </div>
        </div>
    );
};

export default ProductFirst;