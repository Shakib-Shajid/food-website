import Banner from "./components/Banner";
import GrabButton from "./components/GrabButton";
import Homepage from "./components/Homepage";
import BagImg from "./components/BagImg";
import ORcode from "./components/QRcode";
import About from "./components/About";
import ShoeBarCode from "./components/ShoeBarCode";
import FAQ from "./components/FAQ";
import Text from "./components/Text";


const page = () => {
  return (
    <>
      <div className="flex-shrink-0 w-screen flex">
        <Banner />
        <Homepage />
        <GrabButton />
      </div>
      <div className="flex-shrink-0 flex ">
        <BagImg />
        <ORcode />
        <About />
        <ShoeBarCode />
        {/* <Text /> */}
      </div>
    </>
  );
};

export default page;