import { connect } from 'react-redux';

import { tilesLoadInit, editTile } from '../actions/actions';
import DetailsComponent from '../components/details';

const mapDispatchToProps = (dispatch) => {
    return {

        handleEditTile: (id, tile) => {
            dispatch(editTile(tile));
        },

        tilesInit: () => {
            dispatch(tilesLoadInit());
        },
    };
};

const mapStateToProps = (state) => {
    const { tiles } = state;

    return {
        tiles,
    };
};

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);
export default DetailsContainer;

