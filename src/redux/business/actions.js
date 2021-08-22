import { types} from "./types";


export function searchBusinesses(data) {
  return {
    type: types.SEARCH_BUSINESS_REQUEST,
    payload: data,
  };
}

export function searchFieldList(term , loc) {
 
    return {
      type: types.SEARCH_FIELD_BUSINESS_REQUEST,
      payload: { term: term , location : loc}
    };
  }
  
  export function getSingleBusiness(businessId) {
    return{
      type : types.SINGLE_BUSINESS_REQUEST , 
      payload  : businessId
    }
  }
  export function tripNextPage() {
    return{
      type : types.TRIP_NEXT_PAGE , 
    }
  }
  export function saveBusinessRating(id, rating, role ,userId , questions, quickReview, saveRating) {
    return {
      type: types.SAVE_RATING_REQUEST,
      payload: { id, rating, role, userId , questions , quickReview, saveRating}
    };
  }
  
  export function saveBusinessFeedback(id, userId , comments , role) {
    return {
      type: types.SAVE_FEEDBACK_REQUEST,
      payload: { id, userId , comments , role }
    };
  }
  
  export function verifyBusiness(userId , businessId , phone){
  
    return{
      type : types.VERIFY_PHONE_REQUEST , 
      payload : {userId , businessId , phone}
    }
  }
  
  export function claimBusiness(userId , businessId , code){
    return{
      type : types.CLAIM_BUSINESS_REQUEST , 
      payload : {userId , businessId , code}
    }
  }
  
  export function updateOwnerBusiness(id , business){
    return {
      type : types.UPDATE_OWNERBUSINESS_REQUEST , 
      payLoad : business ,
      businessId : id
    }
  }