import React, { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (_item, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addNewOrder = (payload) => {
    setState({ ...state, orders: [...state.orders, payload] });
  };

  const addToBuyer = (payload) => {
    setState({ ...state, buyer: [...state.buyer, payload] });
  };

  return { addToCart, removeFromCart, addToBuyer, addNewOrder, state };
};

export default useInitialState;
