import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducer';
import './index.css';
import 'tachyons';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { robots } from './robots';

const store = createStore(searchRobots);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
