import React from "react";

export default class Item extends React.Component {
  render() {
    const item = this.props.item;
    const cost = item.count * item.itemCost;

    return (
      <tr>
        <td>{item.name}</td>
        <td className="right">{item.count}</td>
        <td className="right">{item.itemCost.toFixed(2)}</td>
        <td className="right">{cost.toFixed(2)}</td>
      </tr>
    );
  }
}
