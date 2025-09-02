import React from "react";
import { numberOfNight } from "../../utils/Nights";

const BookingCard = ({ booking, isSelected, onSelect, onEdit, onDelete }) => {
  const today = new Date().toISOString().split('T')[0];
  const checkIn = booking.checkInDate;
  const checkOut = booking.checkOutDate;
  
  let status = "upcoming";
  let statusColor = "var(--info-color)";
  
  if (checkIn <= today && checkOut >= today) {
    status = "active";
    statusColor = "var(--success-color)";
  } else if (checkOut < today) {
    status = "past";
    statusColor = "var(--text-muted)";
  }

  return (
    <tr 
      className={isSelected ? "selected-row" : ""}
      onClick={() => onSelect(booking)}
      style={{ cursor: 'pointer' }}
    >
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {numberOfNight({
          checkInDate: booking.checkInDate,
          checkOutDate: booking.checkOutDate,
        })}
      </td>
      <td>
        <span style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '1rem',
          fontSize: '0.75rem',
          fontWeight: '500',
          textTransform: 'uppercase',
          background: `${statusColor}20`,
          color: statusColor
        }}>
          {status}
        </span>
      </td>
      <td>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            className="btn btn-outline"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(booking);
            }}
            style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
          >
            Edit
          </button>
          <button 
            className="btn btn-danger"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(booking.id);
            }}
            style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BookingCard;
