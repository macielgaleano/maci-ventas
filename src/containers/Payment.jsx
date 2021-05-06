import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import '../styles/components/Payment.css';

const Payment = ({ history }) => {
  const { state, buyer, addNewOrder } = useContext(AppContext);
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

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer: buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
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
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
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
