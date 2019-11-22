//We are doing a few things here:

// Creating a fixed width container using Bootstrap in div.container.
// Adding a Navbar inside the container that fits to its container’s width using the attribute fluid.
// Using Link component from the React-Router to handle the link to our app’s homepage (without forcing the page to refresh).
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes"; //will import route.js' method
import { LinkContainer } from "react-router-bootstrap"; //import react router bootstrap

function App(props) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}



export default App;
