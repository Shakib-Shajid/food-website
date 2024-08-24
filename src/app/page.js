import Banner from "./components/Banner";
import GrabButton from "./components/GrabButton";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className="flex items-center ">

      <div className="flex flex-nowrap ">
        <section className="flex-none w-screen ">
          <div className="flex gap-2">
            <Banner />
            <Homepage />
            <GrabButton />
          </div>


        </section>

        <section className="flex-none w-screen bg-red-500">Section 2</section>
        <section className="flex-none w-screen bg-blue-500">Section 3</section>
      </div>



    </main>
  );
}


