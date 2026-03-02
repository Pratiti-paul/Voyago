import React from 'react';
import { Star, Users, TrendingUp } from 'lucide-react';
import './TrustReviews.css';

const TrustReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Priya Sharma",
            location: "Mumbai, India",
            rating: 5,
            text: "Amazing experience booking my family trip! The prices are unbeatable and the customer service team helped me find the perfect flights.",
            travelType: "Family Trip",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
        },
        {
            id: 2,
            name: "Rahul Kapoor",
            location: "Delhi, India",
            rating: 5,
            text: "Booked a last-minute trip and they made it so easy. The platform is intuitive and I saved over 30% compared to other sites!",
            travelType: "Solo Travel",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
        },
        {
            id: 3,
            name: "Anjali & Vikram",
            location: "Bangalore, India",
            rating: 4,
            text: "Perfect honeymoon packages! Great deals on flights and hotels. Highly recommend for couples planning a getaway.",
            travelType: "Couple Trip",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali"
        }
    ];

    // Rating breakdown data
    const ratingBreakdown = [
        { stars: 5, percentage: 72, count: 7200 },
        { stars: 4, percentage: 18, count: 1800 },
        { stars: 3, percentage: 7, count: 700 },
        { stars: 2, percentage: 2, count: 200 },
        { stars: 1, percentage: 1, count: 100 }
    ];

    const StarRating = ({ rating }) => (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map(i => (
                <Star
                    key={i}
                    size={16}
                    className={i <= rating ? 'star-filled' : 'star-empty'}
                    fill={i <= rating ? '#f97316' : 'none'}
                    stroke={i <= rating ? '#f97316' : '#e5e7eb'}
                />
            ))}
        </div>
    );

    return (
        <section className="customer-reviews-section">
            {/* Header */}
            <div className="reviews-header">
                <h2 className="reviews-title">What Our Travelers Say</h2>
                <p className="reviews-subtitle">Trusted by thousands of happy travelers across India</p>
            </div>

            {/* Review Cards */}
            <div className="reviews-grid">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-card-header">
                            <img 
                                src={review.avatar} 
                                alt={review.name}
                                className="reviewer-avatar"
                            />
                            <div className="reviewer-info">
                                <h3 className="reviewer-name">{review.name}</h3>
                                <p className="reviewer-location">{review.location}</p>
                            </div>
                        </div>

                        <StarRating rating={review.rating} />

                        <p className="review-text">{review.text}</p>

                        <div className="travel-type-tag">
                            {review.travelType}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustReviews;
