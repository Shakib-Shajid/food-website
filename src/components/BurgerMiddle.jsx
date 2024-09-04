import Image from "next/image";

const BurgerMiddle = () => {
    return (
        <div className="flex items-center relative -left-60 border-red-600 border-2 ">
            <Image src="/burger.png" width="800" height="700" alt=""/> 
        </div>
    );
};

export default BurgerMiddle;