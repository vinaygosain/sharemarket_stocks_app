import * as actionType from '../actions/action.types';

const searchFilter = (state = '', action) => {
    const { type, searchString } = action;

    switch (type) {
        case actionType.SEARCH:
            return searchString;

        default:
            return state;
    }
};

export default searchFilter;
