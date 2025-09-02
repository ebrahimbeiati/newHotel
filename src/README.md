# Hotel Booking System - Professional Structure

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── forms/           # Form components
│   │   ├── BookingForm.jsx
│   │   └── Search.jsx
│   ├── layout/          # Layout components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── ui/              # UI components
│   │   ├── BookingCard.jsx
│   │   ├── CityCard.jsx
│   │   ├── CustomerProfile.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── MenuItem.jsx
│   │   ├── OrderHistory.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── RestaurantHeader.jsx
│   │   └── SearchResults.jsx
│   └── index.js         # Component exports
├── constants/           # Application constants
│   ├── api.js          # API configuration
│   ├── app.js          # App constants
│   └── index.js        # Constant exports
├── hooks/              # Custom React hooks
│   └── useBookings.js  # Booking management hook
├── pages/              # Main application pages
│   ├── Bookings.jsx    # Bookings page
│   ├── Restaurant.jsx  # Restaurant page
│   ├── TouristInfoCards.jsx
│   └── index.js        # Page exports
├── services/           # API services
│   └── bookingService.js
├── utils/              # Utility functions
│   ├── debounce.js     # Debounce/throttle utilities
│   ├── Nights.jsx      # Date calculations
│   ├── Order.jsx       # Order component
│   ├── validation.js   # Form validation
│   └── index.js        # Utility exports
├── data/               # Static data
│   └── fakeBookings.json
├── App.js              # Main app component
├── App.css             # Global styles
└── index.js            # React entry point
```

## 🎯 Architecture Principles

### 1. **Separation of Concerns**
- **Pages**: Main application screens
- **Components**: Reusable UI elements
- **Hooks**: Business logic and state management
- **Services**: API communication
- **Utils**: Pure utility functions
- **Constants**: Configuration and constants

### 2. **Component Organization**
- **Layout**: App-wide layout components
- **Forms**: Form-related components
- **UI**: Generic UI components

### 3. **Custom Hooks**
- `useBookings`: Manages all booking-related state and operations
- Encapsulates API calls, state management, and business logic

### 4. **Service Layer**
- `bookingService`: Handles all API communication
- Implements fallback strategies and error handling

### 5. **Utility Functions**
- Pure functions for common operations
- Validation, debouncing, date calculations

## 🚀 Benefits

1. **Scalability**: Easy to add new features and components
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Components can be easily reused
4. **Testability**: Each layer can be tested independently
5. **Team Collaboration**: Clear structure for multiple developers
6. **Performance**: Optimized with custom hooks and memoization

## 📦 Import Examples

```javascript
// Import components
import { Header, Footer, BookingCard } from './components';

// Import pages
import { Bookings, Restaurant } from './pages';

// Import utilities
import { debounce, validateBookingForm } from './utils';

// Import constants
import { API_ENDPOINTS, BOOKING_STATUS } from './constants';

// Import hooks
import { useBookings } from './hooks/useBookings';
```

This structure follows React best practices and industry standards for professional applications.
