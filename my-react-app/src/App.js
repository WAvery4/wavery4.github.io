import React from 'react';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Resume from './Pages/Resume';

function App() {
  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">William Avery</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/resume">Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/WAvery4">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/william-avery-57a93a185/">LinkedIn</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
      <hr style={{width: "100%"}} />
      <p className="footer">Copyright 2021</p>
    </Router>
    
  );
}

export default App;
