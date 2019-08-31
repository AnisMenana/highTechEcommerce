import React, { Component } from "react";
import Navbar from "./Navbar";
import ParticleComponent from "./ParticleComponent";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Announce from "./Announce";
import Searchbar from "./Searchbar";
import Data from "./Data";
import { product } from "./dataProduct";
import Categorie from "./Categorie";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <div className="body">
                  <ParticleComponent />
                  <Navbar />
                  <div className="section">
                    <div className="section1">
                      <Searchbar />
                    </div>
                    <div className="btnCategorie">
                      <Categorie />
                    </div>
                  </div>

                  <Data product={product} />
                </div>
              );
            }}
          />
          <Route path="/Annonce" exact strict component={Announce} />
        </Router>
      </div>
    );
  }
}
export default App;
