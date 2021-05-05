import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

export default function Header() {
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
      </div>
    </div>
  );
}
