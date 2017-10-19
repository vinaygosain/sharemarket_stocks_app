import { combineReducers } from 'redux';
import tiles from '../reducers/tiles.reducer';
import searchFilter from '../reducers/searchFilter.reducer';
import loader from '../reducers/loader.reducer';

const combinedReducer = combineReducers({
    loader,
    tiles,
    searchFilter,
});

export default combinedReducer;
