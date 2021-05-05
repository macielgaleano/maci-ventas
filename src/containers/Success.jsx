import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra!</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">Google maps</div>
      </div>
    </div>
  );
};

export default Success;
