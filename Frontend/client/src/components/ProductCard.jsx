import React from 'react';

const ProductCard = () => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '20px'
    }}>
      <img 
        src="https://picsum.photos/300/200" 
        alt="Product" 
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <div style={{ marginTop: '16px' }}>
        <h3 style={{ 
          fontSize: '1.2rem', 
          margin: '8px 0',
          color: '#333' 
        }}>
          Wireless Headphones
        </h3>
        <p style={{ 
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: '12px'
        }}>
          High-quality wireless headphones with noise cancellation
        </p>
        <div style={{
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: '#2c5282',
          marginBottom: '12px'
        }}>
          $99.99
        </div>
        <button 
          onClick={() => alert('Added to cart!')}
          style={{
            backgroundColor: '#4299e1',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '1rem'
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
