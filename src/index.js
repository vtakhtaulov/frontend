import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


var AppPage = document.getElementById('root')

ReactDOM.render(<App/>,AppPage);
serviceWorker.unregister();
