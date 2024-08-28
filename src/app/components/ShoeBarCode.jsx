import Image from "next/image";
import FAQ from "./FAQ";

const ShoeBarCode = () => {
    return (
        <div className="relative">
            <div className="relative  -top-10 -left-[550px]">
                <Image src="/shoe.png" className="h-52 w-44 object-cover" width="200" height="300" alt="" />
                <div className="flex gap-2">
                    <Image src="/brCode.png" width="100" height="100" alt="" />
                    <h3 className="text-[10px] font-bold">Y NIKE NOS DIÓ <br />
                        LO NUESTRO</h3>
                </div>
            </div>
            <div className="absolute -top-20 -left-[430px]">
                <FAQ />
            </div>
            <div className="absolute top-0 -left-[278px] ">
                <Image src="/bag.png" width="200" height="200" className="h-52 w-44" alt="" />
            </div>
        </div>
    );
};

export default ShoeBarCode;