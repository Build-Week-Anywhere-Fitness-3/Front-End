import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,} from 'reactstrap';
import Login from './Login';
import SignUp  from './SignUp';

const NavLink = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className= "gymback">
    <div>
      <Navbar color="faded" dark>
        <NavbarBrand href="/"  className="gym">AnyWhereFitness</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="burger" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar >
            <NavItem >
              <a href="About"> About </a>
            </NavItem>
            <NavItem>
              <Link to="/Login">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/SignUp">SignUp</Link>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>

    






      {/* <Link to="/Login">Login</Link> */}
      {/* <Link to="/SignUp">SignUp</Link> */}


      <Route path = "/Login"
    component={Login}
    render= {routeProps => {
      console.log('routeProps', routeProps);
    }}
    />
 <Route path = "/SignUp"
    component={SignUp}
    render= {routeProps => {
      console.log('routeProps', routeProps);
    }}
    />
    </div>
    </div>
  );
}

export default NavLink;