import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MainPage from "./pages/Mainpage/MainPage";

import { getMovieList } from "./store/movie";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieList());
    }, [dispatch]);
    return (
        <>
            <MainPage></MainPage>
        </>
    );
};

export default App;
