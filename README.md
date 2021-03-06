<h1 align="center">Movie api와 Swiper를 이용한 영화 리스트</h1>

## Link
[https://hellomandu.github.io/yja/](https://hellomandu.github.io/yja/)

## Features
- React Project
  - movie api
  - 장르별 filter
  - 스와이퍼
 
## API
 - 영화리스트: https://yts.mx/api/v2/list_movies.json
 
## Tech
 - ES6
 - React-Hooks
 - React-Redux
 - Redux-Saga
 - SCSS
 - axios
 - Swiper

## Explain
 - 영화 포스터와 장르별 분류 모두 스와이퍼를 사용
 <p align="center">
   <img src="https://user-images.githubusercontent.com/45222982/102621683-43dcd800-4183-11eb-8498-1b890748e938.png" width="800" height="400"/>
</p>

### Source

- 영화 장르별 카테고리 분류 // filter, findIndex
```
          <Swiper
                id="movie-swiper"
                className="movie-swiper"
                slidesPerView={1}
                centeredSlides={true}
                pagination={{ clickable: true }}
                loop={true}
            >
                {genres.map(({ id, genre }) => (
                    <SwiperSlide key={id} className="movie-slide" >
                        <MovieList
                            movieList={
                                id === 1
                                    ? movieList
                                    : movieList.filter(
                                          ({ genres }) =>
                                              genres.findIndex(
                                                  (item) => item === genre
                                              ) !== -1
                                      )
                            }
                        ></MovieList>
                    </SwiperSlide>
                ))}
            </Swiper>
```
- Swiper 기능을 쓰기위해 stylesheet와 use에 등록해야함
```
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectCoverflow } from "swiper";

import "./SwiperView.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow]);
```
