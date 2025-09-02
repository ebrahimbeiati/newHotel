import React, { useState } from "react";
import MenuItem from "../components/ui/MenuItem";
import OrderSummary from "../components/ui/OrderSummary";
import OrderHistory from "../components/ui/OrderHistory";
import RestaurantHeader from "../components/ui/RestaurantHeader";

const Restaurant = () => {
  console.log("Restaurant component is rendering");
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderSummary, setOrderSummary] = useState({});
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const menuItems = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Handmade pasta with black truffle, parmesan, and fresh herbs",
      category: "Main Course",
      rating: 4.9,
      prepTime: "18-22 min",
      popular: true,
      chefSpecial: true,
      calories: 650,
      allergens: ["Gluten", "Dairy"]
    },
    {
      id: 2,
      name: "Wagyu Beef Steak",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Premium A5 Wagyu beef with roasted vegetables and red wine reduction",
      category: "Main Course",
      rating: 4.9,
      prepTime: "25-30 min",
      popular: true,
      chefSpecial: true,
      calories: 850,
      allergens: ["Dairy"]
    },
    {
      id: 3,
      name: "Lobster Thermidor",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Fresh Maine lobster with cognac cream sauce and gruyere cheese",
      category: "Main Course",
      rating: 4.8,
      prepTime: "20-25 min",
      popular: true,
      calories: 720,
      allergens: ["Shellfish", "Dairy", "Gluten"]
    },
    {
      id: 4,
      name: "Quinoa Buddha Bowl",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Organic quinoa with roasted vegetables, avocado, and tahini dressing",
      category: "Healthy",
      rating: 4.6,
      prepTime: "12-15 min",
      popular: false,
      vegan: true,
      calories: 420,
      allergens: ["Sesame"]
    },
    {
      id: 5,
      name: "Tuna Tartare",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Fresh yellowfin tuna with avocado, sesame, and yuzu dressing",
      category: "Appetizer",
      rating: 4.7,
      prepTime: "8-10 min",
      popular: true,
      calories: 280,
      allergens: ["Fish", "Sesame"]
    },
    {
      id: 6,
      name: "Chocolate Soufflé",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Warm chocolate soufflé with vanilla bean ice cream and berry compote",
      category: "Dessert",
      rating: 4.9,
      prepTime: "15-18 min",
      popular: true,
      calories: 580,
      allergens: ["Dairy", "Eggs", "Gluten"]
    },
    {
      id: 7,
      name: "Burrata Caprese",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
      category: "Appetizer",
      rating: 4.8,
      prepTime: "5-8 min",
      popular: true,
      calories: 320,
      allergens: ["Dairy"]
    },
    {
      id: 8,
      name: "Rack of Lamb",
      price: 38.99,
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Herb-crusted rack of lamb with rosemary jus and seasonal vegetables",
      category: "Main Course",
      rating: 4.7,
      prepTime: "22-28 min",
      popular: false,
      calories: 680,
      allergens: ["Dairy"]
    },
    {
      id: 9,
      name: "Coconut Panna Cotta",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Silky coconut panna cotta with passion fruit coulis and toasted coconut",
      category: "Dessert",
      rating: 4.6,
      prepTime: "3-5 min",
      popular: false,
      vegan: true,
      calories: 320,
      allergens: ["Coconut"]
    },
    {
      id: 10,
      name: "Oysters Rockefeller",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Fresh oysters with spinach, herbs, and hollandaise sauce",
      category: "Appetizer",
      rating: 4.5,
      prepTime: "12-15 min",
      popular: false,
      calories: 180,
      allergens: ["Shellfish", "Dairy", "Eggs"]
    }
  ];

  const handleOrderUpdate = (itemName, quantity, action, price) => {
    const change = action === 'add' ? 1 : -1;
    setTotalOrders(prev => prev + change);
    setTotalAmount(prev => prev + (change * price));
    
    // Update order summary
    setOrderSummary(prev => {
      const newSummary = { ...prev };
      if (!newSummary[itemName]) {
        newSummary[itemName] = { quantity: 0, price: price, total: 0 };
      }
      newSummary[itemName].quantity += change;
      newSummary[itemName].total = newSummary[itemName].quantity * price;
      
      // Remove items with 0 quantity
      if (newSummary[itemName].quantity <= 0) {
        delete newSummary[itemName];
      }
      
      return newSummary;
    });
    
    // Add to order history
    const orderEntry = {
      id: Date.now(),
      item: itemName,
      quantity: change,
      price: price,
      timestamp: new Date().toLocaleTimeString()
    };
    setOrderHistory(prev => [orderEntry, ...prev.slice(0, 9)]); // Keep last 10 orders
  };

  const clearAllOrders = () => {
    if (window.confirm("Are you sure you want to clear all orders?")) {
      setTotalOrders(0);
      setTotalAmount(0);
      setOrderHistory([]);
      setOrderSummary({});
      setShowOrderSummary(false);
      // Reset all individual order counts
      window.dispatchEvent(new CustomEvent('clearAllOrders'));
    }
  };

  // Get unique categories
  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  // Filter menu items
  const filteredMenuItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const checkout = () => {
    if (totalOrders === 0) {
      alert("Please add some items to your order first!");
      return;
    }
    
    const orderDetails = Object.entries(orderSummary)
      .map(([item, details]) => `${details.quantity}x ${item} - $${details.total.toFixed(2)}`)
      .join('\n');
    
    const message = `Order Summary:\n${orderDetails}\n\nTotal: $${totalAmount.toFixed(2)}\n\nProceed to checkout?`;
    
    if (window.confirm(message)) {
      alert(`Order placed successfully! Total: $${totalAmount.toFixed(2)}\nThank you for your order! 🎉`);
      clearAllOrders();
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <span className="text-2xl">🍽️</span>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Fine Dining Experience</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Culinary Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience world-class cuisine crafted by our award-winning chefs using the finest ingredients from around the globe
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="restaurant-controls mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
              <div className="search-box w-full sm:w-80">
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search our exquisite menu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="category-filter">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select min-w-48"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <RestaurantHeader
              totalOrders={totalOrders}
              totalAmount={totalAmount}
              showOrderSummary={showOrderSummary}
              onToggleSummary={() => setShowOrderSummary(!showOrderSummary)}
              onCheckout={checkout}
              onClearAll={clearAllOrders}
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="menu-grid mb-12">
          {filteredMenuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onOrderUpdate={handleOrderUpdate}
            />
          ))}
        </div>

        {/* Order Summary and History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OrderSummary
            orderSummary={orderSummary}
            totalAmount={totalAmount}
            showOrderSummary={showOrderSummary}
          />
          <OrderHistory orderHistory={orderHistory} />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
