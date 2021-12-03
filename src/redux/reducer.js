import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../shared/comments";

const initialState = [];

const addCommentReducer = createSlice({
  name: "comment",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addComments: (state = COMMENTS, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeComment: (state = COMMENTS, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateComment: (state = COMMENTS, action) => {
      return state.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            item: action.payload.item,
          };
        }
        return comment;
      });
    },
  }
});

export const {
  addComments,
  removeComment,
  updateComment,
} = addCommentReducer.actions;

export const reducer = addCommentReducer.reducer;