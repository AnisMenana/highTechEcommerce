import React, { Component } from "react";
import CardModel from "./CardModel";
import { product } from "./dataProduct";
import { connect } from "react-redux";

class Data extends Component {
  render() {
    return (
      <div className="dataAnnonce">
        {this.props.productArray.map(e => (
          <CardModel
            imga={e.imga}
            imgb={e.imgb}
            title={e.title}
            description={e.description}
            price={e.price}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    productArray: state.announce.productArray
  };
};

export default connect(
  mapStateToProps,
  null
)(Data);
