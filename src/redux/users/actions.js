import { types} from "./types";

export function updateProfile(id , user){
  return {
    type : types.UPDATE_PROFILE_REQUEST , 
    payload : user ,
    userId : id
  }
}

export function getUser(id) {  
  return {
    type: types.GET_USER_REQUEST,
    payload: id,
  };
}

export function finishTrip(data) {  
  return {
    type: types.FINISH_TRIP_REQUEST,
    payload: data,
  };
}

export function myTrips(userId) {
  return {
    type: types.MY_TRIPS_REQUEST,
    payload: userId,
  };
}

export function deleteTrip(id, userId) {
  return {
    type: types.DELETE_TRIP_REQUEST,
    payload: id,
  };
}

export function getUserFailed() {
  return {
    type: types.GET_USER_FAILURE,
  };
}

export function removeUserData() {
  return {
    type: types.REMOVE_USER_DATA,
  };
}

export function getUserSuccess() {
  return {
    type: types.GET_USER_SUCCESS,
  };
}

