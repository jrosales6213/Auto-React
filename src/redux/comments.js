;import { actionTypes } from 'react-redux-form';
import { COMMENTS } from '../shared/comments';
import * from './ActionTypes';


export default Comments =  (state = COMMENTS, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toLocaleDateString();
            return state.concat(comment);
            break;
    case actionTypes.DELETE_COMMENT:
           return state.filter(comment => comment !== action.payload);    
            break;
      case actionTypes.EDIT_COMMENT:
           console.log(EDIT_COMMENT) 
            break; 
          default:
              return state;
  }
}