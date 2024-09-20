import React from 'react';

function BookingForm() {
    return (
        <div className="booking-form">
            <h2>Book a Room</h2>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
}

export default BookingForm;
