import { tilesLoadInit, setSelectedTileId, search, editTile, tileEditSucceeded, tilesFetchSucceeded } from '../../src/actions/actions.jsx';

describe("testing actions ", () => {

    it("testing action tilesLoadInit", () => {
        let result = tilesLoadInit();
        expect(result.type).toEqual('TILES_LOAD_INIT');
    })

    it("testing action setSelectedTileId", () => {
        let result = setSelectedTileId();
        expect(result.type).toEqual('SET_SELECTED_TILE_ID');
    });

    it("testing action search", () => {
        let result = search();
        expect(result.type).toEqual('SEARCH');
    });

    it("testing action editTile", () => {
        let result = editTile();
        expect(result.type).toEqual('EDIT_TILE');
    });

    it("testing action tileEditSucceeded", () => {
        let result = tileEditSucceeded();
        expect(result.type).toEqual('TILE_EDIT_SUCCEEDED');
    });

    it("testing action tilesFetchSucceeded", () => {
        let result = tilesFetchSucceeded();
        expect(result.type).toEqual('TILES_FETCH_SUCCEEDED');
    });

});