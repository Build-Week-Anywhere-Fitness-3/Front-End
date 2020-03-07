import React, { useState } from 'react';
import { Route, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,} from 'reactstrap';
import Login from './Login';
import SignUp  from './SignUp';

const NavBurger = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className= "gymback">
    <div>
      <Navbar color="faded" dark>
        <NavbarBrand  className="gym">AnyWhereFitness</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="burger" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <a href="https://reverent-blackwell-dd535a.netlify.com/index.html"activeClassName="colors">Home</a>
            </NavItem>
            <NavItem>
              <a href="https://reverent-blackwell-dd535a.netlify.com/about.html"activeClassName="colors"> About </a>
            </NavItem>
            <NavItem >
              <NavLink to="/Login" activeClassName="colors">Login</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/SignUp" activeClassName="colors">SignUp</NavLink>
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

export default NavBurger;