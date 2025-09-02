import { VALIDATION_RULES } from '../constants/app';

export const validateEmail = (email) => {
  return VALIDATION_RULES.EMAIL_REGEX.test(email);
};

export const validateRoomId = (roomId) => {
  const num = parseInt(roomId);
  return num >= VALIDATION_RULES.ROOM_ID_MIN && num <= VALIDATION_RULES.ROOM_ID_MAX;
};

export const validateDateRange = (checkIn, checkOut) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    isValid: checkInDate >= today && checkOutDate > checkInDate,
    errors: {
      checkInPast: checkInDate < today,
      checkOutBeforeCheckIn: checkOutDate <= checkInDate
    }
  };
};

export const validateBookingForm = (formData) => {
  const errors = {};

  if (!formData.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!formData.surname?.trim()) {
    errors.surname = 'Last name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.roomId) {
    errors.roomId = 'Room ID is required';
  } else if (!validateRoomId(formData.roomId)) {
    errors.roomId = `Room ID must be between ${VALIDATION_RULES.ROOM_ID_MIN} and ${VALIDATION_RULES.ROOM_ID_MAX}`;
  }

  if (!formData.checkInDate) {
    errors.checkInDate = 'Check-in date is required';
  }

  if (!formData.checkOutDate) {
    errors.checkOutDate = 'Check-out date is required';
  }

  if (formData.checkInDate && formData.checkOutDate) {
    const dateValidation = validateDateRange(formData.checkInDate, formData.checkOutDate);
    if (!dateValidation.isValid) {
      if (dateValidation.errors.checkInPast) {
        errors.checkInDate = 'Check-in date cannot be in the past';
      }
      if (dateValidation.errors.checkOutBeforeCheckIn) {
        errors.checkOutDate = 'Check-out date must be after check-in date';
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
