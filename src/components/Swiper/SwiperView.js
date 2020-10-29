import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import "./SwiperView.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const SwiperView = ({movieList}) => {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    return (
        <Swiper
            className="swiper"
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            pagination
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
