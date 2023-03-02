import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
  return (
    <>
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/myblogs" }}>My Blogs</Link>
        </li>
        <li>
          <Link to={{ pathname: "/about" }}>About Me</Link>
        </li>
      </ul>
      <h1>Nav</h1>
    </>
  )
}
export default Navbar;
