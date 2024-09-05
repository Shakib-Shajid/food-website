import Link from "next/link";

const Navbar = () => {
    return (
            <div className="navbar">
                <div className="flex-1">
                    <p className="btn btn-ghost text-2xl font-bold"><Link href="/">VICIO</Link></p>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Link</a></li>
                        <li className="text-xs"><a>The hottest burger of today is <br /> BBQ Bacon Cheeseburger</a></li>
                        <li><button className="rounded-ss-btn border-black border-2 hover:bg-black hover:text-white">¡Pide ya!</button></li>
                    </ul>
                </div>
            </div>
         
    );
};

export default Navbar;