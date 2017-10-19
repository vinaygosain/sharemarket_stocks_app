import tiles from '../../src/reducers/tiles.reducer';

describe("tiles reducer actions ", () => {

    it("testing default action", () => {
        const action = { type: "default" }
        const result = tiles(null, action);

        expect(result).toEqual(null);
    });

    it("testing TILES_FETCH_SUCCEEDED action", () => {
        const tilesData = [{ id: 1, description: "this is test tile" }];
        const action = { type: "TILES_FETCH_SUCCEEDED", tilesData };
        const result = tiles([undefined], action);
        expect(result).toEqual(tilesData);
    });

    it("testing TILE_EDIT_SUCCEEDED action", () => {
        const srcTiles = [
            { id: 1, description: "this is test tile1" },
            { id: 2, description: "this is test tile2" },
            { id: 3, description: "this is test tile3" },
            { id: 4, description: "this is test tile4" }
        ];
        const tilesData = { id: 3, description: "this is test tile modified" };

        const resultTiles = [
            { id: 1, description: "this is test tile1" },
            { id: 2, description: "this is test tile2" },
            { id: 3, description: "this is test tile modified" },
            { id: 4, description: "this is test tile4" }
        ];


        const action = { type: "TILE_EDIT_SUCCEEDED", tilesData };
        const result = tiles(srcTiles, action);
        expect(result).toEqual(resultTiles);
    });

});