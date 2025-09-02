import React, { useState, useMemo } from "react";
import { useBookings } from "../hooks/useBookings";
import Search from "../components/forms/Search";
import CustomerProfile from "../components/ui/CustomerProfile";
import BookingCard from "../components/ui/BookingCard";
import BookingForm from "../components/forms/BookingForm";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import { BOOKING_STATUS } from "../constants/app";

const Bookings = () => {
  const {
    bookings,
    loading,
    error,
    searchBookings,
    filterByStatus,
    sortBookings,
    addBooking,
    updateBooking,
    deleteBooking,
    fetchBookings
  } = useBookings();

  const [showAddBookingForm, setShowAddBookingForm] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [statusFilter, setStatusFilter] = useState(BOOKING_STATUS.ALL);

  const processedBookings = useMemo(() => {
    let filtered = [...bookings];

    // Apply status filter
    if (statusFilter !== BOOKING_STATUS.ALL) {
      const today = new Date().toISOString().split('T')[0];
      filtered = filtered.filter(booking => {
        const checkIn = booking.checkInDate;
        const checkOut = booking.checkOutDate;

        switch (statusFilter) {
          case BOOKING_STATUS.ACTIVE:
            return checkIn <= today && checkOut >= today;
          case BOOKING_STATUS.UPCOMING:
            return checkIn > today;
          case BOOKING_STATUS.PAST:
            return checkOut < today;
          default:
            return true;
        }
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === "checkInDate") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [bookings, statusFilter, sortBy, sortOrder]);

  const handleSearch = (searchTerm) => {
    searchBookings(searchTerm);
  };

  const handleFilterChange = (filters) => {
    if (filters.sortBy) setSortBy(filters.sortBy);
    if (filters.sortOrder) setSortOrder(filters.sortOrder);
    if (filters.statusFilter) setStatusFilter(filters.statusFilter);
  };

  const handleAddBooking = async (bookingData) => {
    try {
      await addBooking(bookingData);
      setShowAddBookingForm(false);
    } catch (error) {
      console.error('Failed to add booking:', error);
    }
  };

  const handleEditBooking = (booking) => {
    setEditingBooking(booking);
    setShowAddBookingForm(true);
  };

  const handleUpdateBooking = async (bookingData) => {
    try {
      await updateBooking(editingBooking.id, bookingData);
      setEditingBooking(null);
      setShowAddBookingForm(false);
    } catch (error) {
      console.error('Failed to update booking:', error);
    }
  };

  const handleDeleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteBooking(id);
      } catch (error) {
        console.error('Failed to delete booking:', error);
      }
    }
  };

  const handleSelectBooking = (booking) => {
    setSelectedBooking(booking);
  };

  if (loading) {
    return <LoadingSpinner message="Loading bookings..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchBookings} />;
  }

  return (
    <div className="py-20 bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header">
          <div className="section-title">
            <h2>Hotel Bookings</h2>
            <p>Manage your reservations and explore our available rooms</p>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <button
            className="btn btn-primary"
            onClick={() => {
              setEditingBooking(null);
              setShowAddBookingForm(true);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add New Booking
          </button>
        </div>

      <Search
        search={handleSearch}
        onFilterChange={handleFilterChange}
      />

      {showAddBookingForm && (
        <div className="booking-form-section">
          <BookingForm
            showForm={showAddBookingForm}
            editingBooking={editingBooking}
            onSubmit={editingBooking ? handleUpdateBooking : handleAddBooking}
            onCancel={() => {
              setShowAddBookingForm(false);
              setEditingBooking(null);
            }}
          />
        </div>
      )}

      <div className="bookings-content">
        <div className="bookings-table">
          <table className="modern-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
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
                  onSelect={handleSelectBooking}
                  onEdit={handleEditBooking}
                  onDelete={handleDeleteBooking}
                />
              ))}
            </tbody>
          </table>
        </div>

        {selectedBooking && (
          <div className="customer-profile-section">
            <CustomerProfile booking={selectedBooking} />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Bookings;