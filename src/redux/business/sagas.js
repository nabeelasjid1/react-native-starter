import { put, takeLatest } from "redux-saga/effects";
import Toast from "react-native-simple-toast";
import { types } from "./types";
import { types as globalTypes } from "../global/types";
import { types as userTypes } from "../users/types";
import * as service from "./services";
import * as NavigationServices from "../../Services/NavigationServices";
function* getSingleBusiness(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.getSingleBusiness(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.SINGLE_BUSINESS_SUCCESS,
        payload: result.data.message,
      });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      yield put({
        type: types.SINGLE_BUSINESS_FAILURE,
        payload: result.message.data.message,
      });
      Toast.show("Unable to Get business details", Toast.LONG);
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show("Unable to Get business details", Toast.LONG);
      yield put({ type: types.SINGLE_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SINGLE_BUSINESS_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SINGLE_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}
function* saveBusinessRating(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.saveRating(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.SAVE_RATING_SUCCESS,
        payload: result.data.message,
      });
      yield put({ type: types.UPDATE_BUSINESS_REQUEST });
      yield put({
        type: userTypes.GET_USER_REQUEST,
        payload: action.payload.userId,
      });
      yield put({ type: globalTypes.STOP_LOADING });
      const { saveRating } = action.payload;
      if (saveRating)
        NavigationServices.navigateWithParams("ReviewConfirmation", {
          data: "showDetail",
        });
      else
        NavigationServices.navigateWithParams("ReviewConfirmation", {
          data: "editDetail",
        });
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      yield put({
        type: types.SAVE_RATING_FAILURE,
        payload: result.message.data.message,
      });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_RATING_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_RATING_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_RATING_FAILURE, payload: errorMessage });
    }
  }
}
function* saveBusinessFeedback(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.saveFeedback(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.SAVE_FEEDBACK_SUCCESS,
        payload: result.data.message,
      });
      yield put({
        type: userTypes.GET_USER_REQUEST,
        payload: action.payload.userId,
      });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show("Your feedback submitted successfully.", Toast.LONG);
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      yield put({
        type: types.SAVE_FEEDBACK_FAILURE,
        payload: result.message.data.message,
      });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_FEEDBACK_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_FEEDBACK_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_FEEDBACK_FAILURE, payload: errorMessage });
    }
  }
}
function* verifyBusinessRequest(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.verifyBusiness(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.VERIFY_PHONE_SUCCESS,
        payload: result.data.message,
      });
      Toast.show(result.data.message.toString(), Toast.LONG);
      const { userId, businessId, phone } = action.payload;
      yield put({ type: globalTypes.STOP_LOADING });
      NavigationServices.navigateWithParams("ClaimVerify", {
        data: { userId, businessId, phone },
      });
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      yield put({
        type: types.VERIFY_PHONE_FAILURE,
        payload: result.message.data.message,
      });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show("Invalid Code", Toast.LONG);
      yield put({ type: types.VERIFY_PHONE_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.VERIFY_PHONE_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.VERIFY_PHONE_FAILURE, payload: errorMessage });
    }
  }
}
function* claimBusinessRequest(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.claimBusiness(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.CLAIM_BUSINESS_SUCCESS,
        payload: result.data.message,
      });
      yield put({
        type: userTypes.GET_USER_REQUEST,
        payload: action.payload.userId,
      });
      yield put({ type: globalTypes.STOP_LOADING });
      NavigationServices.navigate("BusinessConfirmation");
    } else {
      yield put({ type: globalTypes.STOP_LOADING });
      yield put({
        type: types.CLAIM_BUSINESS_FAILURE,
        payload: result.message.data.message,
      });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: globalTypes.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.CLAIM_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.CLAIM_BUSINESS_FAILURE, payload: errorMessage });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.CLAIM_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}
export function* updateOwnerBusiness(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.updateOwnerBusiness(
      action.businessId,
      action.payLoad
    );
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.UPDATE_OWNERBUSINESS_SUCCESS,
        payload: result.data.message,
      });
      yield put({ type: userTypes.GET_USER_REQUEST });
      yield put({ type: globalTypes.STOP_LOADING });
      Toast.show("Successfully updated business.", Toast.LONG);
      NavigationServices.goBack();
    } else {
      Toast.show(result.data.message.toString(), Toast.LONG);
      yield put({ type: types.UPDATE_OWNERBUSINESS_FAILURE });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({
        type: types.UPDATE_OWNERBUSINESS_FAILURE,
        payload: errorMessage,
      });
      yield put({ type: globalTypes.STOP_LOADING });
    } else if (error.request) {
      Toast.show(JSON.stringify(error.request), Toast.LONG);
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({
        type: types.UPDATE_OWNERBUSINESS_FAILURE,
        payload: errorMessage,
      });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({
        type: types.UPDATE_OWNERBUSINESS_FAILURE,
        payload: errorMessage,
      });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  }
}

function* searchBusinesses(action) {
  try {
    yield put({ type: globalTypes.START_LOADING });
    const result = yield service.searchBusinesses(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({
        type: types.SEARCH_BUSINESS_SUCCESS,
        payload: result.data,
      });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      yield put({ type: types.SEARCH_BUSINESS_FAILURE });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      yield put({ type: types.SEARCH_BUSINESS_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      yield put({ type: types.SEARCH_BUSINESS_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    } else {
      const errorMessage = "There was some error.";
      yield put({ type: types.SEARCH_BUSINESS_FAILURE, payload: errorMessage });
      yield put({ type: globalTypes.STOP_LOADING });
    }
  }
}

export default function* businessWatcher() {
  yield takeLatest(types.SAVE_RATING_REQUEST, saveBusinessRating);
  yield takeLatest(types.SAVE_FEEDBACK_REQUEST, saveBusinessFeedback);

  yield takeLatest(types.VERIFY_PHONE_REQUEST, verifyBusinessRequest);
  yield takeLatest(types.CLAIM_BUSINESS_REQUEST, claimBusinessRequest);
  yield takeLatest(types.SEARCH_BUSINESS_REQUEST, searchBusinesses);

  yield takeLatest(types.SINGLE_BUSINESS_REQUEST, getSingleBusiness);
  yield takeLatest(types.UPDATE_OWNERBUSINESS_REQUEST, updateOwnerBusiness);
}
