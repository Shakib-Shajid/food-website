import Image from "next/image";

const ProductThird = () => {
    return (
        <div className="mt-10">
            <h4 className="text-[10px] text-end font-bold">HIGH QUALITY BURGER <br />
                NEVER GOURMET</h4>
            <Image src="/product_3.png" width="300" height="300" alt="" />
        </div>
    );
};

export default ProductThird;