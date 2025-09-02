
import React, { useEffect, useState, useMemo } from "react";
import Search from "./Search";

import CustomerProfile from "./components/CustomerProfile";
import BookingCard from "./components/BookingCard";
import BookingForm from "./components/BookingForm";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [originalBookings, setOriginalBookings] = useState([]);
  const [showAddBookingForm, setShowAddBookingForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);
  const [filters, setFilters] = useState({ sortBy: "id", sortOrder: "asc", statusFilter: "all" });

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log("Fetching Information... ");
      
      // Try external API first
      try {
        const response = await fetch("https://cyf-react.glitch.me/bookings");
        if (response.ok) {
          const data = await response.json();
          console.log("External API data:", data);
          if (Array.isArray(data)) {
            setBookings(data);
            setOriginalBookings(data);
            setLoading(false);
            return;
          }
        }
      } catch (externalErr) {
        console.log("External API failed, trying local data:", externalErr.message);
      }

      // Fallback to local JSON file
      const localData = await import("./data/fakeBookings.json");
      console.log("Local data:", localData.default);
      if (Array.isArray(localData.default)) {
        setBookings(localData.default);
        setOriginalBookings(localData.default);
      }
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError("Failed to load bookings data");
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  // Enhanced search with multiple fields
  const search = (searchVal) => {
    if (!searchVal.trim()) {
      setBookings(originalBookings);
      return;
    }
    
    const searchTerm = searchVal.toLowerCase();
    const filterBookings = originalBookings.filter(
      (booking) =>
        booking.surname.toLowerCase().includes(searchTerm) ||
        booking.firstName.toLowerCase().includes(searchTerm) ||
        booking.email.toLowerCase().includes(searchTerm) ||
        booking.roomId.toString().includes(searchTerm) ||
        booking.id.toString().includes(searchTerm)
    );
    setBookings(filterBookings);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Memoized filtered and sorted bookings
  const processedBookings = useMemo(() => {
    let filtered = [...bookings];

    // Apply status filter
    if (filters.statusFilter !== "all") {
      const today = new Date().toISOString().split('T')[0];
      filtered = filtered.filter(booking => {
        const checkIn = booking.checkInDate;
        const checkOut = booking.checkOutDate;
        
        switch (filters.statusFilter) {
          case "active":
            return checkIn <= today && checkOut >= today;
          case "upcoming":
            return checkIn > today;
          case "past":
            return checkOut < today;
          default:
            return true;
        }
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aVal = a[filters.sortBy];
      let bVal = b[filters.sortBy];
      
      // Handle date sorting
      if (filters.sortBy === "checkInDate" || filters.sortBy === "checkOutDate") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      // Handle string sorting
      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      
      if (filters.sortOrder === "asc") {
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      } else {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
      }
    });

    return filtered;
  }, [bookings, filters]);

  const handleToggleAddBookingForm = () => {
    setShowAddBookingForm(!showAddBookingForm);
  };

const [nextId, setNextId] = useState(1);

const handleAddBooking = (e) => {
  e.preventDefault();

  // Extract values from form fields
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const email = e.target.elements.email.value;
  const roomId = e.target.elements.roomId.value;
  const checkInDate = e.target.elements.checkInDate.value;
  const checkOutDate = e.target.elements.checkOutDate.value;

  // Validate required fields
  if (!firstName || !lastName || !email || !roomId) {
    alert("Please fill in all required fields.");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate room ID is a number
  const roomIdNum = parseInt(roomId);
  if (isNaN(roomIdNum) || roomIdNum < 1 || roomIdNum > 100) {
    alert("Room ID must be a number between 1 and 100.");
    return;
  }

  // Validate dates
  if (checkInDate && checkOutDate) {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }
  }

  // Add new booking object to state
  const newBooking = {
    id: nextId,
    title: "Mr", // Assuming title is not user input
    firstName,
    surname: lastName,
    email,
    roomId,
    checkInDate,
    checkOutDate,
  };
  setBookings([...bookings, newBooking]);
  setOriginalBookings([...originalBookings, newBooking]);
  setNextId(nextId + 1);

  // Reset form fields and hide add booking form
  e.target.reset();
  setShowAddBookingForm(false);
};

// Delete booking
const handleDeleteBooking = (bookingId) => {
  if (window.confirm("Are you sure you want to delete this booking?")) {
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    const updatedOriginalBookings = originalBookings.filter(booking => booking.id !== bookingId);
    setBookings(updatedBookings);
    setOriginalBookings(updatedOriginalBookings);
  }
};

// Edit booking
const handleEditBooking = (booking) => {
  setEditingBooking(booking);
  setShowAddBookingForm(true);
};

// Update booking
const handleUpdateBooking = (e) => {
  e.preventDefault();
  
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const email = e.target.elements.email.value;
  const roomId = e.target.elements.roomId.value;
  const checkInDate = e.target.elements.checkInDate.value;
  const checkOutDate = e.target.elements.checkOutDate.value;

  // Validate required fields
  if (!firstName || !lastName || !email || !roomId) {
    alert("Please fill in all required fields.");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate room ID is a number
  const roomIdNum = parseInt(roomId);
  if (isNaN(roomIdNum) || roomIdNum < 1 || roomIdNum > 100) {
    alert("Room ID must be a number between 1 and 100.");
    return;
  }

  // Validate dates
  if (checkInDate && checkOutDate) {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }
  }

  const updatedBooking = {
    ...editingBooking,
    firstName,
    surname: lastName,
    email,
    roomId,
    checkInDate,
    checkOutDate,
  };

  const updatedBookings = bookings.map(booking => 
    booking.id === editingBooking.id ? updatedBooking : booking
  );
  const updatedOriginalBookings = originalBookings.map(booking => 
    booking.id === editingBooking.id ? updatedBooking : booking
  );

  setBookings(updatedBookings);
  setOriginalBookings(updatedOriginalBookings);
  setEditingBooking(null);
  setShowAddBookingForm(false);
  e.target.reset();
};


  if (loading) {
    return <LoadingSpinner message="Loading bookings..." />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="App-content">
      <Search search={search} onFilterChange={handleFilterChange} />

      <div style={{ 
        background: 'var(--bg-primary)', 
        borderRadius: 'var(--border-radius)', 
        boxShadow: 'var(--shadow-md)', 
        margin: '2rem auto', 
        maxWidth: '1200px',
        padding: '1.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>
            Bookings ({processedBookings.length})
          </h2>
          <button 
            className="btn btn-primary"
            onClick={handleToggleAddBookingForm}
          >
            {showAddBookingForm ? "Cancel" : "Add New Booking"}
          </button>
        </div>

        <BookingForm
          showForm={showAddBookingForm}
          editingBooking={editingBooking}
          onSubmit={editingBooking ? handleUpdateBooking : handleAddBooking}
          onCancel={() => {
            setShowAddBookingForm(false);
            setEditingBooking(null);
          }}
        />

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Room ID</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Nights</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {processedBookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  isSelected={selectedBooking?.id === booking.id}
                  onSelect={setSelectedBooking}
                  onEdit={handleEditBooking}
                  onDelete={handleDeleteBooking}
                />
              ))}
            </tbody>
          </table>
          
          {processedBookings.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem', 
              color: 'var(--text-secondary)' 
            }}>
              <h3>No bookings found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      {selectedBooking && (
        <div style={{ 
          background: 'var(--bg-primary)', 
          borderRadius: 'var(--border-radius)', 
          boxShadow: 'var(--shadow-md)', 
          margin: '2rem auto', 
          maxWidth: '1200px',
          padding: '2rem'
        }}>
          <CustomerProfile customerData={selectedBooking} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
