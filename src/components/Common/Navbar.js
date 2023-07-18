import React from "react";
import "../../styles/Navbar.css";
import logo from '../../logo.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false, // Initial mode set to light
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode, // Toggles the mode
    }));
  };

  render() {
    const { darkMode } = this.state;

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
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={this.toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
    );
  }
}

export default Navbar;
