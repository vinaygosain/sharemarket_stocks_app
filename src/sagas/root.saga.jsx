import tilesSaga from './tiles.saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        tilesSaga(),

        // we can add more sagas and combine them into one.
    ]);
}
