import React from 'react';
import { Plane, Hotel, ArrowRightLeft } from 'lucide-react';
import './RecentlyViewed.css';

const RecentlyViewed = () => {
    return (
        <section className="section-container compact">
            <div className="section-header">
                <h2>Recently Viewed</h2>
            </div>
            <div className="recent-list">
                <div className="recent-card">
                    <div className="recent-icon"><Plane size={20} /></div>
                    <div className="recent-details">
                        <h4>Delhi <ArrowRightLeft size={12}/> Mumbai</h4>
                        <p>24 Oct - 26 Oct</p>
                    </div>
                </div>
                <div className="recent-card">
                    <div className="recent-icon"><Hotel size={20} /></div>
                    <div className="recent-details">
                        <h4>Taj Lands End, Mumbai</h4>
                        <p>1 Room, 2 Guests</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentlyViewed;
