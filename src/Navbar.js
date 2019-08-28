import React, { Component } from "react";
import logo from "./image/logo.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Account from "./Account";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Telephones from "./Categories/Telephones";
import Ordinateurs from "./Categories/Ordinateurs";
import Photo from "./Categories/Photo";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="logoBox">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="boxCategories">
          <Telephones />
          <Ordinateurs />
          <Photo />
        </div>
        <div className="navBar">
          <li>
            <NavLink activeStyle={{ color: "green" }} to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <a href="#">
              <Account />
            </a>
          </li>
          <li>
            <NavLink activeStyle={{ color: "green" }} to="/Annonce" exact>
              Publier annonce
            </NavLink>
          </li>
        </div>
      </div>
    );
  }
}

export default Navbar;
