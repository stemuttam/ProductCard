import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';

function App() {
  return (
    <div className="app">
      <ProductCard name="Wireless Headphones" price={2499} />
      <ProductCard name="Smart Watch" price={5999} />
      <ProductCard name="Bluetooth Speaker" price={1299} />
    </div>
  );
}

export default App;