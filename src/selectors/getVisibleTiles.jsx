import { createSelector } from 'reselect';
import _ from 'lodash';

const getTiles = (tiles) => tiles;
const getSearchFilter = (tiles, searchString) => searchString;

const getVisibleTiles = createSelector(
    [getTiles, getSearchFilter],
    (tiles, searchString) => {
        let searchResults;
        if (searchString) {
            searchResults = _.filter(tiles, ({ name }) => {
                name = name.toLowerCase();
                searchString = searchString.toLowerCase();
                if (name.indexOf(searchString) !== -1) {
                    return true;
                }
                return false;
            });
        } else if (searchString === '') {
            searchResults = tiles;
        } else {
            searchResults = [];
        }
        return searchResults;
    }
);

export default getVisibleTiles;
