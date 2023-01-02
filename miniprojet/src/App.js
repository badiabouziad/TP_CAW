import Home from "./home";
import Contacts from "./contacts";
import Blogs from "./blogs";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
function App() {
 
  return (
    <div className="links">
      <BrowserRouter>
        <nav className="navbar">
          <h1>Badia & Anis <span>PROJECT</span></h1>
          <div>
            <Link
              exact
              to="/"
              style={{
                textDecoration: "none",
              }}
              className="link"
            >
              Home
            </Link>
            <Link
              to="/contacts"
              style={{
                margin: "60px",
                textDecoration: "none",
              }}
              className="link"
            >
              Contacts
            </Link>
            <Link
              exact
              to="/blogs"
              style={{
                textDecoration: "none",
              }}
              className="link2"
            >
              Blog
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
