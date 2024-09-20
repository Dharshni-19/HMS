import React from 'react';

function RoomList({ rooms, bookRoom }) {
    return (
        <div className="room-list">
            <h2>Available Rooms</h2>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>
                        {room.type} - {room.available ? 'Available' : 'Booked'}
                        {room.available && <button onClick={() => bookRoom(room.id)}>Book</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RoomList;
