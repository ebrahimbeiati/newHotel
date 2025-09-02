import React from "react";

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem', 
      color: 'var(--danger-color)',
      background: 'var(--bg-primary)',
      borderRadius: 'var(--border-radius)',
      margin: '2rem auto',
      maxWidth: '600px',
      boxShadow: 'var(--shadow-md)'
    }}>
      <h3>Error Loading Data</h3>
      <p>{error}</p>
      {onRetry && (
        <button className="btn btn-primary" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
