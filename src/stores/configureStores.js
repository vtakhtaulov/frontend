import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../redusers/RootReduser';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState,composeWithDevTools(applyMiddleware(thunk)));
}