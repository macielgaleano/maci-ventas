import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

export default function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Maci ventas</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i
            title="Checkout"
            className="fa fa-shopping-basket"
            aria-hidden="true"
          ></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}
