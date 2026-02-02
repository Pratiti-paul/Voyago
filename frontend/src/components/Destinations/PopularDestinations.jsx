import React from 'react';
import { ChevronRight } from 'lucide-react';
import './PopularDestinations.css';

const PopularDestinations = () => {
    const destinations = [
        { name: 'Goa', price: '₹4,500', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000' },
        { name: 'Maldives', price: '₹15,000', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000' },
        { name: 'Paris', price: '₹45,000', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000' },
        { name: 'Dubai', price: '₹12,000', img: 'https://images.unsplash.com/photo-1512453979798-5ea932a88468?q=80&w=1000' },
    ];

    return (
        <section className="section-container">
            <div className="section-header">
                <h2>Popular Destinations</h2>
                <a href="#" className="view-all">View All <ChevronRight size={16} /></a>
            </div>
            <div className="destinations-grid">
                {destinations.map((dest, index) => (
                    <div key={index} className="destination-card">
                        <img src={dest.img} alt={dest.name} />
                        <div className="dest-info">
                            <h3>{dest.name}</h3>
                            <p>Starting from <strong>{dest.price}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularDestinations;
