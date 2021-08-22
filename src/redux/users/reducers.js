import { act } from "react-test-renderer";
import { types } from "./types";

let initialState = {
  error: false,
  submit: false,
  user: null,
  token: null,
  userIDRec: null,
  notVerified: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE_REQUEST: {
      return {
        ...state,
        error: false,
        submit: false,
      };
    }
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        error: true,
        submit: true,
      };
      case types.REMOVE_USER_DATA:
      return {
        ...state,
        user: null,
        token: null,
        userIDRec: null,
        error: true,
        submit: true,
      };
    case types.FINISH_TRIP_REQUEST: {
      return {
        ...state,
        error: false,
        submit: false,
      };
    }
    case types.FINISH_TRIP_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.FINISH_TRIP_FAILURE:
      return {
        ...state,
        error: true,
        submit: true,
      };
    case types.MY_TRIPS_REQUEST: {
      return {
        ...state,
        myTrips: [],
        userId: action.payload,
        error: false,
        submit: false,
      };
    }
    case types.MY_TRIPS_SUCCESS:
      return {
        ...state,
        error: false,
        myTrips: action.payload,
        submit: true,
      };
    case types.MY_TRIPS_FAILURE:
      return {
        ...state,
        error: true,
        myTrips: [],
        submit: true,
      };

    case types.DELETE_TRIP_REQUEST: {
      return {
        ...state,
        error: false,
        submit: false,
      };
    }
    case types.DELETE_TRIP_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.DELETE_TRIP_FAILURE:
      return {
        ...state,
        error: true,
        submit: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default: {
      return state;
    }
  }
};
export default userReducer;
