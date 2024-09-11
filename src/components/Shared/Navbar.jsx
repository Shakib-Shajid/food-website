import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
            <div className="navbar">
                <div className="flex-1">
                    <p className="btn btn-ghost text-2xl font-bold"><Link href="/">VICIO</Link></p>
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal">
                        <li className="p-0 btn-disabled -mr-5 relative  hidden md:block"><Image src="/fire_icon.png" width="70" height="70" alt="" /></li>
                        <li className="btn-disabled text-xs font-bold hidden md:block"><p className="uppercase flex flex-col">The hottest burger of today is <span className="self-end">BBQ Bacon Cheeseburger</span></p></li>
                        <li><Link href="/pida-ya" className="rounded-full border-black border-2 hover:bg-black hover:text-white ">¡Pide ya!</Link></li>
                    </ul>
                </div>
            </div>
         
    );
};

export default Navbar;

        