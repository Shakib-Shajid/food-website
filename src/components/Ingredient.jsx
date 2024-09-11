import Image from 'next/image';
import React from 'react';

const Ingredient = () => {
    return (
        <div className='max-w-md '>
            <div className="flex gap-2 m-2">
                <Image src="/world.png" width="70" height="70" alt="" />
                <Image src="/rollBurger.gif" width="70" height="70" alt="" />
            </div>
            <p className=" uppercase font-bold text-lg">Seguramente te habrás preguntado qué hace que la burger tenga ese sabor tan icónico.</p>
            <div className="relative">
                <Image src="/pic_2.png" width="300" height="300" alt="" />
                <video className="absolute top-10 right-24"
                    src="/burger_video.mp4"
                    width="90"
                    height="90"
                    type="video/mp4"
                    muted // Ensure video is muted for autoplay
                    autoPlay
                    loop
                ></video>
                <Image src="/potato.png" width="70" height="60" alt="" className="absolute top-44 right-10" />
            </div>
        </div>
    );
};

export default Ingredient;