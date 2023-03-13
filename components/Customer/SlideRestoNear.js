import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow  } from 'swiper';
import 'swiper/swiper-bundle.css';

import Card_Resto_Near from './Card_Resto_Near';

// Import Swiper styles
import 'swiper/css';

export default function SlideRestoNear () {
  
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
          stretch: 80,
          depth: 0,
          modifier: 2.5,
          slideShadows: false,
          }}
    
        modules={[EffectCoverflow]}
        className="h-full p-8 relative"

      >
        <SwiperSlide>
          <Card_Resto_Near />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Resto_Near />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Resto_Near />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Resto_Near />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Resto_Near />
        </SwiperSlide>
        <SwiperSlide>
            <Card_Resto_Near />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};