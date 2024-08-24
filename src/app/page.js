import { FiArrowUpRight } from "react-icons/fi";
import Banner from "./components/Banner";
import Homepage from "./components/Homepage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center ">

      <div className="flex flex-nowrap ">
        <section className="flex-none w-screen ">
          <div className="flex gap-2">
            <Banner />
            <Homepage />
          </div>


        </section>

        <section className="flex-none w-screen bg-red-500">Section 2</section>
        <section className="flex-none w-screen bg-blue-500">Section 3</section>
      </div>



    </main>
  );
}


