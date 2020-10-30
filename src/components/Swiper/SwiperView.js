import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "./SwiperView.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const SwiperView = ({movieList}) => {
    SwiperCore.use([Autoplay, Navigation]);
    return (
        <Swiper
            className="swiper"
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
        >
            {movieList.map(({ id, background_image }) => (
                <SwiperSlide key={id} className="swiper-slide">
                    <img src={background_image} alt="movie-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperView;
