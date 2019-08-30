import React, { Component } from "react";
import { connect } from "react-redux";
import { add, change } from "./redux/action";

class Announce extends Component {
  handleChkoupi = event => {
    this.props.changer(event.target.value);
  };

  handleAdd = () => {
    console.log(this.props.todos);
    this.props.ajouter();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.handleChkoupi}
        ></input>
        <button onClick={this.handleAdd}>add</button>
        <div>
          {this.props.todos.map(element => (
            <ul>
              <li>{element}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    inputValue: state.announce.inputValue,
    todos: state.announce.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ajouter: () => dispatch(add()),
    changer: inputValue => dispatch(change(inputValue))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Announce);
