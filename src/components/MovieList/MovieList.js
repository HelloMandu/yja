import React from "react";
import { useRef } from "react";

import "./MovieList.scss";

const MovieItem = React.memo(function ({ title, summary, small_cover_image }) {
    return (
        <>
            <img
                className="movie-img"
                src={small_cover_image}
                alt="movie-item"
            />
            <div className="movie-description">
                <div className="movie-title">{title}</div>
                <div className="movie-summary">{summary}</div>
            </div>
        </>
    );
});

const MovieList = ({ movieList }) => {
    const id = useRef(0);
    return (
        <ul className="movie-list">
            {movieList.map(({ title, summary, small_cover_image }) => {
                id.current += 1;
                return (
                    <li key={id.current} className="movie-item">
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

export default React.memo(MovieList);
