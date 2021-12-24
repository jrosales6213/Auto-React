import * as ActionTypes from "./ActionTypes";

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
