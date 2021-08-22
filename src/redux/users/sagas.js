import { put, takeLatest, select } from "redux-saga/effects";
import Toast from "react-native-simple-toast";
import { types } from "./types";
import { types as globalTypes } from "../global/types";
import * as service from "./services";
import * as selectors from "../selectors/selectors";
import * as NavigationServices from "../../Services/NavigationServices";

export function* getUser() {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const userId = yield select(selectors.userId);
    const result = yield service.getUser(userId);
    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.GET_USER_SUCCESS, payload: result.data.message });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.GET_USER_FAILURE });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      yield put({ type: types.GET_USER_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.GET_USER_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.GET_USER_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  }
}

export function* updateProfile(action) {
  try {
    const result = yield service.updateProfile(action.userId, action.payload);

    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.UPDATE_PROFILE_SUCCESS,
        payload: result.data.message,
      });
      yield put({ type: types.GET_USER_REQUEST, payload: action.userId });
    } else {
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.UPDATE_PROFILE_FAILURE });
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.UPDATE_PROFILE_FAILURE, payload: errorMessage });
    } else if (error.request) {
      Toast.show(JSON.stringify(error.request), Toast.LONG);
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.UPDATE_PROFILE_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.UPDATE_PROFILE_FAILURE, payload: errorMessage });
    }
  }
}

export function* finishTrip(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.finishTrip(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.FINISH_TRIP_SUCCESS,
        payload: result.data.message,
      });
      yield put({ type: globalTypes.STOP_LOADING });
      NavigationServices.navigateWithParams("TripConfirmation", {
        data: "tripConfirmation",
      });
    } else {
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.FINISH_TRIP_FAILURE });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.FINISH_TRIP_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else if (error.request) {
      Toast.show(JSON.stringify(error.request), Toast.LONG);
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.FINISH_TRIP_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.FINISH_TRIP_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  }
}

export function* myTrips(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.myTrips(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.MY_TRIPS_SUCCESS,
        payload: result.data.message,
      });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.MY_TRIPS_FAILURE });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.MY_TRIPS_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else if (error.request) {
      Toast.show(JSON.stringify(error.request), Toast.LONG);
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.MY_TRIPS_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.MY_TRIPS_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  }
}

export function* deleteTrip(action) {
  try {
    const result = yield service.deleteTrip(action.payload);

    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.DELETE_TRIP_SUCCESS,
        payload: result.data.message,
      });
    } else {
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.DELETE_TRIP_FAILURE });
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.DELETE_TRIP_FAILURE, payload: errorMessage });
    } else if (error.request) {
      Toast.show(JSON.stringify(error.request), Toast.LONG);
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.DELETE_TRIP_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.DELETE_TRIP_FAILURE, payload: errorMessage });
    }
  }
}

export default function* usersWatcher() {
  yield takeLatest(types.GET_USER_REQUEST, getUser);
  yield takeLatest(types.MY_TRIPS_REQUEST, myTrips);
  yield takeLatest(types.FINISH_TRIP_REQUEST, finishTrip);
  yield takeLatest(types.DELETE_TRIP_REQUEST, deleteTrip);
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile);
}
