import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";


const QRcode = () => {
    return (
        <div>
            <Link href="https://www.instagram.com/" className="group" target="_blank">
                <div className="relative md:-left-56">
                    <h3 className="text-[10px] text-end font-bold hidden md:visible">DAILY DOSE <br />
                        OF VICIO HERE</h3>
                    <Image src="/qr.png" width="70" height="70" alt="" className="md:mx-auto hidden md:visible" />



                    {/* small device */}
                    <div className="relative w-full bg-black text-white p-4 ">
                        <h1 className="text-4xl font-bold">VICIO</h1>

                        <div className="absolute bottom-0 left-0 w-full bg-white text-black flex justify-between items-center p-2">
                            <span className="font-bold text-2xl">VICIO CITIES</span>

                            <div className="flex items-center">
                                <div className="mr-2 text-[8px] text-center">
                                    <span>SCAN THIS</span><br />
                                    <span>AND ENJOY</span> <br />
                                    <span className="text-xs font-bold">↗</span>
                                </div>
                                <Image src="/qr.png" alt="QR Code" width="30" height="300" className="w-12 h-12" />
                            </div>

                        </div>
                    </div>



                    {/* large device */}
                    <div className="md:flex items-baseline group hidden md:visible">
                        <MdArrowOutward className="text-4xl transform transition-transform duration-500 group-hover:rotate-90" />
                        <FaInstagram className="text-3xl transform transition-transform duration-500 group-hover:-rotate-180" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default QRcode;