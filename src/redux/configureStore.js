import { createStore, combineReducers, applyMiddleware } from "redux";
import { Vehicles } from "./vehicles";
import { Comments } from "./comments";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      vehicles: Vehicles,
      comments: Comments,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
