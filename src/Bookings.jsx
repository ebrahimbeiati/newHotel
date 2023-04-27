
import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [showAddBookingForm, setShowAddBookingForm] = useState(false);

  useEffect(() => {
    console.log("Fetching Information... ");
    fetch("http://localhost:3001/bookings")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setBookings(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const search = (searchVal) => {
    const filterBookings = bookings.filter(
      (booking) =>
        booking.surname.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filterBookings);
  };

  const handleToggleAddBookingForm = () => {
    setShowAddBookingForm(!showAddBookingForm);
  };

const [nextId, setNextId] = useState(1);

const handleAddBooking = (e) => {
  e.preventDefault();

  // Extract values from form fields
  const firstName = e.target.elements.firstname.value;
  const lastName = e.target.elements.lastname.value;
  const email = e.target.elements.email.value;
  const roomId = e.target.elements.roomId.value;
  const checkInDate = e.target.elements.checkInDate.value;
  const checkOutDate = e.target.elements.checkOutDate.value;

  // Validate required fields
  if (!firstName || !lastName || !email || !roomId) {
    alert("Please fill in all required fields.");
    return;
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
  setNextId(nextId + 1);

  // Reset form fields and hide add booking form
  e.target.reset();
  setShowAddBookingForm(false);
};


  return (
    <div className="App-content">
      <Search search={search} />

      <button onClick={handleToggleAddBookingForm}>
        {showAddBookingForm ? "Hide Form" : "Add Booking"}
      </button>

      {showAddBookingForm && (
        <form onSubmit={handleAddBooking}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastname" placeholder="Last Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input type="text" name="roomId" placeholder="Room ID" required />
          <input
            type="date"
            name="checkInDate"
            placeholder="Check-in Date"
            required
          />
          <input
            type="date"
            name="checkOutDate"
            placeholder="Check-out Date"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check-in</th>
              <th scope="col">Check-out</th>
              <th scope="col">Nights</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <SearchResults key={booking.id} results={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
