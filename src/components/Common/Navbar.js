import React from "react";
import "../../styles/Navbar.css";
import logo from '../../logo.png';

class Navbar extends React.Component {


  render() {

    return (
      <nav id="Navbar">
        <div id="nav-lft">
          <img src={logo} className="logo" alt="logo" />
          <h5>SQL Editor</h5>
        </div>
        <ul id="nav-mid">
          <li>Tables</li>
          <li>Instructions</li>
          <li>Source</li>
        </ul>
        <div id="nav-rgt">
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
