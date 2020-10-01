import React, { Component } from "react";
import DetailInvoice from "./DetailInvoice";
import "./styles.css";

class CustomerInvoice extends Component {
  state = {
    invoices: [
      { productName: "A", price: 2000, quantity: 10 },
      { productName: "B", price: 1000, quantity: 5 },
    ],
    discount: 0,
    total: 0,
  };
  componentDidMount() {
    const { invoices } = this.state;
    const total = invoices.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    this.setState({ total });
  }

  handleChangeInputDiscount = (event) => {
    const { value } = event.target;
    this.setState({ discount: value });
  };

  handleChangeInputDetail = (invoiceIndex) => {
    return (event) => {
      const { value, name } = event.target;
      let { invoices } = this.state;
      invoices[invoiceIndex][name] = value;
      this.setState({ invoices });
    };
  };

  render() {
    const { invoices, discount, total } = this.state;
    return (
      <div class="container">
        <h3>Customer Invoice</h3>
        <label htmlFor="discount">Discount: </label>
        <input
          type="number"
          min="0"
          max="100"
          id="discount"
          name="discount"
          value={discount}
          onChange={this.handleChangeInputDiscount}
        />%
        <br />
        <table border="1">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <DetailInvoice
                key={invoice.productName}
                detailInvoice={invoice}
                onChangeInput={this.handleChangeInputDetail(index)}
              />
            ))}
            <tr>
              <td colSpan="4">Total: {(total * (100 - discount)) / 100}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default CustomerInvoice;
