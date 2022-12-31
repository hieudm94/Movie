import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieCarousel.scss";
import "swiper/swiper-bundle.min.css";
import MovieCarouselItem from "../MovieCarouselItem/MovieCarouselItem";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";

export default function MovieCarousel({ list }) {
  // let [loading, setLoading] = useState(true);
  SwiperCore.use([EffectCoverflow, Navigation]);

  const renderPhim = () => {
 
    return (
      <Swiper
        loop={true}
        className="custom-swiper"
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        breakpoints={{
          375: {
            width: 345,
            slidesPerView: 1,
            centeredSlides: false,
            modifier: 5,
          },
          640: {
            width: 640,
            centeredSlides: false,
            modifier: 5,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 3,
            centeredSlides: true,
          },
          1200: {
            width: 1200,
            slidesPerView: 5,
          },
        }}
      >
        {list?.map((phim, index) => {
          return (
            <SwiperSlide key={index}>
              <MovieCarouselItem phimItem={phim} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };
  return renderPhim();
}
