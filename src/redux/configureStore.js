import { createStore, combineReducers } from 'redux';
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
        })
    );

    return store;
};