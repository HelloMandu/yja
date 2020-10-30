import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainPage from "./pages/Mainpage/MainPage";

import Loading from "./components/Loading";

import { getMovieList } from "./store/movie";

const App = () => {
    const isLoading = useSelector((state) => state.loading.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList('Action'));
    }, [dispatch]);

    const movieList = useSelector((state) => state.movie.list)

    return (
        <>
            <Loading />
            {!isLoading && <MainPage></MainPage>}
        </>
    );
};

export default App;
