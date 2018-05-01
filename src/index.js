import React from "react";
import { render } from "react-dom";
import Cart from "./cart.js";

class SimpleStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [{ item: "bob", count: 12 }]
    };
  }

  render() {
    return (
      <div>
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}

render(<SimpleStore />, document.getElementById("root"));
