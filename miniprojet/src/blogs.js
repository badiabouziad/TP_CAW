import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Myblogs from "./myblogs";
import Create from "./createBlog";
import { useState } from "react";
export default function Blogs() {
  const [blogs, setblogs] = useState([ {
    sujet: "My Hobies",
    desc: "i love going to the gym, Hiking , Going for a run at the morning, Reading books",
    date: "02/01/2023",
    likes:Math.floor(Math.random()*100),
  },]);
  const ajoutblog = (blog) => {
    setblogs([...blogs, blog]);
  };
  return (
    /*
    <div className="App">
      <Create ajoutcontact={ajoutcontact} />
      <Mycontacts contacts={contacts} />
    </div>*/
    
    <div className="contacts">
      <BrowserRouter>
        <nav className="navbar">
          <div className="btns">
            <button className="btn-blog">
              <Link
                exact
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Afficher les Blogs
              </Link>
            </button>
            <button className="btn-blog" style={{ marginLeft: "50px" }}>
              <Link
                to="/createBlog"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Créer nouveau Blog
              </Link>
            </button>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Myblogs blogs={blogs} />
          </Route>
          <Route path="/createBlog">
            <Create ajoutblog={ajoutblog} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
