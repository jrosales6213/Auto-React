import * as ActionTypes from './ActionTypes';

export const addComment = (text, author , date) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        text: text,
        author: author,
        date: date
        
    }
});