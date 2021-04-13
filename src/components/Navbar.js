import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="myLogo"></div>
      {/* <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/projects">
        <div>Projects</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link> */}
      <div><a href="#">Home</a></div>
      <div><a href="#about">Arts</a></div>

      <div><a href="#coding">Skills</a></div>
      <div><a href="#timeline">Timeline</a></div>
      <div><a href="#hobbies">Hobbies</a></div>
    
    </div>
  );
}
