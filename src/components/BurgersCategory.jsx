import Image from "next/image";

const BurgersCategory = () => {
    return (
        <div className="ml-3 mr-10">
            <h2 className="text-3xl font-bold ml-4 my-3">BURGERS</h2>
            <div>
                <div className="grid grid-cols-3 gap-2 w-full">
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
            <p className="text-[8px] text-end">CHEESEBURGER / BACON CHEESEBURGER / BBQ BACON CHEESEBURGER / <br />
                VICIO ORIGINALS /  CHEESEBURGER TRUFADA / CHEESEBURGER IBÉRICA / <br />
                POLLOS HERMANOS / VEGAN / VEGAN TRUFFLE BURGER</p>
        </div>
    );
};

export default BurgersCategory;