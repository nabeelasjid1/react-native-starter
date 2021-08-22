import API from "../../lib/Api";
import { User } from "./types";

export async function login(user) {
  return API.post(`/auth/login`, user);
}
export async function register(user) {
  return API.post(`/auth/register`, user);
}
export async function reset(user) {
  return API.post(`/auth/reset`, user);
}
export async function verifyEmail(token) {
  // console.log("Code in verify Email" )

  return API.post(`/auth/verify`, { token });
}

export async function verifyForgotPass(token) {
  // console.log("Code in verify forgot" )
  return API.post(`/auth/verifyForgotPass`, { token });
}


export async function getUser(id) {
  return API.get(`/user/${id}`);
}
export async function forgot(email) {
  return API.post(`/auth/forgot`, { email });
}
export async function getList(page) {
  // console.log(page)
  return API.get(`/business?pageNumber=${page}&limit=15`);
}
// export async function searchList({ term, city }) {
//   return API.get(`/business/search/all?term=${term}&city=${city}`);
// }

export async function searchList({ term , city }) {
  return API.get(`/business/search/all?term=${term}&city=${city}`);
}

export async function searchBusinessList({ term , location }) {
 
  return API.get(`/business/search/business?term=${term}&lat=${location.lat}&lng=${location.lng}`);
}



export async function saveRating({ id, rating, role ,userId , questions }) {
  // console.log("Service" , id, rating, role ,userId , questions  )
  return API.put(`/business/rating/${id}`, { rating, role , userId , questions });
}


export async function getSingleBusiness(businessId) {
  // console.log("ID in service" , businessId)
  return API.get(`/business/${businessId}`);
}

export async function fetchBusiness(id) {
  // console.log("ID in fetchService" , id)
  return API.get(`/business/fetch/${id}`);
}




export async function updateProfile(id , user) {
  return API.put(`/user/${id}` , {user});
}




export async function verifyBusiness({userId , businessId , phone}) {
  // console.log("Service  " , phone)
  return API.post(`/business/verify` , {userId , businessId , phone});
}


export async function claimBusiness({userId , businessId , code}) {
  // console.log("UserID in CLAIMM" , userId)
  // console.log("BusinessID in CLAIM" , businessId)
  console.log("BusinessID in CLAIM" , code)
  return API.post(`/business/claim` , {userId , businessId , code});
}

