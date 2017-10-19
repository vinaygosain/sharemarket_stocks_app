import { connect } from 'react-redux';

import getVisibleTiles from '../selectors/getVisibleTiles';
import { search, tilesLoadInit } from '../actions/actions';
import HomeComponent from '../components/home';

const mapStateToProps = (state) => {
    const { tiles, searchFilter } = state;

    return {
        tiles: getVisibleTiles(tiles, searchFilter),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        tilesInit: () => {
            dispatch(tilesLoadInit());
        },

        onSearch: (searchString) => {
            dispatch(search(searchString));
        },
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default HomeContainer;
