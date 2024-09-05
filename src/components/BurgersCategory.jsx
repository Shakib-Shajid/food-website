import Image from "next/image";

const BurgersCategory = () => {
    return (
        <div className="ml-3 mr-10 relative">
            <h2 className="text-3xl font-bold ml-4 my-3">BURGERS</h2>
            <div>
                <div className="grid grid-cols-3 gap-6 w-full">
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                    <div className="w-28 hover:overflow-hidden">
                        <Image src="/burger.png" width="400" height="300" alt="" className="h-20 w-80 hover:scale-[1.90]  hover:duration-300" />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1 absolute rotate-90 -right-52 text-gray-400 top-52 uppercase">
                <p className="text-xs">vicio burger club </p>
                <p className="text-xl font-bold">V</p>
                <p className="text-xs">best burger quality </p>
            </div>

            <p className="text-[8px] text-end my-4">CHEESEBURGER / BACON CHEESEBURGER / BBQ BACON CHEESEBURGER / <br />
                VICIO ORIGINALS /  CHEESEBURGER TRUFADA / CHEESEBURGER IBÉRICA / <br />
                POLLOS HERMANOS / VEGAN / VEGAN TRUFFLE BURGER</p>



            <div className="absolute left-0 ">

                <div className=" bg-white overflow-hidden h-full w-[500px] mt-20 " style={{
                    transform: 'rotate(-15deg)'
                }}>
                    <div className="marquee-content flex space-x-3 animate-marquee whitespace-nowrap ">
                        <span className="text-red-600 font-bold text-5xl">VICIO - BURGER CLUB- <span className="bg-red-600 text-red-600">.........</span></span>
                        {/* Repeat the content to ensure continuous scrolling */}
                        <span className="text-red-600 font-bold text-5xl">VICIO - BURGER CLUB- <span className="bg-red-600 text-red-600">.........</span></span>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default BurgersCategory;