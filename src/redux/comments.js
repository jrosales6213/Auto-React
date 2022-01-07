import { actionTypes } from "react-redux-form";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import * as ActionTypes from "./ActionTypes";

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };
    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };
    case ActionTypes.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    case ActionTypes.EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map((r) => {
          if (r.id === action.payload) {
            return action.payload;
          }
          return r;
        }),
      };
    default:
      return state;
  }
};
