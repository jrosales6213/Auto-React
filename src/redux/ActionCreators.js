import * as ActionTypes from './ActionTypes';

export const addComment = (vehicleId, text, nextServiceDay) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        vehicleId: vehicleId,
        text: text,
        nextServiceDay: nextServiceDay,
    }
});