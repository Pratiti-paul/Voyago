import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/');
            return;
        }
        
        const user = JSON.parse(storedUser);
        if (user.role !== 'admin') {
            navigate('/home');
        } else {
            setAdmin(user);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    if (!admin) return null;

    return (
        <div className="admin-container">
            {/* Admin Sidebar */}
            <div className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <h2 className="admin-logo">Voyago Admin</h2>
                    <p className="admin-subtitle">Management Console</p>
                </div>
                
                <div className="sidebar-menu">
                    <div className="sidebar-item active">Dashboard Overview</div>
                    <div className="sidebar-item">User Management</div>
                    <div className="sidebar-item">Trip Inventory</div>
                    <div className="sidebar-item">Analytics & Reports</div>
                    <div className="sidebar-item">System Settings</div>
                </div>

                <div className="admin-signout-container">
                    <button className="admin-signout-button" onClick={handleLogout}>Sign Out</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="admin-main-content">
                <header className="admin-header">
                    <div>
                        <h1 style={{ margin: 0, fontSize: '2rem' }}>Dashboard Overview</h1>
                        <p style={{ color: 'var(--text-muted-grey)' }}>Welcome back, {admin.username}. Here me's what's happening today.</p>
                    </div>
                    <div className="system-status">
                        <div className="status-indicator"></div>
                        <span style={{ fontWeight: 'bold' }}>System Online</span>
                    </div>
                </header>

                <div className="stat-grid">
                    <StatCard title="Active Users" value="1,248" trend="+12%" type="positive" />
                    <StatCard title="Total Bookings" value="856" trend="+5%" type="positive" />
                    <StatCard title="Revenue" value="$42,500" trend="+18%" type="positive" />
                    <StatCard title="System Health" value="99.9%" trend="Stable" type="stable" />
                </div>

                <div className="admin-table-container">
                    <h3 style={{ marginBottom: '1.5rem' }}>Recent Administrative Logs</h3>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Admin</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>System configuration updated</td>
                                <td>{admin.username}</td>
                                <td>Just now</td>
                                <td><span className="status-success">Success</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, trend, type }) => (
    <div className="stat-card">
        <p className="stat-label">{title}</p>
        <h2 className="stat-value">{value}</h2>
        <span className={`stat-trend ${type}`}>{trend}</span>
    </div>
);

export default AdminDashboard;
