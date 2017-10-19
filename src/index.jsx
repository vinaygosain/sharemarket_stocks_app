/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import './styles/styles.css';
import AppContainer from './containers/app.container';
import combinedReducer from './helpers/combinedReducer';
import rootSaga from './sagas/root.saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combinedReducer,
    applyMiddleware(sagaMiddleware)
);

// run custom saga middleware watchers
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
