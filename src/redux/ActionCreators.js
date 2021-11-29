import * as ActionTypes from './ActionTypes';

export const addComment = (vehicleId, text, author) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        vehicleId: vehicleId,
        text: text,
        author: author,
    }
});