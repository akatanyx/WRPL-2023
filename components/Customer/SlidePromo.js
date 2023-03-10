import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/css';


export default function SlidePromo () {
  
  // biar slides bisa auto ganti
  const HomeComponent = () => {
    SwiperCore.use([Autoplay]);
  }
  
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}

        // Setingan efek coverflow
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 0,
          modifier: 2.5,
          slideShadows: false,
          }}
        
        // Setingan autoplay
        autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}

        pagination = {{ clickable: true }}
        navigation = {{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="h-full p-8 relative"
      >
        <SwiperSlide>
          <img src='../promo1.svg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../promo1.svg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../promo1.svg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../promo1.svg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../promo1.svg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../promo1.svg' alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};