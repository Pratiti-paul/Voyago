import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSearch from '../../components/HeroSearch/HeroSearch';
import FeatureHighlights from '../../components/Features/FeatureHighlights';
import PopularDestinations from '../../components/Destinations/PopularDestinations';
// import DealsOffers from '../../components/Deals/DealsOffers';
import RecentlyViewed from '../../components/RecentViewed/RecentlyViewed';
// import MyTrips from '../../components/MyTrips/MyTrips';
import TrustReviews from '../../components/TrustSection/TrustReviews';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [user] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (!user) {
            navigate('/');
        } else if (user.role !== 'user') {
            navigate('/admin');
        }
    }, [user, navigate]);

    if (!user) return null;

    return (
        <div className="home-page">
            <HeroSearch />
            <FeatureHighlights />

            <div className="main-content-wrapper">
                <PopularDestinations />

                <RecentlyViewed />

                <div className="dual-section-grid">
                    {/* <RecentlyViewed /> */}
                    {/* <MyTrips /> */}
                </div>

                <TrustReviews />
            </div>
        </div>
    );
};

export default Home;
