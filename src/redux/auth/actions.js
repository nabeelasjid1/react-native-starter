import { types} from "./types";

export function loginUser(user) {
  return {
    type: types.LOGIN_REQUEST,
    payload: user,
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILURE,
  };
}

export function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS,
  };
}

export function registerUser(user) {
  return {
    type: types.REGISTRATION_REQUEST,
    payload: user,
  };
}

export function registerFailed(message) {

  return {
    type: types.REGISTRATION_FAILURE,
    payload: message
  };
}

export function registerSuccess() {
  return {
    type: types.REGISTRATION_FAILURE,
  };
}

export function resetPassword(user) {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload: user,
  };
}

export function resetPasswordSuccess(user) {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    payload: user,
  };
}

export function resetPasswordFailed(user) {
  return {
    type: types.RESET_PASSWORD_FAILURE,
    payload: user,
  };
}

export function forgotPassword(email) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    payload: email,
  };
}

export function forgotPasswordSuccess() {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
  };
}

export function forgotPasswordFailed() {
  return {
    type: types.FORGOT_PASSWORD_FAILURE,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function verifyEmail(token) {
  return {
    type: types.VERIFY_EMAIL_REQUEST,
    payload: token,
  };
}

export function verifyEmailSuccess() {
  return {
    type: types.VERIFY_EMAIL_SUCCESS,
  };
}

export function verifyEmailFailed() {
  return {
    type: types.VERIFY_EMAIL_FAILURE,
  };
}

export function verifyForgotPass(token) {
  return {
    type: types.VERIFY_FORGOT_PASS_REQUEST,
    payload: token,
  };
}


