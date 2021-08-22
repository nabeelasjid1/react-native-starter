import { types } from "./types";

let initialState = {
  loading: false,
  error: false,
  submit: false,
  data: [],
  dataError: "",
  page: 1,
  singleBusiness: {},
  searchedBusinesses: {},

};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SINGLE_BUSINESS_REQUEST:
      return {
        ...state,
        singleBusiness: {},
        error: false,
        submit: false,
        dataError: "",
      };
    case types.SINGLE_BUSINESS_SUCCESS:
      return {
        ...state,
        singleBusiness: action.payload,
        error: false,
        submit: true,
        dataError: "",
      };

    case types.SINGLE_BUSINESS_FAILURE:
      return {
        ...state,
        singleBusiness: {},
        dataError: action.payload,
        error: true,
        submit: true,
      };
    case types.TRIP_NEXT_PAGE: {
      return {
        ...state,
        searchedBusinesses: {},
        error: false,
        submit: false,
      };
    }
    case types.SEARCH_BUSINESS_REQUEST: {
      return {
        ...state,
        searchedBusinesses: {},
        error: false,
        submit: false,
      };
    }
    case types.SEARCH_BUSINESS_SUCCESS:
      return {
        ...state,
        searchedBusinesses: action.payload,
        error: false,
        submit: true,
      };
    case types.SEARCH_BUSINESS_FAILURE:
      return {
        ...state,
        searchedBusinesses: {},
        error: true,
        submit: true,
      };
    case types.UPDATE_OWNERBUSINESS_REQUEST: {
      return {
        ...state,
        error: false,
        submit: false,
      };
    }
    case types.UPDATE_OWNERBUSINESS_SUCCESS:
      return {
        ...state,
        error: false,
        submit: true,
      };
    case types.UPDATE_OWNERBUSINESS_FAILURE:
      return {
        ...state,
        error: true,
        submit: true,
      };

    case types.CLAIM_BUSINESS_REQUEST:
      return {
        ...state,
        submit: false,
        error: false,
      };
    case types.CLAIM_BUSINESS_SUCCESS:
      return {
        ...state,
        submit: true,
        error: false,
      };
    case types.CLAIM_BUSINESS_FAILURE:
      return {
        ...state,
        submit: true,
        error: true,
      };

    case types.VERIFY_PHONE_REQUEST:
      return {
        ...state,
        submit: false,
        error: false,
      };
    case types.VERIFY_PHONE_SUCCESS:
      return {
        ...state,
        submit: true,
        error: false,
      };
    case types.VERIFY_PHONE_FAILURE:
      return {
        ...state,
        submit: true,
        error: true,
      };

    case types.SAVE_RATING_REQUEST:
      return {
        ...state,
        submit: false,
        error: false,
      };
    case types.SAVE_RATING_SUCCESS:
      return {
        ...state,
        submit: true,
        error: false,
      };
    case types.SAVE_RATING_FAILURE:
      return {
        ...state,
        submit: true,
        error: true,
      };

    case types.SAVE_FEEDBACK_REQUEST:
      return {
        ...state,
        submit: false,
        error: false,
      };
    case types.SAVE_FEEDBACK_SUCCESS:
      return {
        ...state,
        submit: true,
        error: false,
      };
    case types.SAVE_FEEDBACK_FAILURE:
      return {
        ...state,
        submit: true,
        error: true,
      };

    case types.UPDATE_BUSINESS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        submit: true,
      };

    case types.UPDATE_BUSINESS_FAILURE:
      return {
        ...state,
        dataError: action.payload,
        error: true,
        submit: true,
      };

    default:
      return state;
  }
};

export default businessReducer;
