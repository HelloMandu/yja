import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovieList } from './store/movie'

const App = () => {
  const movieList = useSelector(state => state.movie.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieList())
  }, [dispatch])

  return (
    <>
      {console.log(movieList)}
    </>
  )
}

export default App