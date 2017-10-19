import selectedTileId from '../../src/reducers/selectedTileId.reducer';

describe("selectedTileId reducer actions ", () => {

    it("testing default action", () => {
        const action = { type: "default" }
        const result = selectedTileId('', action);

        expect(result).toEqual('');
    });

    it("testing default action", () => {
        const action = { type: "SET_SELECTED_TILE_ID", selectedTileId: 2 }
        const result = selectedTileId('', action);

        expect(result).toEqual(2);
    });

});