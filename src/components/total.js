import React from "react";

export default class Total extends React.Component {
  render() {
    const counter = (accumulator, currentValue) => {
      return accumulator.count + currentValue.count;
    };

    const calculator = (accumulator, currentValue) => {
      return accumulator.cost + currentValue.count * currentValue.itemCost;
    };

    const inital = { count: 0, cost: 0 };
    const reduced = this.props.cart.reduce(
      (accumulator, currentValue) => ({
        count: counter(accumulator, currentValue),
        cost: calculator(accumulator, currentValue)
      }),
      inital
    );

    return (
      <tr className="total">
        <td>Total</td>
        <td className="right">{reduced.count}</td>
        <td className="right" />
        <td className="right">{reduced.cost.toFixed(2)}</td>
      </tr>
    );
  }
}
