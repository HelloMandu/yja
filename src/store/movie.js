import { createAction, handleActions } from 'redux-actions'
import { call, put, takeLatest } from 'redux-saga/effects'

import { getMovie } from '../api/movie'

import { startLoading, finishLoading } from './loading'

const GET_MOVIE_LIST = 'movie/GET_MOVIE_LIST'
const GET_MOVIE_SUCCESS = 'movie/GET_MOVIE_SUCCESS'
const GET_MOVIE_FAILURE = 'movie/GET_MOVIE_FAILURE'

export const getMovieList = createAction(GET_MOVIE_LIST)

export function* getMovieSaga() {
    yield put(startLoading())

    try {
        const MOVIE_LIST = yield call(getMovie)
        yield put({
            type: GET_MOVIE_SUCCESS,
            payload: MOVIE_LIST
        })
    }
    catch (e) {
        yield put({
            type: GET_MOVIE_FAILURE,
            error: e
        })
    }

    yield put(finishLoading())
}

export function* movieSaga() {
    yield takeLatest(GET_MOVIE_LIST, getMovieSaga)
}

const initialState = {
    list: {},
    error: false
}

const movie = handleActions(
    {
        [GET_MOVIE_SUCCESS]: (state, action) => ({
            ...state,
            list: action.payload
        }),
        [GET_MOVIE_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload
        })
    },
    initialState
)

export default movie