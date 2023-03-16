import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow  } from 'swiper';
import 'swiper/swiper-bundle.css';

import Card_Resto from './Card_RestoNearYou';

// Import Swiper styles
import 'swiper/css';

export default function SlideRestoNearYou () {
  
  return (
    <div>
      <Swiper
        grabCursor={true}
        loop={false}
        slidesPerView={'auto'}
        direction={'vertical'}

        // Setingan efek coverflow
    
        modules={[]}
        className="h-full p-8 relative"

      >
        <SwiperSlide
        className='py-2'
        >
            <Card_Resto />
        </SwiperSlide>

        <SwiperSlide
        className='py-2'
        >
            <Card_Resto />
        </SwiperSlide>

        <SwiperSlide
        className='py-2'
        >
            <Card_Resto />
        </SwiperSlide>

        <SwiperSlide
        className='py-2'
        >
            <Card_Resto />
        </SwiperSlide>

        <SwiperSlide
        className='py-2'
        >
            <Card_Resto />
        </SwiperSlide>

        <SwiperSlide
        className='py-2'
        >
            <Card_Resto />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};