import * as ActionTypes from "./ActionTypes";
// import axios from "axios";
import { baseUrl } from "../shared/baseUrl";

//----VEHICLES-----//

export const fetchVehicles = () => (dispatch) => {
  dispatch(vehiclesLoading());

  return fetch(baseUrl + "vehicles")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )

    .then((response) => response.json())
    .then((vehicles) => dispatch(addVehicles(vehicles)))
    .catch((error) => dispatch(vehiclesFailed(error.message)));
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
export const addVehicle = (vehicle) => ({
  type: ActionTypes.ADD_VEHICLE,
  payload: vehicle,
});

export const postNewVehicle = (make, model, year, owner) => (dispatch) => {
  const newVehicle = {
    make: make,
    model: model,
    year: year,
    owner: owner,
  };
  newVehicle.date = new Date().toISOString();

  return fetch(baseUrl + "vehicles", {
    method: "POST",
    body: JSON.stringify(newVehicle),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addVehicle(response)))
    .catch((error) => {
      console.log("post comment", error.message);
      alert("Your vehicle could not be posted\nError: " + error.message);
    });
};

////////----COMMENTS----///

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComment(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};
export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment =
  (vehicleId, date, text, nextServiceDay) => (dispatch) => {
    const newComment = {
      vehicleId: vehicleId,
      date: date,
      text: text,
      nextServiceDay: nextServiceDay,
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + "comments", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addComment(response)))
      .catch((error) => {
        console.log("post comment", error.message);
        alert("Your comment could not be posted\nError: " + error.message);
      });
  };
export const deleteComment = (vehicleId) => ({
  type: ActionTypes.DELETE_COMMENT,
  payload: vehicleId,
});
export const editComment = (vehicleId) => ({
  type: ActionTypes.EDIT_COMMENT,
  payload: vehicleId,
});
