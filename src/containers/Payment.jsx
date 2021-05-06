import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const paypalOptions = {
    clientId:
      'AaCvaE6R16MQZzK3K4QqRSHfnD4fxTHXBoszySF8Tes300K95ck9rZSKe_zAZHAXXZkENoKMk8gXuys7',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = (cart) => {
    const reducer = (acc, cur) => acc + cur.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => {
          <div className="Payment-Item" key={item.title}>
            <div className="PaymentElement">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>;
        })}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={() => handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={() => console.log('Success')}
            onPaymentError={() => console.log('Error')}
            onPaymentCancel={() => console.log('USer cancel')}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
