import React, { Component } from "react";
import { connect } from "react-redux";
import { add, changeTitle, changeCategory } from "./redux/action";

class Announce extends Component {
  handleTitle = event => {
    this.props.onChangeTitle(event.target.value);
  };
  handleCategory = event => {
    this.props.onChangeCategory(event.target.value);
  };

  handleAdd = () => {
    this.props.ajouter({
      title: this.props.title,
      category: this.props.category
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
        <button onClick={this.handleAdd}>add</button>
        <div>
          {this.props.todos.map(element => (
            <ul>
              <li>{element.title}</li>
              <li>{element.category}</li>
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
    category: state.announce.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ajouter: announceCard => dispatch(add(announceCard)),
    onChangeTitle: title => dispatch(changeTitle(title)),
    onChangeCategory: category => dispatch(changeCategory(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Announce);
