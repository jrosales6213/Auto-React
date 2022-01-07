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

// return {
//   ...state,
//   [params.vehicleId]: state[params.vehicleId].map((r) => {
//     if (r.id === params.recordId) {
//       return action.body
//     }
//     return r
//   })
// }

// case "EDIT_TODO":
//   return {
//     ...state,
//     text: state.todos[action.payload],
//     selected: action.payload
//   };
// case "EDIT_ADD_TODO":
//   const todo4 = state.todos.map((todo, i) =>
//     i !== action.payload.selected ? todo : action.payload.value
//   );
//   setPersist(todo4);
//   return {
//     ...state,
//     todos: todo4,
//     selected: undefined,
//     text: ""
//   };
