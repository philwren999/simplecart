import React from "react";
import Item from "./item.js";
import Total from "./total.js";

export default class Cart extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Item</th>
          <th>Count</th>
          <th>Item Price</th>
          <th>Total Cost</th>
        </tr>
        {this.props.cart.map(cartItem => {
          return <Item item={cartItem} />;
        })}
        <Total cart={this.props.cart} />
      </table>
    );
  }
}
