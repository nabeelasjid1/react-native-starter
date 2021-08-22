import { types } from "./types";

let initialState = {
  error: false,
  submit: false,
  user: null,
  token: null,
  userIDRec: null,
  notVerified: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        user: null,
        error: false,
        submit: false,
        notVerified: false,
      };
    }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
        error: false,
        submit: true,
        notVerified: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loginError: action.payload,
        notVerified: action?.notVerified,
        error: true,
        submit: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case types.REGISTRATION_REQUEST: {
      return {
        ...state,
        error: false,
        submit: false,
      };
    }
    case types.REGISTRATION_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.REGISTRATION_FAILURE:
      return {
        ...state,
        error: true,
        submit: true,
      };
    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        userIDRec: null,
        error: false,
        submit: false,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        userIDRec: action.payload,
      };
    case types.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        userIDRec: null,
        error: true,
        submit: false,
      };
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        error: false,
        submit: false,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: true,
        submit: false,
      };
    case types.VERIFY_FORGOT_PASS_REQUEST:
      return {
        ...state,
        error: false,
        submit: false,
      };
    case types.VERIFY_FORGOT_PASS_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.VERIFY_FORGOT_PASS_FAILURE:
      return {
        ...state,
        error: true,
      };
    case types.VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        error: false,
        submit: false,
      };
    case types.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        error: true,
        submit: true,
      };
    default: {
      return state;
    }
  }
};
export default authReducer;
