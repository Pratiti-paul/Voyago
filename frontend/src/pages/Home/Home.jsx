import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSearch from '../../components/HeroSearch/HeroSearch';
import FeatureHighlights from '../../components/Features/FeatureHighlights';
import PopularDestinations from '../../components/Destinations/PopularDestinations';
import DealsOffers from '../../components/Deals/DealsOffers';
import RecentlyViewed from '../../components/RecentViewed/RecentlyViewed';
import MyTrips from '../../components/MyTrips/MyTrips';
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
            {/* 1. Main Search Section (Hero Area) */}
            <HeroSearch />

            {/* 2. Quick Feature Highlights */}
            <FeatureHighlights />

            <div className="main-content-wrapper">
                {/* 3. Popular Destinations */}
                <PopularDestinations />

                {/* 4. Deals & Offers */}
                <DealsOffers />

                <div className="dual-section-grid">
                    {/* 5. Recently Viewed */}
                    <RecentlyViewed />
                    
                    {/* 6. My Trips Snapshot */}
                    <MyTrips />
                </div>

                {/* 7. Reviews / Trust */}
                <TrustReviews />
            </div>
        </div>
    );
};

export default Home;
