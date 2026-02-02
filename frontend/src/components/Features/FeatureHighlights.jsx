import React from 'react';
import { CheckCircle, ShieldCheck, Clock, Award } from 'lucide-react';
import './FeatureHighlights.css';

const FeatureHighlights = () => {
    return (
        <div className="features-section">
            <div className="feature-item">
                <div className="feature-icon"><Award size={24} /></div>
                <span>Best Price Guarantee</span>
            </div>
            <div className="feature-item">
                <div className="feature-icon"><CheckCircle size={24} /></div>
                <span>Instant Booking</span>
            </div>
            <div className="feature-item">
                <div className="feature-icon"><Clock size={24} /></div>
                <span>Easy Cancellation</span>
            </div>
            <div className="feature-item">
                <div className="feature-icon"><ShieldCheck size={24} /></div>
                <span>24x7 Customer Support</span>
            </div>
        </div>
    );
};

export default FeatureHighlights;
