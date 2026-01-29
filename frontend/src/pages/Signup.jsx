import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api';
import backgroundImage from '../assets/background.png';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'user' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData);
            alert('Signup successful! Please login.');
            navigate('/');
        } catch (error) {
            console.error(error);
            const message = error.response?.data?.error || 'Error signing up';
            alert(message);
        }
    };

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(8px)',
    };

    const formContainerStyle = {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '3rem',
        borderRadius: '15px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        width: '400px',
        textAlign: 'center',
        zIndex: 1
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        borderRadius: '8px',
        border: '1px solid #ddd',
        backgroundColor: 'var(--bg-light-grey)',
        fontSize: '16px',
        fontFamily: 'inherit'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'var(--secondary-color)',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '20px',
        transition: 'background-color 0.3s'
    };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div style={formContainerStyle}>
                <h2 style={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>Join Us</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <select 
                        name="role" 
                        onChange={handleChange} 
                        style={inputStyle}
                        value={formData.role}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit" style={buttonStyle}>Sign Up</button>
                    <p style={{ marginTop: '15px', color: 'var(--text-muted-grey)' }}>
                        Already have an account? <span style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => navigate('/')}>Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
