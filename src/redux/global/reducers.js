import { types } from "./types";

let initialState = {
    loading: false,
};


const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_LOADING:
            return {
                ...state,
                loading: true,
            }

        case types.STOP_LOADING:
            return {
                ...state,
                loading: false,
            }

        default:
            return state
    }


}


export default globalReducer