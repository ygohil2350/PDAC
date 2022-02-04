import React from "react";
import "../Component/Navbar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav">
      <h1>This is Navigation Bar</h1>
      <br />
      <Link to="google">Google</Link>
      <Link to="bing">Bing</Link>
    </div>
  );
};

export default NavigationBar;
