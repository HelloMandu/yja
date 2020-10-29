import React from "react";

import Category from "../../components/Category/Category";
import MovieList from "../../components/MovieList/MovieList";

const CategoryContainer = ({ movieList }) => {
    return (
        <>
            <Category></Category>
            <MovieList movieList={movieList}></MovieList>
        </>
    );
};

export default CategoryContainer;
