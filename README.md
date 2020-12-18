<h1 align="center">Prevention Of IllegalParking</h1>

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
   <img src="https://user-images.githubusercontent.com/45222982/102355671-8a013280-3fef-11eb-9e55-4cd3b65e8a29.png" width="800" height="300"/>
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
