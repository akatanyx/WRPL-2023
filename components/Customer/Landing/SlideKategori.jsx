import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow  } from 'swiper';
import 'swiper/swiper-bundle.css';

import Card_Kategori from './Card_Kategori';    

// Import Swiper styles
import 'swiper/css';

export default function SlideBest () {
  
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}

        // Setingan efek coverflow
        coverflowEffect={{
          rotate: 0,
          stretch: 230,
          depth: 0,
          modifier: 1,
          slideShadows: false,
          }}
    
        modules={[EffectCoverflow]}
        className="h-full px-8 relative"

      >
            <SwiperSlide>
                <Card_Kategori />
                <Card_Kategori />
            </SwiperSlide>
            <SwiperSlide>
                <Card_Kategori />
                <Card_Kategori />
            </SwiperSlide>
            <SwiperSlide>
                <Card_Kategori />
                <Card_Kategori />
            </SwiperSlide>
            <SwiperSlide>
                <Card_Kategori />
                <Card_Kategori />
            </SwiperSlide>
            <SwiperSlide>
                <Card_Kategori />
                <Card_Kategori />
            </SwiperSlide>
            <SwiperSlide>
                <Card_Kategori />
                <Card_Kategori />
            </SwiperSlide>
      </Swiper>
    </div>
  );
};