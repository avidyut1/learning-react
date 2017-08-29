import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducer from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducer);

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
