import * as actionType from './action.types';

const tilesLoadInit = () => {
    return { type: actionType.TILES_LOAD_INIT };
};

const setSelectedTileId = (id) => {
    return { type: actionType.SET_SELECTED_TILE_ID, selectedTileId: id };
};

const search = (searchString) => {
    return { type: actionType.SEARCH, searchString };
};

const editTile = (tile) => {
    return { type: actionType.EDIT_TILE, tile };
};

const tileEditSucceeded = (data) => {
    return { type: actionType.TILE_EDIT_SUCCEEDED, tilesData: data };
};

const tilesFetchSucceeded = (data) => {
    return { type: actionType.TILES_FETCH_SUCCEEDED, tilesData: data };
};

const setLoaderState = (loaderState) => {
    return { type: actionType.SET_LOADER_STATE, loaderState };
};

export {
    tilesLoadInit,
    setSelectedTileId,
    search,
    editTile,
    setLoaderState,
    tileEditSucceeded,
    tilesFetchSucceeded,
};
