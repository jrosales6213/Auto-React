// import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

// export const Comments = (state = COMMENTS, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_COMMENT:
//       const comment = action.payload;
//       comment.id = state.length;
//       // comment.date = new Date().toLocaleDateString();
//       return state.concat(comment);
//     // case ActionTypes.ADD_COMMENT:
//     //   if (state.includes(action.payload)) {
//     //     return state;
//     //   }
//     // return state.concat(action.payload);
//     case ActionTypes.DELETE_COMMENT:
//       return state.filter((comment) => comment !== action.payload);
//     default:
//       return state;
//   }
// };

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state;
  }
};
