import { get } from 'axios'

export const getMovie = async () => {
    const URL = 'https://yts.mx/api/v2/list_movies.json'
    const response = await get(URL)
    console.log(response)
    return response.data.data.movies
}