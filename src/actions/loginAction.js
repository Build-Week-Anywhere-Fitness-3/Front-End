  
import { axiosWithAuth } from "../utils/axiosWithAuth";

// LOGIN TYPES
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//LOGIN ACTIONS
export const login = (credentials, history) => dispatch => {
    dispatch({
        type: LOGIN_REQUEST
    });
    axiosWithAuth()
        .post("/auth/login", credentials)
        .then(res => {
        console.log("reducers/loginReducer.js: post res: ", res);
        dispatch({ type: LOGIN_SUCCESS });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        history.push('/')
        })
        .catch(err => {
        console.log(err.response);
        dispatch({ type: LOGIN_FAILURE, payload: err.message });
        });
};