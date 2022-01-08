import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Vehicles } from "./vehicles";
import { Comments } from "./comments";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";
import { Data } from "./data";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      vehicles: Vehicles,
      comments: Comments,
      data: Data,

      ...createForms({
        feedbackForm: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
