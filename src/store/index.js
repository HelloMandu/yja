import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import movie, { movieSaga } from './movie'
import detail, { detailSaga } from './detail'
import loading from './loading'

const rootReducer = combineReducers({
    movie,
    detail,
    loading
})

export function* rootSaga() {
    yield all([movieSaga(), detailSaga()])
}

export default rootReducer