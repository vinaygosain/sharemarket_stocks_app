import * as actionType from '../actions/action.types';

const loader = (state = false, action) => {
    const { type, loaderState } = action;
    switch (type) {
        case actionType.SET_LOADER_STATE:
            return loaderState;

        default:
            return state;
    }
};

export default loader;
