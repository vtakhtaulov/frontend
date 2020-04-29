import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {configureStore} from "./stores/configureStore"
import * as actions from './';

const store = configureStore();
store.dispatch(actions);

const AppPage = document.getElementById('root');
const app =(<Provider store={store}><App/></Provider>);

ReactDOM.render(app,AppPage);
serviceWorker.unregister();
