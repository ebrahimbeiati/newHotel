import { API_ENDPOINTS, API_TIMEOUT, HTTP_STATUS } from '../constants/api';
import fakeBookingsData from '../data/fakeBookings.json';

class BookingService {
  async fetchBookings() {
    try {
      // Try external API first
      const response = await this.fetchWithTimeout(API_ENDPOINTS.BOOKINGS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === HTTP_STATUS.OK) {
        return await response.json();
      }
      
      throw new Error(`API returned status: ${response.status}`);
    } catch (error) {
      console.warn('External API failed, using fallback data:', error.message);
      
      // Fallback to local data
      try {
        const localResponse = await this.fetchWithTimeout(API_ENDPOINTS.LOCAL_BOOKINGS);
        if (localResponse.status === HTTP_STATUS.OK) {
          return await localResponse.json();
        }
      } catch (localError) {
        console.warn('Local API also failed, using static data:', localError.message);
      }
      
      // Final fallback to static data
      return fakeBookingsData;
    }
  }

  async fetchWithTimeout(url, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async createBooking(bookingData) {
    // In a real app, this would make an API call
    console.log('Creating booking:', bookingData);
    return { ...bookingData, id: Date.now() };
  }

  async updateBooking(id, bookingData) {
    // In a real app, this would make an API call
    console.log('Updating booking:', id, bookingData);
    return { ...bookingData, id };
  }

  async deleteBooking(id) {
    // In a real app, this would make an API call
    console.log('Deleting booking:', id);
    return { success: true };
  }
}

export default new BookingService();
