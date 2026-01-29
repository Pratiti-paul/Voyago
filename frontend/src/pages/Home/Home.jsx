import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/');
        } else {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.role !== 'user') {
                navigate('/admin');
            } else {
                setUser(parsedUser);
            }
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    if (!user) return null;

    return (
        <div className="home-container">
            

            <div className="home-content">
                <div className="home-card-main">
                    <h1 className="home-title">Welcome back, {user.username}!</h1>
                    <p className="home-subtitle">Where would you like to go next?</p>
                    
                    <div className="home-grid">
                        <div className="home-feature-card">
                            <h3>Trending Destinations</h3>
                            <p>Discover the most visited places this month.</p>
                        </div>
                        <div className="home-feature-card">
                            <h3>Customized Packages</h3>
                            <p>Travel plans tailored just for you.</p>
                        </div>
                        <div className="home-feature-card">
                            <h3>Travel Guides</h3>
                            <p>Learn tips and tricks from experienced travelers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
