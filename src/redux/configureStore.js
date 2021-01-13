import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Campsites, CAMPSITES} from './campsites';
import {Comments, COMMENTS} from './comments';
import {Partners, PARTNERS} from './partners';
import {Promotions, PROMOTIONS} from './promotions';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};