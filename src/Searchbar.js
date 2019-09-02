import React, { Component } from "react";
import { connect } from "react-redux";
import { filterChange } from "./redux/action";
class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      filterName: ""
    };
  }

  handleFilter = () => {
    this.props.onFilter({
      filterProductArray: this.props.filterProductArray
    });
  };

  handleBrand1 = event => {
    this.props.onFilterBrand(event.target.value);
  };
  render() {
    // console.log("filterName: ", this.state.filterName);
    // console.log(
    //   // this.props.arr.filter((element, i) => element.title.includes("iphone"))
    //   this.props.arr.filter(e => e.title.includes("iPhone"))
    // );
    return (
      <div className="search">
        <input
          className="input-search"
          type="text"
          placeholder="Votre recherche ici ..."
          onChange={e => this.setState({ filterName: e.target.value })}
        />
        <button
          onClick={() => this.props.filterChange(this.state.filterName)}
          className="btnSearch"
        >
          Rechercher
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    arr: state.announce.productArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterChange: type => dispatch(filterChange(type))
    // onFilterBrand: title => dispatch(filterBrand(title))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
