import React from "react";
import "../Component/Navbar.css";

const Navbar = (props) => {
  return (
    <div className="nav">
      {props.navData.map((Element) => (
        <a href={Element.link}> {Element.Name} </a>
      ))}
    </div>
  );
};

export default Navbar;
