import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import loader from '../../assets/loader.gif';
import HeaderComponent from './header';
import FooterComponent from './footer';
import HomeContainer from '../containers/home.container';
import DetailsContainer from '../containers/details.container';

const AppComponent = (props) => (

    <div>
        <Router>
            <div>
                <HeaderComponent />
                {props.loader ?
                    (
                        <div className="center"> <img className="loader-gif" src={loader} /></div>
                    ) :
                    (
                        <Switch>
                            <Route path="/home" component={HomeContainer} />
                            <Route path="/details/:id" component={DetailsContainer} />
                            <Redirect path="/" to="/home" />
                        </Switch>
                    )
                }
            </div>
        </Router>
        <FooterComponent />
    </div>
);

AppComponent.propTypes = {
    loader: PropTypes.bool.isRequired,
};

export default AppComponent;
