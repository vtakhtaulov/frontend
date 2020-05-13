import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import root_reduser from "../redusers/RootReduser";
import {logger} from "redux-logger";


let saver = store => next => action => {
    let result=next(action);
    localStorage['RootStore'] = JSON.stringify(store.getState());
    return result
}

//const lastStorage = store => localStorage['RootStore'] = JSON.stringify(store.getState());
let middleware = applyMiddleware(logger, thunk, saver);
let container = JSON.parse(localStorage['RootStore']);


let configStor  = composeWithDevTools(middleware)(createStore)
            (root_reduser,
                container
            );

export default configStor;