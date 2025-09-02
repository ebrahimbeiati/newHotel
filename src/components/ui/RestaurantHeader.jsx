import React from "react";

const RestaurantHeader = ({ 
  totalOrders, 
  totalAmount, 
  showOrderSummary, 
  onToggleSummary, 
  onCheckout, 
  onClearAll 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* Order Stats */}
      <div className="flex gap-3">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          <span className="font-semibold">{totalOrders} Items</span>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          <span className="font-semibold">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Action Buttons */}
      {totalOrders > 0 && (
        <div className="flex gap-2">
          <button 
            className="btn btn-outline px-4 py-2 text-sm font-medium"
            onClick={onToggleSummary}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {showOrderSummary ? 'Hide' : 'Show'} Summary
          </button>
          
          <button 
            className="btn bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={onCheckout}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            Checkout
          </button>
          
          <button 
            className="btn bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={onClearAll}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantHeader;
