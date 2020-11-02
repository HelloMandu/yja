import { createAction, handleActions } from 'redux-actions'
import { call, put, takeLatest } from 'redux-saga/effects'

import { getDetail } from '../api/movie'

import { startLoading, finishLoading } from './loading'

const GET_DETAIL = 'movie/GET_DETAIL'
const GET_DETAIL_SUCCESS = 'movie/GET_DETAIL_SUCCESS'
const GET_DETAIL_FAILURE = 'movie/GET_DETAIL_FAILURE'

export const getMovieDetail = createAction(GET_DETAIL)

export function* getDetailSaga(action) {
    yield put(startLoading())
    try {
        const DETAIL = yield call(getDetail, action.payload)
        yield put({
            type: GET_DETAIL_SUCCESS,
            payload: DETAIL
        })
    }
    catch (e) {
        yield put({
            type: GET_DETAIL_FAILURE,
            error: e
        })
    }
    yield put(finishLoading())
}

export function* detailSaga() {
    yield takeLatest(GET_DETAIL, getDetailSaga)
}

const initialState = {
    detail: {},
    error: false
}

const detail = handleActions(
    {
        [GET_DETAIL_SUCCESS]: (state, action) => ({
            ...state,
            detail: action.payload
        }),
        [GET_DETAIL_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload
        })
    },
    initialState
)

export default detail