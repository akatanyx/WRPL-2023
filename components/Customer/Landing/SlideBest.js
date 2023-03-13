import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow  } from 'swiper';
import 'swiper/swiper-bundle.css';

import Card_Best from './Card_Best';

// Import Swiper styles
import 'swiper/css';

export default function SlideBest () {
  
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={false}
        slidesPerView={'auto'}
        centeredSlides={true}

        // Setingan efek coverflow
        coverflowEffect={{
          rotate: 0,
          stretch: 150,
          depth: 0,
          modifier: 1,
          slideShadows: false,
          }}
    
        modules={[EffectCoverflow]}
        className="h-full p-8 relative"

      >
        <SwiperSlide>
            <Card_Best />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Best />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Best />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Best />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Best />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Best />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};