import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectCoverflow } from "swiper";

import "./SwiperView.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

const SwiperView = ({movieList}) => {
    SwiperCore.use([Autoplay, Navigation, EffectCoverflow]);
    return (
        <Swiper
            className="swiper"
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={'auto'}
            centeredSlides={true}
            navigation
            loop={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
        >
            {movieList.map(({ id, large_cover_image }) => (
                <SwiperSlide key={id} className="swiper-slide">
                    <img src={large_cover_image} alt="movie-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperView;
