import {
    START_FETCHING,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGGED_IN,
    LOGGED_OUT,
    LOG_OUT_SUCCESS
  } from "../actions/signUpAction";
  
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
      case START_FETCHING:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case LOGGED_IN:
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          isFetching: false,
          loggedIn: true,
          error: ""
        };
      case LOGGED_OUT:
      case LOG_OUT_SUCCESS:
        return {
          ...state,
          isFetching: false,
          loggedIn: false,
          error: ""
        };
      case LOGIN_FAILURE:
      case REGISTER_FAILURE:
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