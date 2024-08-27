import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";


const QRcode = () => {
    return (
        <div>
            <div className="relative -left-56">
                <h3 className="text-[10px] text-end font-bold">DAILY DOSE <br />
                    OF VICIO HERE</h3>
                <Image src="/qr.png" width="70" height="70" alt="" className="mx-auto" />
                <div className="flex items-baseline group">
                    <MdArrowOutward className="text-4xl transform transition-transform duration-500 group-hover:rotate-90" />
                    <FaInstagram className="text-3xl transform transition-transform duration-500 group-hover:-rotate-180" />
                </div>
            </div>
        </div>
    );
};

export default QRcode;