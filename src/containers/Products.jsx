import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';

const Products = ({ products }) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={Product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
