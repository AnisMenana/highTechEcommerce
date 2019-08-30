import React, { Component } from "react";
import { connect } from "react-redux";
import {
  add,
  changeTitle,
  changeCategory,
  changeBrend,
  changeDescription,
  changePrice,
  changeImgb,
  changeImga
} from "./redux/action";

class Announce extends Component {
  handleTitle = event => {
    this.props.onChangeTitle(event.target.value);
  };
  handleCategory = event => {
    this.props.onChangeCategory(event.target.value);
  };
  handleBrand = event => {
    this.props.onChangeBrand(event.target.value);
  };
  handleDescription = event => {
    this.props.onChangeDescription(event.target.value);
  };
  handlePrice = event => {
    this.props.onChangePrice(event.target.value);
  };
  handleImga = event => {
    this.props.onChangeImga(event.target.value);
  };
  handleImgb = event => {
    this.props.onChangeImgb(event.target.value);
  };

  handleAdd = () => {
    this.props.ajouter({
      title: this.props.title,
      category: this.props.category,
      brand: this.props.brand,
      description: this.props.description,
      price: this.props.price,
      imga: this.props.imga,
      imgb: this.props.imgb
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.title}
          onChange={this.handleTitle}
        ></input>
        <input
          type="text"
          value={this.props.category}
          onChange={this.handleCategory}
        ></input>
        <input
          type="text"
          value={this.props.brand}
          onChange={this.handleBrand}
        ></input>
        <input
          type="text"
          value={this.props.description}
          onChange={this.handleDescription}
        ></input>
        <input
          type="text"
          value={this.props.price}
          onChange={this.handlePrice}
        ></input>
        <input
          type="text"
          value={this.props.imga}
          onChange={this.handleImga}
        ></input>
        <input
          type="text"
          value={this.props.imgb}
          onChange={this.handleImgb}
        ></input>
        <button onClick={this.handleAdd}>add</button>
        <div>
          {this.props.todos.map(element => (
            <ul>
              <li>{element.title}</li>
              <li>{element.category}</li>
              <li>{element.brand}</li>
              <li>{element.description}</li>
              <li>{element.price}</li>
              <li>{element.imga}</li>
              <li>{element.imgb}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    title: state.announce.title,
    todos: state.announce.todos,
    category: state.announce.category,
    brand: state.announce.brand,
    description: state.announce.description,
    price: state.announce.price,
    imga: state.announce.imga,
    imgb: state.announce.imgb
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ajouter: announceCard => dispatch(add(announceCard)),
    onChangeTitle: title => dispatch(changeTitle(title)),
    onChangeCategory: category => dispatch(changeCategory(category)),
    onChangeBrand: brand => dispatch(changeBrend(brand)),
    onChangeDescription: description =>
      dispatch(changeDescription(description)),
    onChangePrice: price => dispatch(changePrice(price)),
    onChangeImga: imga => dispatch(changeImga(imga)),
    onChangeImgb: imgb => dispatch(changeImgb(imgb))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Announce);
