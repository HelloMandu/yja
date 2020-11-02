import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainPage from "./pages/Mainpage/MainPage";

import Loading from "./components/Loading";

import { getMovieList } from "./store/movie";
import { getMovieDetail } from './store/detail'

const App = () => {
    // const isLoading = useSelector((state) => state.loading.isLoading);
    const dispatch = useDispatch();

    const detail = useSelector((state) => state.detail.detail)

    // useEffect(() => {
    //     dispatch(getMovieList('action'));
    // }, [dispatch]);

    const debug = () => {
        dispatch(getMovieDetail(22375))
    }

    return (
        <>
            {/* <Loading /> */}
            {/* {!isLoading && <MainPage></MainPage>} */}
            <div onClick={debug}>API TEST</div>
            {console.log(detail)}
            
        </>
    );
};

export default App;
