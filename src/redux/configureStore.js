import {createStore, combineReducers} from 'redux';
import { Vehicles } from './campsites';
import { Comments } from './comments';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            vehicles: Vehicles,
            comments: Comments,
       
        })
    );

    return store;
};