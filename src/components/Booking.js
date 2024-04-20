// src/components/Booking.js

import React, { useState } from 'react';
import axios from 'axios';

function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [movieId, setMovieId] = useState('');
  const [seats, setSeats] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      email,
      movie: movieId,
      seats
    };

    try {
      await axios.post('http://localhost:5000/api/bookings', bookingData);
      alert('Booking successful!');
    } catch (err) {
      console.error(err);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Book Tickets</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Movie</label>
          <select className="form-control" value={movieId} onChange={(e) => setMovieId(e.target.value)} required>
            <option value="">Select Movie</option>
            {/* Fetch and display movies dynamically */}
          </select>
        </div>
        <div className="form-group">
          <label>Number of Seats</label>
          <input type="number" className="form-control" value={seats} onChange={(e) => setSeats(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
