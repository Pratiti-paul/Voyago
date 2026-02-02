import React from 'react';
import { Tag } from 'lucide-react';
import './DealsOffers.css';

const DealsOffers = () => {
    const deals = [
        { title: 'Summer Sale', desc: 'Flat 20% off on domestic flights', code: 'VOYAGO20' },
        { title: 'Hotel Bonanza', desc: 'Book 3 nights, pay for 2', code: 'FREEHOTE' },
        { title: 'Credit Card Offer', desc: '10% Cashback on HDFC cards', code: 'HDFC10' },
        { title: 'First Trip', desc: 'Special discount for new users', code: 'WELCOME' },
    ];

    return (
        <section className="section-container">
            <div className="section-header">
                <h2>Deals & Offers</h2>
            </div>
            <div className="deals-scroll">
                {deals.map((deal, index) => (
                    <div key={index} className="deal-card">
                        <div className="deal-badge"><Tag size={16} /> OFFER</div>
                        <h3>{deal.title}</h3>
                        <p>{deal.desc}</p>
                        <div className="promo-code">Code: {deal.code}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DealsOffers;
