import React from "react";
import { useState } from "react";
import Myblogs from "./myblogs";

export default function Create({ ajoutblog }) {
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
  const [blog, setblog] = useState([
    {
      sujet: "",
      desc: "",
      date: "",
      likes:'',
    },
  ]);
  const handleChange = (e) => {
    setblog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ajoutblog(blog);
    setblog({ sujet: "", desc: "", date: "",likes:'' });
  };
  return (
    <div>
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Remplir les informations :)</h2>
        <label>Sujet : </label>
        <input
          type="text"
          required
          value={blog.sujet}
          name="sujet"
          onChange={handleChange}
        ></input>
        <label>Description : </label>
        <input
          type="textarea"
          required
          value={blog.desc}
          name="desc"
          onChange={handleChange}
          className="desc"
        ></input>
        <label>Date : </label>
        <input
          type="date"
          required
          value={blog.date}
          name="date"
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="btn-blog"
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
