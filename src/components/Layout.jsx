import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/Layout.css';

export default function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
