import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

const FAQ = () => {
    return (
        <div>

            <Link href="/faqs">
                <div className="relative  overflow-hidden group -rotate-90 my-40 mx-0" >

                    <span className="ml-10 block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                        <h1 className="text-7xl font-extrabold">FAQS</h1>
                    </span>

                    <FiArrowUpRight className="absolute text-2xl top-3 left-5 transform transition-transform rotate-90 group-hover:rotate-0 duration-500" />

                    <span className="ml-10 absolute left-0 top-0  transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        <div className="relative">
                            <AiOutlineMessage className="text-2xl font-bold absolute right-10 " />
                            <h1 className="text-7xl font-extrabold ">FAQS</h1>
                            <AiOutlineMessage className="text-2xl font-bold absolute bottom-2 left-4 " />

                        </div>
                    </span>

                </div>
            </Link>

        </div>
    );
};

export default FAQ;
