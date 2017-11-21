import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {createStore, applyMiddleware} from 'redux';


import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    allReducers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
