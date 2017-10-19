import * as actionType from '../actions/action.types';

const tile = (state, action) => {
    const { type, tilesData } = action;
    switch (type) {
        case actionType.TILE_EDIT_SUCCEEDED:
            if (state.id !== tilesData.id) {
                return state;
            }

            return {
                ...tilesData,
            };

        default:
            return state;
    }
};

export default tile;
