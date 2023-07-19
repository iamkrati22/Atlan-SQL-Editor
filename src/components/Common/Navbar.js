import React from "react";
import "../../styles/Navbar.css";
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {


  render() {

    return (
      <nav id="Navbar">
        <div id="nav-lft">
          <img src={logo} className="logo" alt="logo" />
          <h5>SQL Editor</h5>
        </div>
        <ul id="nav-mid">
          <li> <a href="https://github.com/iamkrati22/Atlan-SQL-Editor">Source Code  </a><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
