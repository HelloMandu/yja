import React, { useEffect } from 'react';

import {useSelector} from 'react-redux';

import CategoryContainer from '../../containers/CategoryContainer/CategoryContainer';

import Header from '../../components/header/Header';
import SwiperView from '../../components/Swiper/SwiperView'
import Category from '../../components/Category/Category'

import './MainPage.scss'

const MainPage = () => {
  const movieList = useSelector(state => state.movie.list);
  useEffect(()=>{
    console.log(movieList);
  })
  return (
    <div className="mainpage">
      <Header></Header>
      <SwiperView movieList={movieList}></SwiperView>
      <CategoryContainer movieList={movieList}></CategoryContainer>
    </div>
  );
}

export default MainPage;
