import API from "../../lib/Api";

export async function getUser(id) {
  return API.get(`/user/${id}`);
}

export async function updateProfile(id , user) {
  return API.put(`/user/${id}` , {user});
}

export async function finishTrip(data) {
  return API.post(`/user/createtrip` , data);
}

export async function myTrips(userId) {
  return API.get(`/user/mytrips/${userId}`);
}

export async function deleteTrip(id) {
  return API.delete(`/user/deletetrip/${id}`);
}
