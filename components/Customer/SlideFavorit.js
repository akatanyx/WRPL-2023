import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow  } from 'swiper';
import 'swiper/swiper-bundle.css';

import Card_Favorit from './Card_Favorit';

// Import Swiper styles
import 'swiper/css';

export default function SlideFavorit () {
  
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        slidesPerView={'auto'}
        centeredSlides={true}

        // Setingan efek coverflow
        coverflowEffect={{
          rotate: 0,
          stretch: 25,
          depth: 0,
          modifier: 2.5,
          slideShadows: false,
          }}
    
        modules={[EffectCoverflow]}
        className="h-full p-8 relative"

      >
        <SwiperSlide>
            <Card_Favorit />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Favorit />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Favorit />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Favorit />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Favorit />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Favorit />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};