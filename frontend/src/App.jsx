import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import Flights from './pages/Flights/Flights';
import Trains from './pages/Trains/Trains';
import Hotels from './pages/Hotels/Hotels';
import PlanTrip from './pages/PlanTrip/PlanTrip';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = ['/', '/signup'].includes(location.pathname);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!hideLayout && <Navbar />}
      <div style={{ flex: 1 }}>
        {children}
      </div>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plan" element={<PlanTrip />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
