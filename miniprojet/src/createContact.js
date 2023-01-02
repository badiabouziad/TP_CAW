import React from "react";
import { useState } from "react";
import Mycontacts from "./mycontacts";

/* const [nom, setnom] = useState("");
const [numero, setnumero] = useState("");
  const [email, setemail] = useState("");*/
  /*function handlenom(e) {
    setcontact({
      ...contact,
      nom: e.target.value,
    });
  }

  function handlenumero(e) {
    setcontact({
      ...contact,
      numero: e.target.value,
    });
  }

  function handleemail(e) {
    setcontact({
      ...contact,
      email: e.target.value,
    });
  }*/
export default function Create({ ajoutcontact }) {
  const [contact, setcontact] = useState([
    {
      nom: "",
      email: "",
      numero: "",
    },
  ]);
  const handleChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ajoutcontact(contact);
    setcontact({ nom: "", email: "", numero: "" });
  };
  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Remplir les informations :)</h2>
        <label>Nom : </label>
        <input
          type="text"
          required
          value={contact.nom}
          name="nom"
          onChange={handleChange}
        ></input>
        <label>Numero : </label>
        <input
          type="text"
          required
          value={contact.numero}
          name="numero"
          onChange={handleChange}
        ></input>
        <label>Email : </label>
        <input
          type="email"
          required
          value={contact.email}
          name="email"
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="btn-contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "700",
            width: "200px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
