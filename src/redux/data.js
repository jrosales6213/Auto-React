import * as ActionTypes from "./ActionTypes";

export const Data = (
  state = {
    isLoading: true,
    errMess: null,
    data: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_APIS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        vehicles: action.payload,
      };
    case ActionTypes.API_LOADING:
      return { ...state, isLoading: true, errMess: null, data: [] };
    case ActionTypes.API_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
