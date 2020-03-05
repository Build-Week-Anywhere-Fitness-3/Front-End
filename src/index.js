import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { signUpReducer } from './reducers/signUpReducer'
import thunk from 'redux-thunk';

const store = createStore(signUpReducer, applyMiddleware(thunk))

ReactDOM.render(
 <Provider store={store}> 
    <App />
 </Provider>  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
