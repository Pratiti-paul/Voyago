import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import backgroundImage from '../assets/background.png';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '', role: 'user' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login(formData);
            
            // Check if the role matches what was selected on login
            if (data.user.role !== formData.role) {
                alert(`This account does not have ${formData.role} privileges.`);
                return;
            }

            localStorage.setItem('user', JSON.stringify(data.user));
            if (data.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/home');
            }
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
        position: 'relative',
        fontFamily: 'Georgia, serif'
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
        backgroundColor: formData.role === 'admin' ? 'var(--secondary-color)' : 'var(--primary-color)',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '20px',
        transition: 'all 0.3s ease'
    };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div style={formContainerStyle}>
                <h2 style={{ color: formData.role === 'admin' ? 'var(--secondary-color)' : 'var(--primary-color)', marginBottom: '20px' }}>
                    {formData.role === 'admin' ? 'Admin Portal' : 'User Login'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <select 
                        name="role" 
                        onChange={handleChange} 
                        style={{...inputStyle, marginBottom: '20px', border: `2px solid ${formData.role === 'admin' ? 'var(--secondary-color)' : 'var(--primary-color)'}`}}
                        value={formData.role}
                    >
                        <option value="user">Login as User</option>
                        <option value="admin">Login as Admin</option>
                    </select>
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
