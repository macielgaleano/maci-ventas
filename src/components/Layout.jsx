import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ Children }) {
  return (
    <div className="main">
      <Header />
      {Children}
      <Footer />
    </div>
  );
}
