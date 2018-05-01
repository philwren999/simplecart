import React from "react";
import { render } from "react-dom";
import Cart from "./components/cart.js";
import "../style/site.css";

class SimpleStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        { id: 0, name: "Milk", count: 2, itemCost: 1.5 },
        { id: 1, name: "Eggs", count: 22, itemCost: 0.2 },
        { id: 2, name: "Cheese", count: 1.5, itemCost: 2.1 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h3>Cart</h3>
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}

render(<SimpleStore />, document.getElementById("root"));
