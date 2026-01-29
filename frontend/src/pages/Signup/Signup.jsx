import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api';
import backgroundImage from '../../assets/background.png';
import './Signup.css';

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
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <div className="signup-container" style={containerStyle}>
            <div className="signup-overlay"></div>
            <div className="signup-form-card">
                <h2 style={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>Join Us</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                        className="signup-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        className="signup-input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="signup-input"
                    />
                    <select 
                        name="role" 
                        onChange={handleChange} 
                        className="signup-input"
                        value={formData.role}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit" className="signup-button">Sign Up</button>
                    <p style={{ marginTop: '15px', color: 'var(--text-muted-grey)' }}>
                        Already have an account? <span className="login-link" onClick={() => navigate('/')}>Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
