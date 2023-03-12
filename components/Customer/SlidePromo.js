import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Pagination]);

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
          stretch: 10,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
          }}
        
        // Setingan autoplay
        autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}

        pagination={{
            clickable: true,
            renderBullet: (i, classname) => {
              return `<div class="${classname} w-4 h-8 sm:w-6 sm:h-10 bg-pagination bg-no-repeat bg-contain bg-center"></div>`
            },
          }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
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

        <div className='flex justify-center mt-10 relative bottom-8 w-4' />

      </Swiper>
    </div>
  );
};