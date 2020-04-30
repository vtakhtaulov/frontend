import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReduser from "../redusers/RootReduser";
import {logger} from "redux-logger";

const saver = store => next => action => {
    let result=next(action);
    localStorage['RootStore'] = JSON.stringify(store.getState());
    return result
}

const configStor  = composeWithDevTools(applyMiddleware(logger, thunk, saver))(createStore)
            (rootReduser,
             JSON.parse(localStorage['RootStore']));

export default configStor;