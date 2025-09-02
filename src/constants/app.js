// Application Constants
export const APP_CONFIG = {
  NAME: 'Hotel Booking System',
  VERSION: '1.0.0',
  THEME: {
    LIGHT: 'light',
    DARK: 'dark'
  }
};

export const BOOKING_STATUS = {
  ACTIVE: 'active',
  UPCOMING: 'upcoming',
  PAST: 'past',
  ALL: 'all'
};

export const SORT_OPTIONS = {
  ID: 'id',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  CHECK_IN: 'checkInDate',
  ROOM_ID: 'roomId'
};

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc'
};

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  ROOM_ID_MIN: 1,
  ROOM_ID_MAX: 100,
  SEARCH_DEBOUNCE_MS: 300
};
