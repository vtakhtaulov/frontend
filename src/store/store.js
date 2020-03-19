import { createStore, applyMiddleware } from "redux";
import login from '../reducers/daaLoginsReduser';
import thunk from 'redux-thunk';
 
export default () => {
    return createStore(login, applyMiddleware(thunk));
};