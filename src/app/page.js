import Banner from "./components/Banner";
import GrabButton from "./components/GrabButton";
import Homepage from "./components/Homepage";
import BagImg from "./components/BagImg";


const page = () => {
  return (
    <>
      <div className="flex-shrink-0 w-screen flex">
        <Banner />
        <Homepage />
        <GrabButton />
      </div>
      <div className="flex-shrink-0 w-screen flex ">
        <BagImg />

        <p>this is second part</p>
      </div>
      <div className="flex-shrink-0 w-screen flex ">
        <p>this is third part</p>
      </div>
    </>
  );
};

export default page;