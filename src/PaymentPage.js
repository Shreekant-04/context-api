import React from "react";
import "./PaymentPage.css";
import { CartItems, ConditionalNavLink, TotalAmt } from "./App";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="123" required />
        </div>
        <button type="submit" disabled className="submitBtn">
          Submit Payment
        </button>
      </form>
      <CartItems />
      <TotalAmt />
    </div>
  );
};

export default PaymentPage;
