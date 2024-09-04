// import { FaInstagram } from "react-icons/fa6";
// import { MdArrowOutward } from "react-icons/md";


// const Footer = () => {
//     return (
//         <div>
//             <div className="navbar min-h-0	">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             <li><a>COLLECTION</a></li>
//                             <li><a>VICIO CITIES</a></li>
//                             <li><a>CURRA AQUÍ</a></li>
//                             <li><a>FAQS</a></li>
//                         </ul>
//                     </div>
//                     <div className="btn btn-ghost text-xl hidden lg:flex">
//                         <ul className="menu menu-horizontal px-1">
//                             <li><a>COLLECTION</a></li>
//                             <li><a>VICIO CITIES</a></li>
//                             <li><a>CURRA AQUÍ</a></li>
//                             <li><a>FAQS</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="navbar-end">
//                     <div className="hidden lg:flex">
//                         <ul className="menu menu-horizontal px-1">
//                             <li><a>PRESENT</a></li>
//                             <li>
//                                 <div className="dropdown dropdown-top dropdown-hover">
//                                     <span tabIndex={0} >Asuntos legales</span>
//                                     <ul tabIndex={0} className="dropdown-content bg-black text-white menu rounded-box z-[1] w-44 uppercase text-[9px]">
//                                         <li><a>canal etico</a></li>
//                                         <li><a>aviso legal</a></li>
//                                         <li><a>condiciones generales</a></li>
//                                         <li><a>Política cookies</a></li>
//                                         <li><a>Política de privadidad</a></li>
//                                         <li><a>Política redes sociales</a></li>
//                                     </ul>
//                                 </div>
//                             </li>

//                             <li className="flex items-center ">
//                                 <li className="dropdown dropdown-top dropdown-hover">
//                                     <span tabIndex={0} className="border py-0 px-2 rounded-box border-black">ESP</span>
//                                     <ul tabIndex={0} className="dropdown-content  bg-white menu rounded-box z-50 uppercase text-[9px] space-y-1">
//                                         <li className="border rounded-box border-black"><a>eng</a></li>
//                                         <li className="border rounded-box border-black"><a>cat</a></li>
//                                     </ul>
//                                 </li>
//                             </li>

//                             <MdArrowOutward className="text-4xl text-black transform transition-transform duration-500 group-hover:rotate-90" />
//                             <FaInstagram className="text-3xl text-black transform transition-transform duration-500 group-hover:-rotate-180" />

//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;


import { FaInstagram } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className="navbar min-h-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>COLLECTION</a></li>
                            <li><a>VICIO CITIES</a></li>
                            <li><a>CURRA AQUÍ</a></li>
                            <li><a>FAQS</a></li>
                        </ul>
                    </div>
                    <div className="btn btn-ghost text-xl hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>COLLECTION</a></li>
                            <li><a>VICIO CITIES</a></li>
                            <li><a>CURRA AQUÍ</a></li>
                            <li><a>FAQS</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-end bg-white">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>PRESENT</a></li>
                            <li>
                                <div className="dropdown dropdown-top dropdown-hover">
                                    <span tabIndex={0} >Asuntos legales</span>
                                    <ul tabIndex={0} className="dropdown-content bg-black text-white menu rounded-box z-[1] w-44 uppercase text-[9px]">
                                        <li><a>canal etico</a></li>
                                        <li><a>aviso legal</a></li>
                                        <li><a>condiciones generales</a></li>
                                        <li><a>Política cookies</a></li>
                                        <li><a>Política de privadidad</a></li>
                                        <li><a>Política redes sociales</a></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <div className="dropdown dropdown-top dropdown-hover">
                                    <span tabIndex={0} className="border py-0 px-2 rounded-box border-black">ESP</span>
                                    <ul tabIndex={0} className="dropdown-content bg-white menu rounded-box z-50 uppercase text-[9px] space-y-1">
                                        <li className="border rounded-box border-black"><a>eng</a></li>
                                        <li className="border rounded-box border-black"><a>cat</a></li>
                                    </ul>
                                </div>
                            </li>

                            <div className="group mx-3">
                                <FaInstagram className="text-base transform transition-transform duration-500 group-hover:rotate-90" />
                                <MdArrowOutward className="text-base transform transition-transform duration-500 group-hover:-rotate-180" />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
