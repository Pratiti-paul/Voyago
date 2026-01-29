import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    if (!user) return null;

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: 'var(--primary-color)' }}>Welcome to Voyago, {user.username}!</h1>
            <p>Your email: {user.email}</p>
            <button 
                onClick={handleLogout}
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'var(--accent-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    marginTop: '20px'
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
