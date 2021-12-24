import { VEHICLES } from "../shared/vehicles";
import * as ActionTypes from "./ActionTypes";

export const Vehicles = (state = VEHICLES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_VEHICLE:
      const vehicle = action.payload;
      vehicle.id = state.length;
      // vehicle.date = new Date().toLocaleDateString();
      return state.concat(vehicle);
    default:
      return state;
  }
};
