import React, { Component } from "react";
import { connect } from "react-redux";
import { filterChange, filterBrand } from "./redux/action";
class Searchbar extends Component {
  handleFilter = () => {
    this.props.onFilter({
      productArray: this.props.productArray
    });
  };

  handleBrand1 = event => {
    this.props.onFilterBrand(event.target.value);
  };
  render() {
    return (
      <div className="search">
        <input
          className="input-search"
          type="text"
          placeholder="Votre recherche ici ..."
          onChange={this.handleBrand1}
        />
        <button onClick={this.handleFilter} className="btnSearch">
          Rechercher
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productArray: state.announce.productArray,
    brand: state.announce.brand
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilter: type => dispatch(filterChange(type)),
    onFilterBrand: brand => dispatch(filterBrand(brand))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
