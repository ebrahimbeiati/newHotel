import React from "react";

const OrderSummary = ({ orderSummary, totalAmount, showOrderSummary }) => {
  if (!showOrderSummary || Object.keys(orderSummary).length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No items in your order</h3>
        <p className="text-gray-500">Add some delicious items to see your order summary here!</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Order Summary</h3>
        </div>
        
        <div className="space-y-4 mb-6">
          {Object.entries(orderSummary).map(([item, details]) => (
            <div key={item} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">{item}</h4>
                <span className="text-sm opacity-80">${details.price.toFixed(2)} each</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                    Qty: {details.quantity}
                  </span>
                </div>
                <span className="text-xl font-bold">
                  ${details.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Total Amount:</span>
            <span className="text-3xl font-bold bg-white/20 rounded-2xl px-6 py-3">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
