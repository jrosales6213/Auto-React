import { VEHICLES } from '../shared/vehicles'
import { COMMENTS } from '../shared/comments';


export const initialState = {
    vehicles: VEHICLES,
    comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};