import ProductThird from "@/components/ProductThird";
import BurgerMiddle from "@/components/BurgerMiddle";
import ProductFirst from "@/components/ProductFirst";
import ProductSecond from "@/components/ProductSecond";
import BurgersCategory from "@/components/BurgersCategory";


const page = () => {
    return (
        // <div className="flex flex-row w-screen border-blue-600 border-2 overflow-x-auto">
        //     <Product_first />
        //     <BurgerMiddle />
        //     <ProductSecond />
        // </div>

        <div className="w-screen overflow-x-auto ">
            <div className="flex">
                {/* ProductFirst Component */}
                <div className=" flex-shrink-0 ">
                    <ProductFirst />
                </div>

                {/* BurgerMiddle Component */}
                <div className="h-full flex-shrink-0 ">
                    <BurgerMiddle />
                </div>

                {/* ProductSecond Component */}
                <div className="h-full flex-shrink-0 ">
                    <ProductSecond />

                </div>
                <div className="h-full flex-shrink-0 ">
                    <ProductThird />
                </div>

                <div className="h-full flex-shrink-0 ">
                    <BurgersCategory />
                </div>
            </div>
        </div>

    );
};

export default page;