// Card.js
import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{
      border: '2px solid #333',
      borderRadius: '8px',
      padding: '16px',
      margin: '12px',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </div>
  );
};

export default Card;