import React from 'react';
import { CheckCircle, ShieldCheck, Clock, Award } from 'lucide-react';
import './FeatureHighlights.css';

const FeatureHighlights = () => {
    const features = [
        {
            icon: Award,
            title: 'Best Price Guarantee',
            description: "Find a lower price? We'll match it."
        },
        {
            icon: CheckCircle,
            title: 'Instant Booking',
            description: 'Confirm your trip in just a few clicks.'
        },
        {
            icon: Clock,
            title: 'Easy Cancellation',
            description: 'Plans change? Cancel with ease.'
        },
        {
            icon: ShieldCheck,
            title: '24/7 Support',
            description: "We're here to help, anytime."
        }
    ];

    return (
        <section className="features-section">
            <div className="features-grid">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Icon size={28} />
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeatureHighlights;
