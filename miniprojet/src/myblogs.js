import { useState } from "react";

export default function Myblogs({ blogs }) {
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog" key={blog.desc}>
          <h2>Sujet : {blog.sujet}</h2>
          <br></br>
          <br></br>
          <h3>Description : {blog.desc}</h3>
          <br></br>
          <br></br>
          <h3>Date : {blog.date}</h3>
          <br></br>
          
        </div>
      ))}
    </div>
  );
}
