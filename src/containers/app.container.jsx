import { connect } from 'react-redux';

import AppComponent from '../components/app';

const mapStateToProps = (state) => {
    return {
        loader: state.loader,
    };
};

const AppContainer = connect(
    mapStateToProps
)(AppComponent);

export default AppContainer;
