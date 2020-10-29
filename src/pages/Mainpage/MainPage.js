import React from 'react';

import Header from '../../components/header/Header';
import SwiperView from '../../components/Swiper/SwiperView'
import Category from '../../components/Category/Category'

import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="mainpage">
      <Header></Header>
      <SwiperView></SwiperView>
      <Category></Category>
    </div>
  );
}

export default MainPage;
