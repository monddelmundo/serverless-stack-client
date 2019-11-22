//We are doing a few things here:

// Creating a fixed width container using Bootstrap in div.container.
// Adding a Navbar inside the container that fits to its container’s width using the attribute fluid.
// Using Link component from the React-Router to handle the link to our app’s homepage (without forcing the page to refresh).
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes"; //will import route.js' method
import { LinkContainer } from "react-router-bootstrap"; //import react router bootstrap
import { Auth } from "aws-amplify";

function App(props) {
  
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  
  //The useEffect hook take a function and an array of variables. 
  //The function will be called every time the component is rendered. 
  //And the array of variables tell React to only re-run our function 
  //if the passed in array of variables have changed. This allows 
  //us to control when our function gets run.
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession(); //will throw error if nobody is logged in.
      userHasAuthenticated(true); //authenticate the user
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }  

  async function handleLogout() {
    await Auth.signOut(); //AWS method that will sign out the user from the session. 

    userHasAuthenticated(false);
  }
  
  return (
    !isAuthenticating &&
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
            {isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              : <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
  
}
//<Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
///this will pass these props to the child component of the routes
//that the App component creates.

export default App;
