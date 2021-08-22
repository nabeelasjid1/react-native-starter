import { types } from "./types";

let initialState = {
    loading: false,
    error: false,
    submit: false,
    data: [],
    dataError: '',
    page: 1,
    searchList : [], 
    singleBusiness : {}
};


const businessReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SINGLE_BUSINESS_REQUEST:
            return {
                ...state,
                singleBusiness: {},
                error: false,
                submit: false,
                dataError: '',
            }
            case types.SINGLE_BUSINESS_SUCCESS:
                state.data = []
                return {
                    ...state,
                    singleBusiness: action.payload,
                    error: false,
                    submit: true,
                    dataError: '',
                }
    
            case types.SINGLE_BUSINESS_FAILURE:
                return {
                    ...state,
                    singleBusiness: {},
                    dataError: action.payload,
                    error: true,
                    submit: true
                }
    
        
      
        case types.SEARCH_FIELD_BUSINESS_REQUEST: 
        // console.log("req SEARCH")
        return {
            ...state ,
            searchList : [],
            submit : false , 
            error : false,
        }
           case types.SEARCH_FIELD_BUSINESS_SUCCESS:
        // console.log("success  SEARCH")
          
           return{
               ...state ,
               searchList : action.payload,
               submit : true , 
               error : false,
             }
         case types.SEARCH_FIELD_BUSINESS_FAILURE: 
        // console.log("failure  SEARCH")
         
         return {
           ...state ,
           searchList : [],
           submit : true , 
           error : true,
         }
        
      



        case types.CLAIM_BUSINESS_REQUEST: 
        // console.log("req")
        return {
            ...state ,
            submit : false , 
            error : false,
        }
           case types.CLAIM_BUSINESS_SUCCESS:
        // console.log("success")
          
           return{
               ...state ,
               submit : true , 
               error : false,
             }
         case types.CLAIM_BUSINESS_FAILURE: 
        // console.log("failure")
         
         return {
           ...state ,
           submit : true , 
           error : true,
         }
        
      
      
      
        case types.VERIFY_PHONE_REQUEST: 
     
        return {
            ...state ,
            submit : false , 
            error : false,
        }
           case types.VERIFY_PHONE_SUCCESS:
          
           return{
               ...state ,
               submit : true , 
               error : false,
             }
         case types.VERIFY_PHONE_FAILURE: 
         
         return {
           ...state ,
           submit : true , 
           error : true,
         }
   
   
   
        case types.SAVE_RATING_REQUEST: 
  
     return {
         ...state ,
         submit : false , 
         error : false,
     }
        case types.SAVE_RATING_SUCCESS:
         
          return{
            ...state ,
            submit : true , 
            error : false,
          }
      case types.SAVE_RATING_FAILURE: 
      
      return {
        ...state ,
        submit : true , 
        error : true,
      }
      case types.SEARCH_BUSINESS_REQUEST:
        return {
            ...state,
            data: [],
            error: false,
            submit: false,
            dataError: '',
        }
        case types.SEARCH_BUSINESS_SUCCESS:
            state.data = []
            return {
                ...state,
                data: action.payload,
                error: false,
                submit: true,
                dataError: '',
            }

        case types.SEARCH_BUSINESS_FAILURE:
            return {
                ...state,
                dataError: action.payload,
                error: true,
                submit: true
            }

        case types.UPDATE_BUSINESS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: false,
                submit: true,
                // page: state.page + 1
            }

        case types.UPDATE_BUSINESS_FAILURE:
            return {
                ...state,
                dataError: action.payload,
                error: true,
                submit: true
            }

        case types.LOAD_BUSINESS_SUCCESS:
            return {
                ...state,
                data: [...new Set([...state.data, ...action.payload])]
            }

        case types.LOAD_BUSINESS_FAILURE:
            return {
                ...state,
                dataError: action.payload,
                error: true,
                submit: true
            }

        case "INCREMENT_PAGE":
            return {
                ...state,
                page: state.page + 1
            }
        default:
            return state
    }

}


export default businessReducer