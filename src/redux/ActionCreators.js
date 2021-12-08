import { actionTypes } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';

export const addComment = (vehicleId, text, nextServiceDay) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        vehicleId: vehicleId,
        text: text,
        nextServiceDay: nextServiceDay,
    }
});
// export const deleteComment = (vehicleId) => ({
//     type: ActionTypes.DELETE_COMMENT,
//     payload: {
//         vehicleId: vehicleId,
//     }
// });

export const deleteComment = id => ({
    type: ActionTypes.DELETE_COMMENT,
    payload: {
        id: id 
    }
}); 
// export const deleteFavorite = campsiteId => ({
//     type: ActionTypes.DELETE_FAVORITE,
//     payload: campsiteId
// }); 
