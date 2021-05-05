import React from 'react';
import '../styles/components/Information.css';
import { Link } from 'react-router-dom';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-Contant">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telofono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <Link to="/checkout/payment">
            <div className="Information-next">Pagar</div>
          </Link>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido: </h3>
        <div className="Information-element">
          <h4>Item name </h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
