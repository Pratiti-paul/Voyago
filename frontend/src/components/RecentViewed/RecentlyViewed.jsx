import React, { useState, useEffect } from 'react';
import { Plane, Hotel, TrainFront, Package, ArrowRightLeft } from 'lucide-react';
import './RecentlyViewed.css';

const RecentlyViewed = () => {

    const [recentItems, setRecentItems] = useState([]);

    useEffect(() => {
        const loadRecentItems = () => {
            const saved = localStorage.getItem('recentSearches');
            if (saved) {
                setRecentItems(JSON.parse(saved));
            }
        };

        loadRecentItems();

        window.addEventListener('storage', loadRecentItems);
        return () => window.removeEventListener('storage', loadRecentItems);
    }, []);

    const getIcon = (type) => {
        switch(type) {
            case 'hotels': return <Hotel size={20} />;
            case 'trains': return <TrainFront size={20} />;
            case 'packages': return <Package size={20} />;
            case 'flights':
            default: return <Plane size={20} />;
        }
    };

    if (recentItems.length === 0) {
        return null; // Don't show the section if nothing was viewed
    }

    return (
        <section className="section-container recent-viewed-section">
            <div className="section-header">
                <h2>Recently Searched</h2>
            </div>
            <div className="recent-list-container">
                <div className="recent-list-horizontal">
                    {recentItems.map((item) => (
                        <div className="recent-card-horizontal" key={item.id}>
                            <div className="recent-icon">{getIcon(item.type)}</div>
                            <div className="recent-details">
                                <h4>
                                    {item.from} <ArrowRightLeft size={12}/> {item.to}
                                </h4>
                                <p>{item.type === 'hotels' ? '1 Room, 2 Guests' : item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentlyViewed;
