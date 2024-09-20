import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [rooms, setRooms] = useState([
        { id: 1, type: 'Single', available: true },
        { id: 2, type: 'Double', available: true },
        { id: 3, type: 'Dormitory', available: false },
    ]);

    const handleLogin = (role) => {
        setUserRole(role);
        setLoggedIn(true);
    };

    const bookRoom = (id) => {
        setRooms(rooms.map(room =>
            room.id === id ? { ...room, available: false } : room
        ));
    };

    return (
        <div className="App">
            <Header />
            {!loggedIn ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <>
                    <RoomList rooms={rooms} bookRoom={bookRoom} />
                    <BookingForm />
                </>
            )}
        </div>
    );
}

export default App;
