import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'Georgia, serif' }}>
            {/* Admin Sidebar */}
            <div style={{ 
                width: '260px', 
                backgroundColor: 'var(--text-dark-grey)', 
                color: 'white', 
                padding: '2rem 0',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: '0 2rem', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--secondary-color)', margin: 0 }}>Voyago Admin</h2>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Management Console</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={sidebarItemStyleActive}>Dashboard Overview</div>
                    <div style={sidebarItemStyle}>User Management</div>
                    <div style={sidebarItemStyle}>Trip Inventory</div>
                    <div style={sidebarItemStyle}>Analytics & Reports</div>
                    <div style={sidebarItemStyle}>System Settings</div>
                </div>

                <div style={{ marginTop: 'auto', padding: '0 2rem' }}>
                    <button 
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: 'transparent',
                            color: 'var(--accent-color)',
                            border: '1px solid var(--accent-color)',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '3rem' }}>
                <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '2rem' }}>Dashboard Overview</h1>
                        <p style={{ color: 'var(--text-muted-grey)' }}>Welcome back, {admin.username}. Here's what's happening today.</p>
                    </div>
                    <div style={{ 
                        backgroundColor: 'white', 
                        padding: '10px 20px', 
                        borderRadius: '30px', 
                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4CAF50' }}></div>
                        <span style={{ fontWeight: 'bold' }}>System Online</span>
                    </div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                    <StatCard title="Active Users" value="1,248" trend="+12%" />
                    <StatCard title="Total Bookings" value="856" trend="+5%" />
                    <StatCard title="Revenue" value="$42,500" trend="+18%" />
                    <StatCard title="System Health" value="99.9%" trend="Stable" />
                </div>

                <div style={{ marginTop: '3rem', backgroundColor: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Recent Administrative Logs</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                                <th style={{ padding: '1rem' }}>Action</th>
                                <th style={{ padding: '1rem' }}>Admin</th>
                                <th style={{ padding: '1rem' }}>Time</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '1rem' }}>System configuration updated</td>
                                <td style={{ padding: '1rem' }}>{admin.username}</td>
                                <td style={{ padding: '1rem' }}>Just now</td>
                                <td style={{ padding: '1rem' }}><span style={{ color: '#4CAF50' }}>Success</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const sidebarItemStyle = {
    padding: '1rem 2rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    opacity: 0.7
};

const sidebarItemStyleActive = {
    ...sidebarItemStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderLeft: '4px solid var(--secondary-color)',
    opacity: 1,
    fontWeight: 'bold'
};

const StatCard = ({ title, value, trend }) => (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <p style={{ color: 'var(--text-muted-grey)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{title}</p>
        <h2 style={{ margin: '0 0 0.5rem 0' }}>{value}</h2>
        <span style={{ fontSize: '0.8rem', color: trend.startsWith('+') ? '#4CAF50' : '#2196F3' }}>{trend}</span>
    </div>
);

export default AdminDashboard;
