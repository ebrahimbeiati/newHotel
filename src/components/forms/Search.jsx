import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../../utils/debounce";
import { SORT_OPTIONS, SORT_ORDER, BOOKING_STATUS } from "../../constants/app";

const Search = ({ search, onFilterChange }) => {
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState(SORT_OPTIONS.ID);
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC);
  const [statusFilter, setStatusFilter] = useState(BOOKING_STATUS.ALL);

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((value) => {
      search(value);
    }, 300),
    [search]
  );

  useEffect(() => {
    debouncedSearch(searchInput);
  }, [searchInput, debouncedSearch]);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({ sortBy, sortOrder, statusFilter });
    }
  }, [sortBy, sortOrder, statusFilter, onFilterChange]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSortChange = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const clearSearch = () => {
    setSearchInput("");
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search by customer name, email, or room ID..."
          value={searchInput}
          onChange={handleSearchInput}
        />
        {searchInput && (
          <button 
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-none border-none cursor-pointer text-gray-400 text-xl hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        )}
      </div>
      
      <div className="filters-container">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full">
          <label className="text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap">
            Sort by:
          </label>
          <select 
            className="filter-select w-full sm:w-auto"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="firstName">First Name</option>
            <option value="surname">Last Name</option>
            <option value="checkInDate">Check-in Date</option>
            <option value="roomId">Room ID</option>
          </select>
          
          <button 
            className="btn btn-outline px-3 py-2 min-w-auto"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full">
          <label className="text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap">
            Status:
          </label>
          <select 
            className="filter-select w-full sm:w-auto"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Bookings</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
