import React, { Component } from "react";
import logo from "./image/logo.png";

import Account from "./Account";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="logoBox">
          <NavLink activeStyle={{ color: "green" }} to="/" exact>
            <img className="logo" src={logo} alt="" />
          </NavLink>
        </div>

        <div className="navBar">
          <li>
            <NavLink activeStyle={{ color: "green" }} to="/Annonce" exact>
              <button className="btnSearch">Publier annonce</button>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <Account />
            </a>
          </li>
        </div>
      </div>
    );
  }
}

export default Navbar;
