import { createSlice } from "@reduxjs/toolkit";
import { VEHICLES } from "../shared/vehicles";

const initialState = [];

const autoReducer = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    
    renderVehicle: (state = VEHICLES, action) => {
      return state;
     }
    } 
   }
)
   

export const {
  renderVehicle
} = autoReducer.actions;

export const vehicleReducer = autoReducer.reducer;