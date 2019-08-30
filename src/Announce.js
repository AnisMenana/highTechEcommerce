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
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Navbar from "./Navbar";
import ParticleComponent from "./ParticleComponent";

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
        <Navbar />
        <ParticleComponent />
        <div className="inputContainer">
          <div className="inputBox">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Titre:</Label>
                <Input
                  type="text"
                  value={this.props.title}
                  onChange={this.handleTitle}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Category:</Label>
                <Input
                  type="text"
                  value={this.props.category}
                  onChange={this.handleCategory}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Brand:</Label>
                <Input
                  type="text"
                  value={this.props.brand}
                  onChange={this.handleBrand}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Description:</Label>
                <Input
                  type="text"
                  value={this.props.description}
                  onChange={this.handleDescription}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Prix:</Label>
                <Input
                  type="text"
                  value={this.props.price}
                  onChange={this.handlePrice}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Image 1:</Label>
                <Input
                  type="text"
                  value={this.props.imga}
                  onChange={this.handleImga}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Image 2:</Label>
                <Input
                  type="text"
                  value={this.props.imgb}
                  onChange={this.handleImgb}
                ></Input>
              </FormGroup>
            </Form>

            <Button onClick={this.handleAdd} color="success" size="sm" active>
              Ajouter Annonce
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    title: state.announce.title,
    productArray: state.announce.productArray,
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
