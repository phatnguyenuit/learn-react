import React, { useState, useEffect, useCallback } from "react";
import DetailInvoice from "./DetailInvoice";
import './styles.css';

function CustomerInvoiceFunctional() {
  const [state, setState] = useState({
    invoices: [
      { productName: "A", price: 2000, quantity: 10 },
      { productName: "B", price: 1000, quantity: 5 },
    ],
    discount: 0,
    total: 0,
  });

  const { invoices, discount, total } = state;

  useEffect(() => {
    const total = invoices.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setState((oldState) => ({ ...oldState, total }));
  }, [invoices, total]);

  const handleChangeInputDiscount = (event) => {
    const { value } = event.target;
    setState((oldState) => ({ ...oldState, discount: value }));
  };

  const handleChangeInputDetail = (invoiceIndex) => {
    return (event) => {
      const { value, name } = event.target;
      invoices[invoiceIndex][name] = value;
      setState((oldState) => ({ ...oldState, invoices }));
    };
  };

  const callback = useCallback(createCalculator(discount), [discount]);
  // const callback = useCallback((amount) => {
  //   return amount * (100 - discount) / 100;
  // }, [discount]);

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
        onChange={handleChangeInputDiscount}
      />
      %
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
              onChangeInput={handleChangeInputDetail(index)}
            />
          ))}
          <tr>
            <td colSpan="4">Total: {callback(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const createCalculator = (discount) => (amount) =>
  (amount * (100 - discount)) / 100;

export default CustomerInvoiceFunctional;
