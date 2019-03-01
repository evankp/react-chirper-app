import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as Redux from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const store = Redux.createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))