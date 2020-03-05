import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/loginAction";

const initialState = {
    isFetching: false,
    error: "",
    loggedIn: false
};

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedIn: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default signUpReducer;