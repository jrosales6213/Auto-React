import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toLocaleDateString();
      return state.concat(comment);
    case ActionTypes.DELETE_COMMENT:
      return state.filter((comment) => comment !== action.payload);
    default:
      return state;
  }
};
