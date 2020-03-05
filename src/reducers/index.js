import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_START,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    HANDLE_CHANGE,
    RESET_ERRORS,
    RESET_FORM,
    VERIFY_EMAIL,
    START_EDIT,
    FINISH_EDIT,
    DELETE,
    COPY,
    SUBMIT_FORM,
    RETRIEVE_SUCCESS,
    RETRIEVE_START,
    RETRIEVE_FAIL,
    VERIFY_START,
    VERIFY_FAIL
    } 
from "../actions"

const initialState = {
    loginCredentials: {},
    registerCredentials: {},
    recoverEmail: {},
    loggedInUsername: '',
    userId: 0,
    error: '',
    errorList: [],
    isLoggingIn: false,
    isLoggingOut: false,
    isRegistering: false,
    isFetching: false,
    isVerify: false,
    isEdit: false,
    forceUpdate: false,
    loggedIn: false,
    editedItem: {},
    exerciseList: [

    ]

}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case RETRIEVE_START:
        return {
            ...state,
            isFetching: true
        }
    case RETRIEVE_SUCCESS:
        return {
            ...state,
            exerciseList: !!payload ? payload : [],
            isFetching: false
        }
    case RETRIEVE_FAIL:
        return {
            ...state,
            isFetching: false,
            error: payload,
            exerciseList: []
        }
    case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }
    case LOGIN_SUCCESS:
        const tok = '1P462YTHSHSS6422527HSDVADFAD8764372523111KJHGS73G6G6524116'
        localStorage.setItem('token', tok)
        return {
            ...state,
            isLoggingIn: false,
            error: '',
            loggedIn: !!payload.session,
            loggedInUsername: payload.message,
            userId: payload.session.user.id ? payload.session.user.id : payload.session.admin.id
        }
    case LOGIN_FAIL:
        return {
            ...state,
            isLoggingIn: false,
            error: 'Invalid Username or Password'
        }
    case REGISTER_START:
        return {
            ...state,
            isRegistering: true,
            error: ''
        }
    case REGISTER_SUCCESS:
        
        return {
            ...state,
            isRegistering: false,
            error: ''
        }
    case REGISTER_FAIL:
        let serverError = payload[0]
        return {
            ...state,
            isRegistering: false,
            errorList: serverError==='Request failed with status code 500' ? ['Username not available.'] : payload
        }
    case HANDLE_CHANGE:
        return {
            ...state,
            [payload.form]: 
            {
                ...state[payload.form],
                [payload.target.name]: payload.target.value
            }
        }
    case VERIFY_START:
        return {
            ...state,
            isVerify: true,
            error: ''
        }
    case VERIFY_EMAIL:
        return {
            ...state,
            recoverEmail: {...state.recoverEmail, message: 'Email sent'},
            isVerify: false,
            error: ''
        }
    case VERIFY_FAIL:
        return {
            ...state,
            error: 'Please enter an email',
            isVerify: false
        }
    case RESET_ERRORS:
        return {
            ...state,
            error: ''
        }
    case RESET_FORM:
        return {
            ...state,
            [payload]: {}
        }
    case START_EDIT:
        return {
            ...state,
            isEdit: true,
            editedItem: state.exerciseList.find(ele=> ele.id===payload)
        }
    case FINISH_EDIT:
        return {
            ...state,
            isEdit: false,
            forceUpdate: !state.forceUpdate
        }
    case DELETE:
        return {
            ...state,
            forceUpdate: !state.forceUpdate
        }
    case COPY:
        return {
            ...state,
            forceUpdate: !state.forceUpdate
        }
    case LOGOUT_START:
        return {
            ...state,
            isLoggingOut: true,
            error: ''
        }
    case LOGOUT_SUCCESS:
        return {
            ...state,
            isLoggingOut: false,
            error: '',
            loggedIn: false,
            exerciseList: []
        }
    case LOGOUT_FAIL:
        return {
            ...state,
            isLoggingOut: false,
            error: 'Logout Fail'
        }
    case SUBMIT_FORM:
        return {
            ...state,
            exerciseList: [payload, ...state.exerciseList]
        }
    default:
        return state
}
}