import React from 'react';

const ProductCard = ({ name, price }) => {
  const handleBuyNow = () => {
    alert(`You purchased ${name} for ₹${price}`);
  };

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p className="price">₹{price}</p>
      <button onClick={handleBuyNow} className="buy-button">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;