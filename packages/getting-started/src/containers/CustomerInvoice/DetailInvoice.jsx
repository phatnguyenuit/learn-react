import React, { Component } from "react";

class DetailInvoice extends Component {
  render() {
    const { productName, price, quantity } = this.props.detailInvoice;
    const { onChangeInput } = this.props;

    return (
      <tr>
        <td>{productName}</td>
        <td>
          <input
            type="number"
            name="price"
            value={price}
            onChange={onChangeInput}
          />
        </td>
        <td>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={onChangeInput}
          />
        </td>
        <td>{price * quantity}</td>
      </tr>
    );
  }
}

export default DetailInvoice;
