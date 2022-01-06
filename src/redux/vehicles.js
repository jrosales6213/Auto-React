// import { VEHICLES } from "../shared/vehicles";
// import * as ActionTypes from "./ActionTypes";

// export const Vehicles = (state = VEHICLES, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_VEHICLE:
//       const vehicle = action.payload;
//       vehicle.id = state.length;
//       vehicle.date = new Date().toLocaleDateString();
//       return state.concat(vehicle);
//     default:
//       return state;
//   }
// };

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
    case ActionTypes.VEHICLES_LOADING:
      return { ...state, isLoading: true, errMess: null, vehicles: [] };
    case ActionTypes.VEHICLES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
