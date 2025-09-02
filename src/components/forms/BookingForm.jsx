import React, { useState, useEffect } from "react";
import { validateBookingForm } from "../../utils/validation";

const BookingForm = ({ 
  showForm, 
  editingBooking, 
  onSubmit, 
  onCancel 
}) => {
  if (!showForm) return null;

  return (
    <div style={{ 
      background: 'var(--bg-secondary)', 
      borderRadius: 'var(--border-radius)', 
      padding: '2rem', 
      marginBottom: '2rem',
      border: '1px solid var(--border-color)'
    }}>
      <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>
        {editingBooking ? "Edit Booking" : "Add New Booking"}
      </h3>
      <form onSubmit={onSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter first name"
              defaultValue={editingBooking?.firstName || ""}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
              Last Name *
            </label>
            <input 
              type="text" 
              name="lastName" 
              className="form-control"
              placeholder="Enter last name" 
              defaultValue={editingBooking?.surname || ""}
              required 
            />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email address"
              defaultValue={editingBooking?.email || ""}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
              Room ID *
            </label>
            <input 
              type="number" 
              name="roomId" 
              className="form-control"
              placeholder="Enter room ID (1-100)" 
              min="1" 
              max="100"
              defaultValue={editingBooking?.roomId || ""}
              required 
            />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
              Check-in Date *
            </label>
            <input
              type="date"
              name="checkInDate"
              className="form-control"
              defaultValue={editingBooking?.checkInDate || ""}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
              Check-out Date *
            </label>
            <input
              type="date"
              name="checkOutDate"
              className="form-control"
              defaultValue={editingBooking?.checkOutDate || ""}
              required
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button type="submit" className="btn btn-success">
            {editingBooking ? "Update Booking" : "Add Booking"}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
