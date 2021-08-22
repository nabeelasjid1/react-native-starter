
import { put, takeLatest, select } from "redux-saga/effects";

import Toast from 'react-native-simple-toast';

import { types } from "./types";
import * as service from "./service";
import * as selectors from './selectors';
import { verifyBusiness } from "./actions";


function* getBusinessList() {
  try {

    const page = 1
    const result = yield service.getList(page);


    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.UPDATE_BUSINESS_SUCCESS, payload: result.data.message });
      yield put({ type: "INCREMENT_PAGE" })
  
    } else {

      yield put({ type: types.UPDATE_BUSINESS_FAILURE, payload: result.message.data.message });

    }
  } catch (error) {
    console.log("error", error)

    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.UPDATE_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.UPDATE_BUSINESS_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.UPDATE_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}

function* getMoreBusinessList(action) {
  try {

    const result = yield service.getList(action.page);

    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.LOAD_BUSINESS_SUCCESS, payload: result.data.message });
      yield put({ type: "INCREMENT_PAGE" })
      // yield put({ type: types.STOP_LOADING });
    } else {
      yield put({ type: types.LOAD_BUSINESS_FAILURE, payload: result.message.data.message });
      // Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    console.log("error is ", error)
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.LOAD_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.LOAD_BUSINESS_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.LOAD_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}

function* searchBusinessList(action) {

  try {
    yield put({ type: types.START_LOADING });

    const result = yield service.searchList(action.payload);

    if (result.status === 200 || result.status === 201) {
 
      yield put({ type: types.SEARCH_BUSINESS_SUCCESS, payload: result.data.message });
      yield put({ type: types.STOP_LOADING });
    } else {
      yield put({ type: types.STOP_LOADING });
      yield put({ type: types.SEARCH_BUSINESS_FAILURE, payload: result.message.data.message });
      
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SEARCH_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SEARCH_BUSINESS_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SEARCH_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}


function* getSingleBusiness(action) {
 
  try {
    yield put({ type: types.START_LOADING });

    const result = yield service.getSingleBusiness(action.payload);

    if (result.status === 200 || result.status === 201) {

      yield put({ type: types.SINGLE_BUSINESS_SUCCESS, payload: result.data.message });
      yield put({ type: types.STOP_LOADING });
    } else {
      yield put({ type: types.STOP_LOADING });
      yield put({ type: types.SINGLE_BUSINESS_FAILURE, payload: result.message.data.message });
   
      Toast.show("Unable to Get business details", Toast.LONG);
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
  
      Toast.show("Unable to Get business details", Toast.LONG);

      yield put({ type: types.SINGLE_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SINGLE_BUSINESS_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SINGLE_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}


function* searchFieldBusinessList(action) {
  
  try {


    const result = yield service.searchBusinessList(action.payload);

    if (result.status === 200 || result.status === 201) {

      yield put({ type: types.SEARCH_FIELD_BUSINESS_SUCCESS, payload: result.data.message });
    
    } else {
 
      yield put({ type: types.SEARCH_FIELD_BUSINESS_FAILURE, payload: result.message.data.message });
      
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SEARCH_FIELD_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SEARCH_FIELD_BUSINESS_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SEARCH_FIELD_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}










function* saveBusinessRating(action) {


  try {
    yield put({ type: types.START_LOADING });

    const result = yield service.saveRating(action.payload);
  
    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.SAVE_RATING_SUCCESS, payload: result.data.message });
      yield put({   type: types.UPDATE_BUSINESS_REQUEST })
      yield put({   type: types.GET_USER_REQUEST, payload: action.payload.userId })

      yield put({ type: types.STOP_LOADING });
    } else {
      yield put({ type: types.STOP_LOADING });

      yield put({ type: types.SAVE_RATING_FAILURE, payload: result.message.data.message });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_RATING_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_RATING_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.SAVE_RATING_FAILURE, payload: errorMessage });
    }
  }
}

function* verifyBusinessRequest(action) {

  try {
    yield put({ type: types.START_LOADING });
   
    const result = yield service.verifyBusiness(action.payload);



    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.VERIFY_PHONE_SUCCESS, payload: result.data.message });
      Toast.show(result.data.message.toString(), Toast.LONG);
   
      yield put({ type: types.STOP_LOADING });
    } else {
      yield put({ type: types.STOP_LOADING });

      yield put({ type: types.VERIFY_PHONE_FAILURE, payload: result.message.data.message });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.VERIFY_PHONE_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.VERIFY_PHONE_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.VERIFY_PHONE_FAILURE, payload: errorMessage });
    }
  }
}



function* claimBusinessRequest(action) {

  try {
    yield put({ type: types.START_LOADING });


    const result = yield service.claimBusiness(action.payload);
    if (result.status === 200 || result.status === 201) {
      yield put({ type: types.CLAIM_BUSINESS_SUCCESS, payload: result.data.message });
      yield put({   type: types.GET_USER_REQUEST, payload: action.payload.userId })
   
      yield put({ type: types.STOP_LOADING });
    } else {
      yield put({ type: types.STOP_LOADING });

      yield put({ type: types.CLAIM_BUSINESS_FAILURE, payload: result.message.data.message });
      Toast.show(result.message.message.toString(), Toast.LONG);
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    if (error.response) {
      const errorMessage = error.response.data.message;
      console.log("Message" , errorMessage)
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.CLAIM_BUSINESS_FAILURE, payload: errorMessage });
    } else if (error.request) {
      const errorMessage = "Error. Please check your internet connection.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.CLAIM_BUSINESS_FAILURE, payload: errorMessage });
    }
    else {
      const errorMessage = "There was some error.";
      Toast.show(errorMessage, Toast.LONG);
      yield put({ type: types.CLAIM_BUSINESS_FAILURE, payload: errorMessage });
    }
  }
}




export default function* businessWatcher() {
  yield takeLatest(types.UPDATE_BUSINESS_REQUEST, getBusinessList);
  yield takeLatest(types.LOAD_BUSINESS_REQUEST, getMoreBusinessList);

  yield takeLatest(types.SAVE_RATING_REQUEST, saveBusinessRating);

  yield takeLatest(types.VERIFY_PHONE_REQUEST, verifyBusinessRequest);
  yield takeLatest(types.CLAIM_BUSINESS_REQUEST, claimBusinessRequest);

  yield takeLatest(types.SEARCH_FIELD_BUSINESS_REQUEST, searchFieldBusinessList);
  yield takeLatest(types.SEARCH_BUSINESS_REQUEST, searchBusinessList);
  yield takeLatest(types.SINGLE_BUSINESS_REQUEST, getSingleBusiness);
}
