import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Zap, TrainFront, Wifi, Utensils, BatteryCharging } from 'lucide-react';
import './Trains.css';

const Trains = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const from = query.get('from') || 'London St Pancras Intl.';
    const to = query.get('to') || 'Paris Gare du Nord';
    const date = query.get('date') || 'Oct 25';

    const trains = [
        {
            id: 1,
            name: 'Eurostar 9024',
            type: 'High Speed',
            depart: '08:30',
            from: 'London',
            duration: '2h 16m',
            routeType: 'Direct',
            arrive: '10:46',
            to: 'Paris',
            price: '$74.99',
            status: 'Available',
            leftSeats: '9 seats left',
        },
        {
            id: 2,
            name: 'TGV InOui 628',
            type: 'Express',
            depart: '11:15',
            from: 'London',
            duration: '2h 10m',
            routeType: 'Direct',
            arrive: '13:25',
            to: 'Paris',
            price: '$82.50',
            status: 'Many available',
            leftSeats: 'Best Value',
            featured: true,
        },
        {
            id: 3,
            name: 'SNCF Regional',
            type: 'Economy',
            depart: '14:20',
            from: 'London',
            duration: '3h 45m',
            routeType: '1 Stop',
            arrive: '18:05',
            to: 'Paris',
            price: '$45.00',
            status: 'Economy only',
            leftSeats: 'Limited',
        },
    ];

    return (
        <div className="trains-results-page">
            <div className="trains-search-strip">
                <span>{from} to {to} • {date} • 1 Adult</span>
            </div>

            <div className="trains-layout">
                <aside className="trains-filters-panel">
                    <div className="trains-filter-head">
                        <h3>Filters</h3>
                        <button type="button">Reset All</button>
                    </div>

                    <div className="trains-filter-block">
                        <h4>Price Range</h4>
                        <input type="range" min="20" max="450" defaultValue="220" />
                        <div><span>$20</span><span>$450</span></div>
                    </div>

                    <div className="trains-filter-block">
                        <h4>Departure Time</h4>
                        <div className="time-tags">
                            <button type="button" className="active">Early Morning</button>
                            <button type="button">Morning</button>
                            <button type="button">Afternoon</button>
                            <button type="button">Evening</button>
                        </div>
                    </div>

                    <div className="trains-filter-block">
                        <h4>Class Type</h4>
                        <label><input type="checkbox" defaultChecked /> Economy Class</label>
                        <label><input type="checkbox" /> Business Class</label>
                        <label><input type="checkbox" /> First Class</label>
                    </div>

                    <div className="trains-filter-block">
                        <h4>Amenities</h4>
                        <div className="amenity-tags">
                            <span>Free WiFi</span>
                            <span>Power Plug</span>
                            <span>Food/Drink</span>
                        </div>
                    </div>
                </aside>

                <main className="trains-results-panel">
                    <div className="trains-results-head">
                        <h2>32 Trains found</h2>
                        <p>{from} → {to}</p>
                        <button type="button">Sort by: <strong>Cheapest</strong> <ChevronDown size={14} /></button>
                    </div>

                    <div className="trains-results-list">
                        {trains.map((train) => (
                            <article key={train.id} className={`train-card ${train.featured ? 'featured' : ''}`}>
                                <div className="train-main-row">
                                    <div className="train-brand">
                                        <div className="train-logo">{train.featured ? <Zap size={16} /> : <TrainFront size={16} />}</div>
                                        <div>
                                            <h3>{train.name}</h3>
                                            <p>{train.type}</p>
                                        </div>
                                    </div>

                                    <div className="train-time"><strong>{train.depart}</strong><span>{train.from}</span></div>

                                    <div className="train-duration">
                                        <span>{train.duration}</span>
                                        <div className="line" />
                                        <small>{train.routeType}</small>
                                    </div>

                                    <div className="train-time"><strong>{train.arrive}</strong><span>{train.to}</span></div>

                                    <div className="train-fare">
                                        <em>{train.leftSeats}</em>
                                        <strong>{train.price}</strong>
                                        <span>{train.status}</span>
                                        <button type="button">Book Now</button>
                                    </div>
                                </div>

                                <div className="train-amenities-row">
                                    <span><Wifi size={13} /> WiFi</span>
                                    <span><Utensils size={13} /> Dining</span>
                                    <span><BatteryCharging size={13} /> Power</span>
                                    <button type="button">Details & Policy</button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="trains-more-wrap">
                        <button type="button">Show More Results</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Trains;
