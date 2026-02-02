import React from 'react';
import { Star } from 'lucide-react';
import './TrustReviews.css';

const TrustReviews = () => {
    return (
        <section className="trust-section">
            <div className="trust-header">
                <h2>Trusted by thousands of travelers</h2>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="#ff9f00" stroke="none" />)}
                </div>
                <p className="rating-text">4.8/5 Average Rating</p>
            </div>
            <div className="testimonials">
                <div className="testimonial-card">
                    <p>"Seamless booking experience! The best prices I found online."</p>
                    <span>- Priya S.</span>
                </div>
                <div className="testimonial-card">
                    <p>"Customer support was incredibly helpful when I had to reschedule."</p>
                    <span>- Rahul K.</span>
                </div>
            </div>
        </section>
    );
};

export default TrustReviews;
