
import { axiosWithAuth } from "../utils/axiosWithAuth";

// SIGNUP ACTION TYPES
export const START_FETCHING = "START_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";

//SIGNUP ACTIONS
export const register = (credentials, history) => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .post("/auth/register", credentials)
    .then(res => {
      console.log("reducers/signUpReducer.js: post res: ", res);
      dispatch({ type: REGISTER_SUCCESS });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.id);
      history.push('/')
    })
    .catch(error => {
      dispatch({ type: REGISTER_FAILURE, payload: error.response.data });
      console.log(error.response);
    });
};

export const checkStatus = () => dispatch => {
  if(localStorage.getItem('token')){
    console.log('logged in')
    dispatch({ type: LOGGED_IN })
  }else{
    console.log('logged out')
    dispatch({ type: LOGGED_OUT })
  }
}

export const logOut = () => dispatch => {
  localStorage.removeItem('token')
  dispatch({ type: LOG_OUT_SUCCESS })
}