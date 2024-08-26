import Banner from "./components/Banner";
import GrabButton from "./components/GrabButton";
import Homepage from "./components/Homepage";

// export default function Home() {
//   return (
//     <>
//       <div className="flex items-center">
//         <div className="flex flex-nowrap ">
//           <section className="flex-none ">
//             <div className="flex gap-2">
//               <Banner />
//               <Homepage />
//               <GrabButton />
//               <Homepage />
//             </div>


//           </section>

//           <section className=" bg-red-500">Section 2</section>
//           <section className=" bg-blue-500">Section 3</section>
//         </div>


//       </div>

//     </>
//   );
// }


import React from "react";


const page = () => {
  return (
    <>
      <div className="flex-shrink-0 w-screen h-screen flex ">
        <Banner />
        <Homepage />
        <GrabButton />
      </div>
      <div className="flex-shrink-0 w-screen h-screen flex ">
        {/* <Blog /> */}
        <p>this is second part</p>
      </div>
      <div className="flex-shrink-0 w-screen h-screen flex ">
        <p>this is third part</p>
      </div>
    </>
  );
};

export default page;