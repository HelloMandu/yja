import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import MovieList from "../../components/MovieList/MovieList";

import "./CategoryContainer.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const genres = [
    {
        id: 1,
        genre: "All",
    },
    {
        id: 2,
        genre: "Action",
    },
    {
        id: 3,
        genre: "Adventure",
    },
    {
        id: 4,
        genre: "Animation",
    },
    {
        id: 5,
        genre: "Biography",
    },
    {
        id: 6,
        genre: "Comedy",
    },
    {
        id: 7,
        genre: "Crime",
    },
    {
        id: 8,
        genre: "Documentary",
    },
    {
        id: 9,
        genre: "Drama",
    },
    {
        id: 10,
        genre: "Family",
    },
    {
        id: 11,
        genre: "Fantasy",
    },
    {
        id: 12,
        genre: "Film Noir",
    },
    {
        id: 13,
        genre: "History",
    },
    {
        id: 14,
        genre: "Horror",
    },
    {
        id: 15,
        genre: "Music",
    },
    {
        id: 16,
        genre: "Musical",
    },
    {
        id: 17,
        genre: "Mystery",
    },
    {
        id: 18,
        genre: "Romance",
    },
    {
        id: 19,
        genre: "Sci-Fi",
    },
    {
        id: 20,
        genre: "Short Film",
    },
    {
        id: 21,
        genre: "Sport",
    },
    {
        id: 22,
        genre: "Superhero",
    },
    {
        id: 23,
        genre: "Thriller",
    },
    {
        id: 24,
        genre: "War",
    },
    {
        id: 25,
        genre: "Western",
    },
];

const CategoryContainer = ({ movieList }) => {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    useEffect(() => {
        const paginationBullet = document.getElementById("movie-swiper");
        for (let i = 0; i < genres.length; i++) {
            paginationBullet.firstChild.children[i].innerHTML = genres[i].genre;
        }
    }, []);
    return (
        <>
            <Swiper
                id="movie-swiper"
                className="movie-swiper"
                slidesPerView={1}
                centeredSlides={true}
                pagination={{ clickable: true }}
                loop={true}
            >
                {genres.map(({ id, genre }) => (
                    <SwiperSlide key={id} className="movie-slide">
                        <MovieList
                            genre={genre}
                            movieList={movieList}
                        ></MovieList>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CategoryContainer;
