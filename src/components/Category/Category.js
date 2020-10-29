import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import "./Category.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short Film",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
    "Western",
];

const Category = () => {
    const id = useRef(0);
    return (
        <Swiper
            className="category"
            slidesPerView={5}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {genres.map((genre) => {
                id.current += 1;
                return (
                    <SwiperSlide key={id.current} className="category-list">
                        {genre}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Category;
