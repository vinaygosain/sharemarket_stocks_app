import "babel-polyfill";
import Api from '../../src/api';
import { fetchTiles, editTile } from '../../src/sagas/tiles.saga';
import { call, put } from 'redux-saga/effects';
import { tileEditSucceeded, tilesFetchSucceeded, setLoaderState } from '../../src/actions/actions';

describe("testing sagas-->", () => {
    const gen = fetchTiles();
    let result;

    it("testing fetchTiles saga method first yield statement-->", () => {
        result = gen.next(true).value;
        expect(result).toEqual(put(setLoaderState(true)));
    });

    it("testing fetchTiles saga method second yield statement-->", () => {
        result = gen.next().value;
        expect(result).toEqual(call(Api.loadDataFromServer));
    });

    it("testing fetchTiles saga method third yield statement-->", () => {
        result = gen.next({ someDummyObj: 1 }).value
        expect(result).toEqual(put(tilesFetchSucceeded()))
    });

    it("testing fetchTiles saga method fourth yield statement-->", () => {
        result = gen.next(false).value
        expect(result).toEqual(put(setLoaderState(false)));
    });

    const someDummyTile = { tile: 1 }

    const genSecond = editTile(someDummyTile);
    it("testing editTile saga method first yield statement-->", () => {
        result = genSecond.next(true).value
        expect(result).toEqual(put(setLoaderState(true)));
    });

    it("testing editTile saga method second yield statement-->", () => {
        result = genSecond.next().value
        expect(result).toEqual(call(Api.sendDataToServer, someDummyTile.tile));
    });

    it("testing editTile saga method third yield statement-->", () => {
        result = genSecond.next(true).value
        expect(result).toEqual(put(tileEditSucceeded()));
    });

    it("testing editTile saga method first yield statement-->", () => {
        result = genSecond.next(false).value
        expect(result).toEqual(put(setLoaderState(false)));
    });
});