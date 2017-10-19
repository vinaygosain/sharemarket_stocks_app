import Api from '../api';
import * as actionType from '../actions/action.types';
import { tileEditSucceeded, tilesFetchSucceeded, setLoaderState } from '../actions/actions';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* fetchTiles() {
    try {
        yield put(setLoaderState(true));
        const { data } = yield call(Api.loadDataFromServer);
        yield put(tilesFetchSucceeded(data));
        yield put(setLoaderState(false));
    } catch (e) {

        // TODO HANDLE ERROR CONDITION ACCORDINGLY
    }
}

export function* editTile({ tile }) {
    try {
        yield put(setLoaderState(true));
        const { data } = yield call(Api.sendDataToServer, tile);
        yield put(tileEditSucceeded(data));
        yield put(setLoaderState(false));
    } catch (e) {

        // TODO HANDLE ERROR CONDITION ACCORDINGLY
    }
}

function* tilesSaga() {
    yield takeEvery(actionType.TILES_LOAD_INIT, fetchTiles);
    yield takeEvery(actionType.EDIT_TILE, editTile);
}

export default tilesSaga;
