import React from 'react';
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
  return (
       
    <Router>
    <div className="App">
    <div className="nav-links">
    <nav>
    <Link to="/Login">Login</Link>
    <Link to="/SignUp">SignUp</Link>
    </nav>

    </div>

    <Route path = "/Login" component={Login}
    render= {routeProps => {
      console.log('routeProps', routeProps);
    }}
 
    />

 <Route path = "/SignUp" component={SignUp}
    render= {routeProps => {
      console.log('routeProps', routeProps);
    }}
    />
  </div>
  </Router>

  );
}

export default App;
