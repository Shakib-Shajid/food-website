// import Image from 'next/image';
// import React from 'react';

// const BagImg = () => {
//     return (
//         <div className='relative'>
//             <Image src="/packing.png" width="150" height="150" alt="" className="border-red-600 border-2 absolute right-56 top-20 z-10" />

//             <div className='relative -ml-24' style={{ width: '300px', height: '300px' }}>
//                 {/* Video positioned in the top left and behind the image */}
//                 <video
//                     src="https://cdn.prod.website-files.com/6234368c451e783a0caa24f2/64affcf530bd466bf47478ec_VICIO_Logo-Web-transcode.mp4"
//                     width="300"
//                     height="300"
//                     autoPlay
//                     muted
//                     loop
//                     type="video/mp4"
//                     className='absolute top-0 left-40 z-10'
//                 ></video>

//                 {/* Image on top of the video */}
//                 <Image
//                     src="/foodBag.jpg"
//                     width={240}
//                     height={250}
//                     alt="Food Bag"
//                     className='absolute top-[156px] left-0 z-40'
//                 />
//             </div>
//         </div>
//     );
// };

// export default BagImg;



import Image from 'next/image';
import React from 'react';

const BagImg = () => {
  return (
    <div>
      <div className='relative -ml-24' style={{ width: '300px', height: '300px' }}>
        {/* Video positioned in the top left and behind the image */}
        <video
          src="https://cdn.prod.website-files.com/6234368c451e783a0caa24f2/64affcf530bd466bf47478ec_VICIO_Logo-Web-transcode.mp4"
          width="300"
          height="300"
          autoPlay
          muted
          loop
          type="video/mp4"
          className='absolute top-0 left-40 z-10'
        ></video>

        {/* First Image on top of the video */}
        <Image
          src="/foodBag.png"
          width="330"
          height="330"
          alt="Food Bag"
          className='absolute top-[156px] -left-10 z-40'
        />

        {/* Second Image positioned on top of the first image */}
        <div className='relative'>
          <Image
            src="/packing.png"
            width="160"
            height="160"
            alt=""
            className="absolute -left-20 top-16 z-50"
          />
        </div>
      </div>

    </div>
  );
};

export default BagImg;
