import {createStore, combineReducers} from 'redux';
import {Vehicles} from './vehicles'
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