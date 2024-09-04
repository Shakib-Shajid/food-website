import Image from 'next/image';
import React from 'react';

const ProductSecond = () => {
    return (
        <div className='relative'>
                <Image src="/product_2.png" width="300" height="400" className='h-80 w-80' alt="" />
            <div className='flex justify-between w-80'>
                <p className='w-52 text-[10px]'>Me declaro mega fan de Vicio desde hace 1 año cuando tenían la mini cocina que solo era delivery y no han bajado la calidad, la mantienen y están incluso mejor! La hamburguesa que siempre pido es la de bbq y bacon y si no la has comido no sabes de lo que te pierdes!!! 😍”</p>

                <p className='text-[10px] text-end font-bold'>Karina Santoyo (Ticket Survey)</p>
            </div>

            <h2 className='text-5xl font-semibold'>No BULLSHIT <br />
                DELICATESSEN.
            </h2>

        </div>
    );
};

export default ProductSecond;