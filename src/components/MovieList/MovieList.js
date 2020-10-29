import React from "react";
import { useRef } from "react";

import './MovieList.scss';

const MovieItem = ({ title, summary, small_cover_image }) => {
    return (
        <>
            <img src={small_cover_image} alt="movie-item" />
            <div className="movie-title">{title}</div>
            <div className="movie-summary">{summary}</div>
        </>
    );
};

const MovieList = ({ movieList }) => {
    const id = useRef(0);
    return (
        <ul className="movie-list">
            {movieList.map(({ title, summary, small_cover_image }) => {
                id.current += 1;
                return (
                    <li key={id} className="movie-item">
                        <MovieItem
                            title={title}
                            summary={summary}
                            small_cover_image={small_cover_image}
                        ></MovieItem>
                    </li>
                );
            })}
        </ul>
    );
};

export default MovieList;
