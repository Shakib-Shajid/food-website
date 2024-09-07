"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const CollectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}  // Use realIndex for proper slide detection
        modules={[Pagination]}
        className="mySwiper w-screen h-[60vh]"
      >
        {[
          { src: '/packBurger.png', alt: 'Pack Burger' },
          { src: '/cake.png', alt: 'Cake' },
          { src: '/coffee.png', alt: 'Coffee' },
          { src: '/packBurg.png', alt: 'Pack Burg' },
          { src: '/frFry.png', alt: 'French Fries' }
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex justify-center transition-transform duration-300 ${
                activeIndex === index ? 'scale-125' : 'scale-100'
              }`}
            >
              <Image src={item.src} width="300" height="300" alt={item.alt} className=' mt-20'/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CollectionCarousel;
