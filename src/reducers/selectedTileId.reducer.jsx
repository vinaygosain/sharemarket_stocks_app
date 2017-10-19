import * as actionType from '../actions/action.types';

const selectedTileId = (state = null, action) => {
    const { type } = action;
    switch (type) {
        case actionType.SET_SELECTED_TILE_ID:
            return action.selectedTileId;

        default:
            return state;
    }
};

export default selectedTileId;
