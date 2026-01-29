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
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-light-grey)', fontFamily: 'Georgia, serif' }}>
            {/* User Navigation */}
            <nav style={{ 
                backgroundColor: 'var(--bg-white)', 
                padding: '1rem 2rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
                <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>Voyago Traveler</h2>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-dark-grey)', fontWeight: 'bold' }}>Explore</span>
                    <span style={{ color: 'var(--text-muted-grey)' }}>My Trips</span>
                    <span style={{ color: 'var(--text-muted-grey)' }}>Bookmarks</span>
                    <button 
                        onClick={handleLogout}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'white',
                            color: 'var(--accent-color)',
                            border: '2px solid var(--accent-color)',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            </nav>

            <div style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ 
                    backgroundColor: 'var(--bg-white)', 
                    padding: '3rem', 
                    borderRadius: '20px', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                }}>
                    <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Welcome back, {user.username}!
                    </h1>
                    <p style={{ color: 'var(--text-muted-grey)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Where would you like to go next?
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        <div style={cardStyle}>
                            <h3>Trending Destinations</h3>
                            <p>Discover the most visited places this month.</p>
                        </div>
                        <div style={cardStyle}>
                            <h3>Customized Packages</h3>
                            <p>Travel plans tailored just for you.</p>
                        </div>
                        <div style={cardStyle}>
                            <h3>Travel Guides</h3>
                            <p>Learn tips and tricks from experienced travelers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    padding: '2rem',
    backgroundColor: 'var(--bg-light-grey)',
    borderRadius: '15px',
    textAlign: 'left',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    borderLeft: '5px solid var(--primary-color)'
};

export default Home;
