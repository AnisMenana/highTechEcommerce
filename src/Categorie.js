import React, { Component } from "react";
import { connect } from "react-redux";
import { filterCategory } from "./redux/action";

class Categorie extends Component {
  render() {
    // console.log(this.props.arrCategorie);
    console.log(
      "filtred: ",
      this.props.arrCategorie.filter(
        (e, i) => e.category.toLowerCase() === "Smartphone".toLowerCase()
      )
    );
    return (
      <div>
        <input
          type="button"
          value="Smartphone"
          className="btnSearch"
          onClick={e => this.props.filterCategory(e.target.value)}
        />

        <input
          type="button"
          value="Laptop"
          className="btnSearch"
          onClick={e => this.props.filterCategory(e.target.value)}
        />
        <input
          type="button"
          value="Camera"
          className="btnSearch"
          onClick={e => this.props.filterCategory(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    arrCategorie: state.announce.productArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterCategory: x => dispatch(filterCategory(x))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categorie);
