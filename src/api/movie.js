import { get } from 'axios'

export const getMovie = async () => {
    const URL = 'https://yts.mx/api/v2/list_movies.json'
    const response = await get(URL)
    return response.data.data.movies
}