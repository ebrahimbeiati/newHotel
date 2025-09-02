import { useState, useEffect, useCallback } from 'react';
import bookingService from '../services/bookingService';
import { BOOKING_STATUS, SORT_OPTIONS, SORT_ORDER } from '../constants/app';

export const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [originalBookings, setOriginalBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await bookingService.fetchBookings();
      setBookings(data);
      setOriginalBookings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const searchBookings = useCallback((searchTerm) => {
    if (!searchTerm.trim()) {
      setBookings(originalBookings);
      return;
    }

    const filtered = originalBookings.filter(booking =>
      booking.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.surname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id?.toString().includes(searchTerm) ||
      booking.roomId?.toString().includes(searchTerm)
    );
    setBookings(filtered);
  }, [originalBookings]);

  const filterByStatus = useCallback((status) => {
    if (status === BOOKING_STATUS.ALL) {
      setBookings(originalBookings);
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const filtered = originalBookings.filter(booking => {
      const checkIn = booking.checkInDate;
      const checkOut = booking.checkOutDate;

      switch (status) {
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
    setBookings(filtered);
  }, [originalBookings]);

  const sortBookings = useCallback((sortBy, sortOrder) => {
    const sorted = [...bookings].sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      // Handle date sorting
      if (sortBy === SORT_OPTIONS.CHECK_IN) {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      // Handle string sorting
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === SORT_ORDER.ASC) {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    setBookings(sorted);
  }, [bookings]);

  const addBooking = useCallback(async (bookingData) => {
    try {
      const newBooking = await bookingService.createBooking(bookingData);
      setBookings(prev => [...prev, newBooking]);
      setOriginalBookings(prev => [...prev, newBooking]);
      return newBooking;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const updateBooking = useCallback(async (id, bookingData) => {
    try {
      const updatedBooking = await bookingService.updateBooking(id, bookingData);
      setBookings(prev => prev.map(booking => 
        booking.id === id ? updatedBooking : booking
      ));
      setOriginalBookings(prev => prev.map(booking => 
        booking.id === id ? updatedBooking : booking
      ));
      return updatedBooking;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const deleteBooking = useCallback(async (id) => {
    try {
      await bookingService.deleteBooking(id);
      setBookings(prev => prev.filter(booking => booking.id !== id));
      setOriginalBookings(prev => prev.filter(booking => booking.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  return {
    bookings,
    originalBookings,
    loading,
    error,
    fetchBookings,
    searchBookings,
    filterByStatus,
    sortBookings,
    addBooking,
    updateBooking,
    deleteBooking
  };
};
