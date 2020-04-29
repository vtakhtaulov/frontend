import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReduser from './reducers/RootReduser.js';

const store = createStore(rootReduser,
    composeWithDevTools(applyMiddleware(thunk)));

const AppPage = document.getElementById('root');
const app =(<Provider store={store}><App/></Provider>);

ReactDOM.render(app,AppPage);
serviceWorker.unregister();
