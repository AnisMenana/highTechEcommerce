import React, { Component } from "react";
import clavier from "./image/clavier.jpg";
class Searchbar extends Component {
  render() {
    return (
      <div className="search">
        <input
          className="input-search"
          type="text"
          placeholder="Votre recherche ici ..."
        />
        <button className="btnSearch">Rechercher</button>
      </div>
    );
  }
}

export default Searchbar;
