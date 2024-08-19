import React, { useState, useEffect } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = JSON.parse(localStorage.getItem('user'));

            setUser(userData);
       
    }, [navigate]);

    return (
        <div className="homepage">
            {user ? (
                <div className="user-info">
                    <h1>Welcome, {user.name}!</h1>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
