import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { vehicleReducer } from "./vehicleReducer";

const store = configureStore({
  reducer: reducer,
  vehicleReducer : vehicleReducer

});

export default store;