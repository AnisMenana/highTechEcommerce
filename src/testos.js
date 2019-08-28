import React, { Component } from "react";
import Navbar from "./Navbar";
import Telephones from "./Categories/Telephones";
import Vehicules from "./Categories/Vehicules";
import Immobilier from "./Categories/Immobilier";
import Informatique from "./Categories/Informatique";
import Emploi from "./Categories/Emploi";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <div className="section1">
          <div className="boxCategories">
            <Telephones />
            <Vehicules />
            <Immobilier />
            <Informatique />
            <Emploi />
          </div>
        </div>
      </div>
    );
  }
}
