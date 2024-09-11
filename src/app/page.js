import Banner from "../components/Banner";
import GrabButton from "../components/GrabButton";
import Homepage from "../components/Homepage";
import BagImg from "../components/BagImg";
import ORcode from "../components/QRcode";
import About from "../components/About";
import ShoeBarCode from "../components/ShoeBarCode";


const page = () => {
  return (
    <>
      <div className="flex-shrink-0 w-screen md:flex">
        <Banner />
        <Homepage />
        <GrabButton />
      </div>
      <div className="flex-shrink-0 md:flex ">
          <BagImg />
        <ORcode />
        <About />
        <ShoeBarCode />   
      </div>
    </>
  );
};

export default page;