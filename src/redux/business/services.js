import API from "../../lib/Api";

export async function saveRating({ id, rating, role ,userId , questions , quickReview }) {
  return API.put(`/business/rating/${id}`, { rating, role , userId , questions , quickReview });
}

export async function saveFeedback({ id, userId , comments , role }) {
  return API.put(`/business/feedback/${id}`, { comments , userId , role });
}

export async function getSingleBusiness(businessId) {

  return API.get(`/business/${businessId}`);
}

export async function fetchBusiness(id) {
  return API.get(`/business/fetch/${id}`);
}

export async function searchBusinesses(data) {
  return API.post("/business/searchBusinesses", data);
}

export async function updateOwnerBusiness(id , business) {
  return API.put(`/business/${id}` , {business});
}

export async function verifyBusiness({userId , businessId , phone}) {
  return API.post(`/business/verify` , {userId , businessId , phone});
}

export async function claimBusiness({userId , businessId , code}) {
  return API.post(`/business/claim` , {userId , businessId , code});
}

