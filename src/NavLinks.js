import React, { useState } from 'react';
import { Route, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,} from 'reactstrap';
import WorkOut from './WorkOut';
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
              <a href="https://reverent-blackwell-dd535a.netlify.com/index.html">Home</a>
            </NavItem>
            <NavItem>
              <a href="https://reverent-blackwell-dd535a.netlify.com/about.html"> About </a>
            </NavItem>
            <NavItem >
              <NavLink to="/Login" activeClassName="colors">Login</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/SignUp" activeClassName="colors">SignUp</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/HallOfFame" activeClassName="colors">Hall of fame</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    






      {/* <Link to="/Login">Login</Link> */}
      {/* <Link to="/SignUp">SignUp</Link> */}


      <Route path = "/Login"
    component={Login}

    />
 <Route path = "/SignUp"
    component={SignUp}
    
    
    />
    <Route path = "/HallOfFame"
    component={WorkOut}
     render= {routeProps => {
       console.log("routeProps", routeProps);
     }}
    />
    </div>

    </div>

    
  );
}

export default NavBurger;