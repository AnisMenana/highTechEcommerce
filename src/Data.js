import React, { Component } from "react";
import CardModel from "./CardModel";
import { product } from "./dataProduct";

class Data extends Component {
  render() {
    return (
      <div className="dataAnnonce">
        {product.map(e => (
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

export default Data;
