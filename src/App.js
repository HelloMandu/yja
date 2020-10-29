import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovieList } from './store/movie'

import Loading from './components/Loading'

const App = () => {
  const isLoading = useSelector(state => state.loading.isLoading)
  const movieList = useSelector(state => state.movie.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieList())
  }, [dispatch])

  return (
    <>
      <Loading />
      {!isLoading && console.log(movieList)}
    </>
  )
}

export default App