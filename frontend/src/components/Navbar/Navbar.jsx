import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav className="navbar">
            <div className="navbar-left" onClick={() => navigate('/home')}>
                <img src={logo} alt="Voyago Logo" className="navbar-logo" />
                <h2 className="navbar-brand">Voyago</h2>
            </div>
            <div className="navbar-right">
                <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                <NavLink to="/flights" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Flights</NavLink>
                <NavLink to="/trains" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Trains</NavLink>
                <NavLink to="/hotels" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Hotels</NavLink>
                 <NavLink to="/plan" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Plan your trip</NavLink>
                <div className="account-container">
                    <button className="account-button" onClick={toggleDropdown}>
                        <span role="img" aria-label="account">👤</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="account-dropdown">
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
