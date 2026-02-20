import React, { useState } from 'react';
import { Plane, Hotel, TrainFront, Package, ArrowRightLeft, Calendar, User, Search, MapPin } from 'lucide-react';
import './HeroSearch.css';

const HeroSearch = () => {
    const [activeTab, setActiveTab] = useState('flights');
    const [fromCity, setFromCity] = useState('New York, NYC');
    const [toCity, setToCity] = useState('Paris, CDG');

    const handleSwap = () => {
        const temp = fromCity;
        setFromCity(toCity);
        setToCity(temp);
    };

    const handleSearch = () => {
        const newSearch = {
            id: Date.now(),
            type: activeTab,
            from: fromCity,
            to: toCity,
            date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        };

        const existingSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
        
        // Check if an identical search already exists
        const duplicateIndex = existingSearches.findIndex(s => 
            s.type === activeTab && 
            s.from === fromCity && 
            s.to === toCity
        );

        let updatedSearches;
        if (duplicateIndex !== -1) {
            // Remove the duplicate
            existingSearches.splice(duplicateIndex, 1);
            // Add the new one at the beginning
            updatedSearches = [newSearch, ...existingSearches].slice(0, 10);
        } else {
            // Just add at the beginning
            updatedSearches = [newSearch, ...existingSearches].slice(0, 10);
        }
        
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
        
        // Dispatch event so other components know
        window.dispatchEvent(new Event('storage'));
        
        // TODO: navigate to search results
        // navigate(`/search?from=${fromCity}&to=${toCity}`);
    };

    return (
        <div className="hero-search-section">
            <div className="search-widget-container">
                {/* Tabs */}
                <div className="glass-tabs">
                    <button 
                        className={`glass-tab ${activeTab === 'flights' ? 'active' : ''}`}
                        onClick={() => setActiveTab('flights')}
                    >
                        <Plane size={18} />
                        <span>Flights</span>
                    </button>
                    <button 
                        className={`glass-tab ${activeTab === 'hotels' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hotels')}
                    >
                        <Hotel size={18} />
                        <span>Hotels</span>
                    </button>
                    <button 
                        className={`glass-tab ${activeTab === 'trains' ? 'active' : ''}`}
                        onClick={() => setActiveTab('trains')}
                    >
                        <TrainFront size={18} />
                        <span>Trains</span>
                    </button>
                    <button 
                        className={`glass-tab ${activeTab === 'packages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('packages')}
                    >
                        <Package size={18} />
                        <span>Packages</span>
                    </button>
                </div>

                {/* Main Search Box */}
                <div className="glass-search-box">
                    <div className="row-locations">
                        <div className="input-group location-group">
                            <label>From</label>
                            <div className="input-wrapper">
                                <MapPin size={18} className="input-icon map-pin" />
                                <input 
                                    type="text" 
                                    value={fromCity}
                                    onChange={(e) => setFromCity(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="swap-button-container">
                            <button className="swap-btn" onClick={handleSwap}>
                                <ArrowRightLeft size={16} />
                            </button>
                        </div>

                        <div className="input-group location-group">
                            <label>To</label>
                            <div className="input-wrapper">
                                <MapPin size={18} className="input-icon map-pin" />
                                <input 
                                    type="text" 
                                    value={toCity}
                                    onChange={(e) => setToCity(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row-details">
                        <div className="input-group nice-date-group">
                            <div className="input-wrapper-simple">
                                <Calendar size={18} className="input-icon" />
                                <span className="label-text">Departure</span>
                            </div>
                        </div>

                        <div className="input-group nice-date-group">
                            <div className="input-wrapper-simple">
                                <Calendar size={18} className="input-icon" />
                                <span className="value-text">24 Apr - 30 Apr</span>
                            </div>
                        </div>

                        <button className="main-search-btn" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSearch;
