import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Wifi, Dumbbell, Utensils, Snowflake, Heart } from 'lucide-react';
import './Hotels.css';

const Hotels = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const city = query.get('city') || 'Bali, Indonesia';
    const dates = query.get('dates') || 'Dec 12 - Dec 18';
    const guests = query.get('guests') || '2 Adults, 1 Room';

    const hotels = [
        {
            id: 1,
            name: 'The Royal Seminyak Retreat',
            location: 'Seminyak, Bali',
            rating: '5.0 (420 reviews)',
            price: '$259',
            oldPrice: '$320',
            tags: ['Free WiFi', 'Private Pool', 'Breakfast included'],
            notice: 'Free cancellation',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
        },
        {
            id: 2,
            name: 'Uluwatu Cliff Resort',
            location: 'Uluwatu, Bali',
            rating: '4.5 (1,240 reviews)',
            price: '$189',
            oldPrice: '',
            tags: ['Beachfront', 'Gym', '2 Restaurants'],
            notice: 'Only 2 rooms left!',
            image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
        },
        {
            id: 3,
            name: 'Sanur Beachfront Suites',
            location: 'Sanur, Bali',
            rating: '4.2 (85 reviews)',
            price: '$145',
            oldPrice: '',
            tags: ['Free WiFi', 'Swimming Pool'],
            notice: 'Instant Confirmation',
            image: 'https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=1600&auto=format&fit=crop',
        },
    ];

    return (
        <div className="hotels-results-page">
            <div className="hotels-top-strip">
                <div>
                    <label>Location</label>
                    <span>{city}</span>
                </div>
                <div>
                    <label>Dates</label>
                    <span>{dates}</span>
                </div>
                <div>
                    <label>Guests</label>
                    <span>{guests}</span>
                </div>
                <button type="button">Search</button>
            </div>

            <div className="hotels-layout">
                <aside className="hotels-filters-panel">
                    <div className="hotels-filter-head">
                        <h3>Filters</h3>
                        <button type="button">Clear all</button>
                    </div>

                    <div className="hotels-filter-block">
                        <h4>Price per night</h4>
                        <input type="range" min="50" max="450" defaultValue="280" />
                        <div><span>$50</span><span>$450+</span></div>
                    </div>

                    <div className="hotels-filter-block">
                        <h4>Star Rating</h4>
                        <label><input type="radio" name="rating" defaultChecked /> ★★★★★</label>
                        <label><input type="radio" name="rating" /> ★★★★☆</label>
                    </div>

                    <div className="hotels-filter-block">
                        <h4>Amenities</h4>
                        <label><input type="checkbox" /> <Wifi size={14} /> Free WiFi</label>
                        <label><input type="checkbox" /> <Dumbbell size={14} /> Gym</label>
                        <label><input type="checkbox" /> <Snowflake size={14} /> Air Conditioning</label>
                        <label><input type="checkbox" /> <Utensils size={14} /> Spa & Wellness</label>
                    </div>

                    <button className="apply-filter-btn" type="button">Apply Filters</button>
                </aside>

                <main className="hotels-results-panel">
                    <div className="hotels-results-head">
                        <div>
                            <h2>Hotels in {city}</h2>
                            <p>Found 128 properties matching your criteria</p>
                        </div>

                        <div className="head-tabs">
                            <button type="button" className="active">Recommended</button>
                            <button type="button">Price</button>
                            <button type="button">Rating</button>
                        </div>
                    </div>

                    <div className="hotel-card-list">
                        {hotels.map((hotel) => (
                            <article key={hotel.id} className="hotel-card">
                                <div className="hotel-image-wrap">
                                    <img src={hotel.image} alt={hotel.name} />
                                    <button type="button" className="favorite-btn"><Heart size={15} /></button>
                                </div>

                                <div className="hotel-content">
                                    <p className="hotel-rating">★★★★★ <span>{hotel.rating}</span></p>
                                    <h3>{hotel.name}</h3>
                                    <p className="hotel-location"><MapPin size={14} /> {hotel.location}</p>

                                    <div className="hotel-tag-list">
                                        {hotel.tags.map((tag) => <span key={tag}>{tag}</span>)}
                                    </div>

                                    <p className="hotel-notice">{hotel.notice}</p>
                                </div>

                                <div className="hotel-price-col">
                                    {hotel.oldPrice && <small>{hotel.oldPrice}</small>}
                                    <strong>{hotel.price}</strong>
                                    <span>per night • incl. taxes</span>
                                    <button type="button">View Details</button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="hotel-actions-row">
                        <button type="button" className="show-map-btn">Show map</button>
                    </div>

                    <div className="hotel-pagination">
                        <button type="button">‹</button>
                        <button type="button" className="active">1</button>
                        <button type="button">2</button>
                        <button type="button">3</button>
                        <span>...</span>
                        <button type="button">12</button>
                        <button type="button">›</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Hotels;
