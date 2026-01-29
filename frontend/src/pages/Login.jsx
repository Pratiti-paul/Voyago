import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import backgroundImage from '../assets/background.png';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login(formData);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert('Invalid credentials');
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
        fontSize: '16px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'var(--primary-color)',
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
                <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Welcome Back</h2>
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
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>Login</button>
                    <p style={{ marginTop: '15px', color: 'var(--text-muted-grey)' }}>
                        New user? <span style={{ color: 'var(--accent-color)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => navigate('/signup')}>Sign up</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
