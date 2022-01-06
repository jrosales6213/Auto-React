import * as ActionTypes from "./ActionTypes";
// import axios from "axios";
import { actionTypes } from "react-redux-form";
import { VEHICLES } from "../shared/vehicles";
import { COMMENTS } from "../shared/comments";
// import { history } from '../App';

const url = "http://localhost:3000";

//---COMMENTS---//

// export const addComment = (vehicleId, text, nextServiceDay) => ({
//   type: ActionTypes.ADD_COMMENT,
//   payload: {
//     vehicleId: vehicleId,
//     text: text,
//     nextServiceDay: nextServiceDay,
//   },
// });

// export const fetchComments = () => dispatch => {
//   return fetch(baseUrl + 'comments')
//       .then(response => {
//               if (response.ok) {
//                   return response;
//               } else {
//                   const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                   error.response = response;
//                   throw error;
//               }
//           },
//           error => {
//               const errMess = new Error(error.message);
//               throw errMess;
//           }
//       )
//       .then(response => response.json())
//       .then(comments => dispatch(addComment(comments)))
//       .catch(error => dispatch(commentsFailed(error.message)));
// };

// export const commentsFailed = errMess => ({
//   type: ActionTypes.COMMENTS_FAILED,
//   payload: errMess
// });
// export const addComments = comments => ({
//   type: ActionTypes.ADD_COMMENTS,
//   payload: comments
// });
// export const addComment = comment => ({
//   type: ActionTypes.ADD_COMMENT,
//   payload: comment
// });

// export const postComment = (campsiteId, rating, author, text) => dispatch => {

//   const newComment = {
//       campsiteId: campsiteId,
//       rating: rating,
//       author: author,
//       text: text
//   };
//   newComment.date = new Date().toISOString();

//   return fetch(baseUrl + 'comments', {
//           method: "POST",
//           body: JSON.stringify(newComment),
//           headers: {
//               "Content-Type": "application/json"
//           }
//       })
//       .then(response => {
//               if (response.ok) {
//                   return response;
//               } else {
//                   const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                   error.response = response;
//                   throw error;
//               }
//           },
//           error => { throw error; }
//       )
//       .then(response => response.json())
//       .then(response => dispatch(addComment(response)))
//       .catch(error => {
//           console.log('post comment', error.message);
//           alert('Your comment could not be posted\nError: ' + error.message);
//       });
// };

///Render Comments ////

export const fetchComments = () => (dispatch) => {
  dispatch(commentsLoading());

  setTimeout(() => {
    dispatch(addComments(COMMENTS));
  }, 2000);
};

export const commentsLoading = () => ({
  type: ActionTypes.COMMENTS_LOADING,
});

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

//POST COMMENTS //
export const postComment = (vehicleId, text, nextServiceDay) => (dispatch) => {
  const newComment = {
    vehicleId,
    text,
    nextServiceDay,
  };

  newComment.date = new Date().toISOString();

  setTimeout(() => {
    dispatch(addComment(newComment));
  }, 2000);
};

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});
export const deleteComment = (vehicleId) => ({
  type: ActionTypes.DELETE_COMMENT,
  payload: vehicleId,
});

//----VEHICLES-----//
export const fetchVehicles = () => (dispatch) => {
  dispatch(vehiclesLoading());

  setTimeout(() => {
    dispatch(addVehicles(VEHICLES));
  }, 2000);
};

export const vehiclesLoading = () => ({
  type: ActionTypes.VEHICLES_LOADING,
});

export const vehiclesFailed = (errMess) => ({
  type: ActionTypes.VEHICLES_FAILED,
  payload: errMess,
});

export const addVehicles = (vehicles) => ({
  type: ActionTypes.ADD_VEHICLES,
  payload: vehicles,
});

// export const addVehicle = (make, model, year, owner) => ({
//   type: ActionTypes.ADD_VEHICLE,
//   payload: {
//     make: make,
//     model: model,
//     year: year,
//     owner: owner,
//   },
// });

// export const deleteComment = (id) => {
//   return {
//     type: ActionTypes.DELETE_COMMENT,
//     payload: {
//       id: id,
//     },
//   };
// };

// export const deleteComment = (id) => {
//   return (dispatch) => {
//     return axios
//       .delete(`${url}/${id}`)
//       .then(() => {
//         dispatch(deleteCommentSuccess(id));
//       })
//       .catch((error) => {
//         dispatch(deleteCommentError(error));
//       });
//   };
// };

// export const deleteCommentSuccess = (id) => {
//   return {
//     type: actionTypes.DELETE_COMMENT,
//     payload: {
//       id: id,
//     },
//   };
// };

// export const deleteCommentError = (error) => {
//   const errorPayload = {
//     message: error.response.data.message,
//     status: error.response.status,
//   };

//   return {
//     type: actionTypes.DELETE_COMMENT_ERROR,
//     payload: errorPayload,
//   };
// };
