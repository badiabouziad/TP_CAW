import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Mycontacts from "./mycontacts";
import Create from "./createContact";
import { useState } from "react";
export default function Contacts() {
  const [contacts, setContacts] = useState([{
   nom: "Farah Bouziad",
    numero: "05466886699",
    email: "farah@bouziad@gmail.com",
   
  }]);
  const ajoutcontact = (contact) => {
    setContacts([...contacts, contact]);
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
            <button className="btn-contact">
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
                Afficher les contacts
              </Link>
            </button>
            <button className="btn-contact" style={{ marginLeft: "50px" }}>
              <Link
                to="/createContact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Créer nouveau contact
              </Link>
            </button>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Mycontacts contacts={contacts} />
          </Route>
          <Route path="/createContact">
            <Create ajoutcontact={ajoutcontact} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
