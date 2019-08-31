import React, { Component } from "react";

class Categorie extends Component {
  render() {
    return (
      <div>
        <button className="btnSearch">Smartphone</button>
        <button className="btnSearch">Laptop</button>
        <button className="btnSearch">Photos</button>
      </div>
    );
  }
}

export default Categorie;
