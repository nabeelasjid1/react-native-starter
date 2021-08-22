import { put, takeLatest, select } from "redux-saga/effects";
import Toast from "react-native-simple-toast";
import * as NavigationService from "../../Services/NavigationServices";
import { types } from "./types";
import { types as globalTypes } from "../global/types";
import * as service from "./services";
import { Platform } from "react-native";
import {
  subscribe,
  setSubscriptions,
} from "../../Services/PushNotificationService";

function* loginUser(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });

    const result = yield service.login(action.payload);
    if (result.status === 200) {
      if (result.data.message.user.isDeleted) {
        Toast.show(
          "You have been blocked due to violation of our term and conditions. Please contact us our support team at admin@eushare.app",
          Toast.LONG
        );
        yield put({
          type: types.LOGIN_FAILURE,
          payload:
            "You have been blocked due to violation of our term and conditions. Please contact us our support team at admin@eushare.app",
        });
        yield put({ type: globalTypes.STOP_LOADING });
      } else {
        yield put({ type: types.LOGIN_SUCCESS, payload: result.data.message });
        yield put({ type: globalTypes.STOP_LOADING });

        if (Platform.OS === "ios") {
          setSubscriptions([`debug-eushare-${result.data.message.user.id}`]);
        } else {
          subscribe(`debug-eushare-${result.data.message.user.id}`);
        }
        NavigationService.navigate("Home");
      }
    } else {
      yield put({
        type: types.LOGIN_FAILURE,
        payload: result.message.data.message,
      });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });

    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      if (error.response.data.notVerified) {
        yield put({
          type: types.LOGIN_FAILURE,
          payload: errorMessage,
          notVerified: error.response.data.notVerified,
        });
        NavigationService.navigate("Verification");
      }
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.LOGIN_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.LOGIN_FAILURE, payload: errorMessage });
    }
  }
}
function* registerUser(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.register(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.REGISTRATION_SUCCESS });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      NavigationService.navigate("Verification");
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({
        type: types.REGISTRATION_FAILURE,
        payload: result.message.data.message,
      });
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      if (errorMessage.substring(0, 6) == "E11000") {
        Toast.show("This phone number is already used.", Toast.LONG);
      } else Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.REGISTRATION_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.REGISTRATION_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.REGISTRATION_FAILURE, payload: errorMessage });
    }
  }
}
function* resetPassword(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.reset(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.RESET_PASSWORD_SUCCESS, payload: result });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      NavigationService.navigate("login");
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.RESET_PASSWORD_FAILURE, payload: result });
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.RESET_PASSWORD_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.RESET_PASSWORD_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.RESET_PASSWORD_FAILURE, payload: errorMessage });
    }
  }
}
function* forgotPassword(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.forgot(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: result.data.id,
      });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      NavigationService.navigate("ForgotVerification");
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.FORGOT_PASSWORD_FAILURE });
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.FORGOT_PASSWORD_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.FORGOT_PASSWORD_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.FORGOT_PASSWORD_FAILURE, payload: errorMessage });
    }
  }
}

function* verifyForgotPass(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.verifyForgotPass(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.VERIFY_FORGOT_PASS_SUCCESS });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.VERIFY_FORGOT_PASS_FAILURE });
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show("Invalid Code", Toast.LONG);
      yield put({
        type: types.VERIFY_FORGOT_PASS_FAILURE,
        payload: errorMessage,
      });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({
        type: types.VERIFY_FORGOT_PASS_FAILURE,
        payload: errorMessage,
      });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({
        type: types.VERIFY_FORGOT_PASS_FAILURE,
        payload: errorMessage,
      });
    }
  }
}

function* verifyEmail(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.verifyEmail(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.VERIFY_EMAIL_SUCCESS });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      NavigationService.navigate("login");
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.VERIFY_EMAIL_FAILURE });
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show("Invalid Code", Toast.LONG);
      yield put({ type: types.VERIFY_EMAIL_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.VERIFY_EMAIL_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.VERIFY_EMAIL_FAILURE, payload: errorMessage });
    }
  }
}

export default function* usersWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginUser);
  yield takeLatest(types.REGISTRATION_REQUEST, registerUser);
  yield takeLatest(types.VERIFY_EMAIL_REQUEST, verifyEmail);
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPassword);
  yield takeLatest(types.VERIFY_FORGOT_PASS_REQUEST, verifyForgotPass);
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPassword);
}
