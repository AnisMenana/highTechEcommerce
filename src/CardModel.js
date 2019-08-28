import React, { Component } from "react";

class CardModel extends Component {
  render() {
    return (
      <div>
        <figure class="snip1396 green">
          <img src={this.props.imga} />
          <div class="image">
            <img src={this.props.imgb} />
          </div>
          <figcaption>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </figcaption>
          <div class="price">
            <p>{this.props.price}</p>
          </div>
        </figure>
      </div>
    );
  }
}

export default CardModel;
