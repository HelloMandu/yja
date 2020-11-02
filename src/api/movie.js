import { get } from 'axios'

export const getMovie = async (genre) => {
    const URL = `https://yts.mx/api/v2/list_movies.json?limit=50${genre === undefined ? '' : `&genre=${genre}`}`
    const response = await get(URL)
    return response.data.data.movies
}