import * as actionType from '../actions/action.types';
import _ from 'lodash';

import tile from './tile.reducer';

const tiles = (state = [], action) => {
    const { type, tilesData } = action;
    switch (type) {

        case actionType.TILES_FETCH_SUCCEEDED:
            return [
                ...tilesData,
            ];

        case actionType.TILE_EDIT_SUCCEEDED:
            return _.map(state, (t) => tile(t, action));

        default:
            return state;
    }
};

export default tiles;
