import * as ActionTypes from "./ActionTypes";

export const Vehicles = (
  state = {
    isLoading: true,
    errMess: null,
    vehicles: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_VEHICLES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        vehicles: action.payload,
      };
    case ActionTypes.ADD_VEHICLE:
      const vehicle = action.payload;
      return { ...state, vehicles: state.vehicles.concat(vehicle) };
    case ActionTypes.VEHICLES_LOADING:
      return { ...state, isLoading: true, errMess: null, vehicles: [] };
    case ActionTypes.VEHICLES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
