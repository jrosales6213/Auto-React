import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import { actionTypes } from "react-redux-form";
// import { history } from '../App';

const url = "http://localhost:3000";

//---COMMENTS---//

export const addComment = (vehicleId, text, nextServiceDay) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    vehicleId: vehicleId,
    text: text,
    nextServiceDay: nextServiceDay,
  },
});

//----VEHICLES-----//
export const addVehicle = (make, model, year, owner) => ({
  type: ActionTypes.ADD_VEHICLE,
  payload: {
    make: make,
    model: model,
    year: year,
    owner: owner,
  },
});

// export const deleteComment = (id) => {
//   return {
//     type: ActionTypes.DELETE_COMMENT,
//     payload: {
//       id: id,
//     },
//   };
// };

export const deleteComment = (id) => {
  return (dispatch) => {
    return axios
      .delete(`${url}/${id}`)
      .then(() => {
        dispatch(deleteCommentSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteCommentError(error));
      });
  };
};

export const deleteCommentSuccess = (id) => {
  return {
    type: actionTypes.DELETE_COMMENT,
    payload: {
      id: id,
    },
  };
};

export const deleteCommentError = (error) => {
  const errorPayload = {
    message: error.response.data.message,
    status: error.response.status,
  };

  return {
    type: actionTypes.DELETE_COMMENT_ERROR,
    payload: errorPayload,
  };
};
