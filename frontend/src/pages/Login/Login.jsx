import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api';
import backgroundImage from '../../assets/background.png';
import './Login.css';

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
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <div className="login-container" style={containerStyle}>
            <div className="login-overlay"></div>
            <div className="login-form-card">
                <h2 style={{ color: formData.role === 'admin' ? 'var(--secondary-color)' : 'var(--primary-color)', marginBottom: '20px' }}>
                    {formData.role === 'admin' ? 'Admin Portal' : 'User Login'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <select 
                        name="role" 
                        onChange={handleChange} 
                        className={`role-select ${formData.role}`}
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
                        className="login-input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="login-input"
                    />
                    <button type="submit" className={`login-button ${formData.role}`}>Login</button>
                    <p style={{ marginTop: '15px', color: 'var(--text-muted-grey)' }}>
                        New user? <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
