import React, { useState, useEffect } from "react";

const Order = ({ orderType, price, onOrderUpdate }) => {
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    const handleClearAll = () => {
      setOrders(0);
    };
    
    window.addEventListener('clearAllOrders', handleClearAll);
    return () => window.removeEventListener('clearAllOrders', handleClearAll);
  }, []);

  const addOrder = () => {
    setOrders(prev => prev + 1);
    if (onOrderUpdate) {
      onOrderUpdate(orderType, 1, 'add', price);
    }
  };

  const removeOrder = () => {
    if (orders > 0) {
      setOrders(prev => prev - 1);
      if (onOrderUpdate) {
        onOrderUpdate(orderType, 1, 'remove', price);
      }
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <button 
        className="btn btn-outline"
        onClick={removeOrder}
        disabled={orders === 0}
        style={{ 
          padding: '0.5rem',
          minWidth: '40px',
          opacity: orders === 0 ? 0.5 : 1
        }}
      >
        −
      </button>
      
      <span style={{ 
        minWidth: '2rem', 
        textAlign: 'center',
        fontWeight: '600',
        color: 'var(--text-primary)'
      }}>
        {orders}
      </span>
      
      <button 
        className="btn btn-primary"
        onClick={addOrder}
        style={{ padding: '0.5rem', minWidth: '40px' }}
      >
        +
      </button>
    </div>
  );
};

export default Order;
