import React from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarDays, CircleUserRound, MapPin, ChevronDown } from 'lucide-react';
import './Flights.css';

const Flights = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const from = query.get('from') || 'San Francisco (SFO)';
    const to = query.get('to') || 'London (LHR)';
    const date = query.get('date') || 'Oct 12 - Oct 19';

    const flightResults = [
        {
            id: 1,
            airline: 'British Airways',
            code: 'BA-286 • Boeing 787',
            depart: '19:25',
            departCode: 'SFO',
            duration: '10h 45m',
            stops: 'Non-stop',
            arrive: '13:10',
            arriveCode: 'LHR (+1)',
            badge: 'Cheapest',
            price: '$742',
        },
        {
            id: 2,
            airline: 'United Airlines',
            code: 'UA-930 • Airbus A350',
            depart: '14:05',
            departCode: 'SFO',
            duration: '13h 20m',
            stops: '1 stop in JFK',
            arrive: '10:25',
            arriveCode: 'LHR (+1)',
            badge: '',
            price: '$815',
        },
        {
            id: 3,
            airline: 'Virgin Atlantic',
            code: 'VS-20 • Airbus A330',
            depart: '22:45',
            departCode: 'SFO',
            duration: '10h 30m',
            stops: 'Non-stop',
            arrive: '16:15',
            arriveCode: 'LHR (+1)',
            badge: 'Best Value',
            price: '$894',
        },
    ];

    return (
        <div className="flights-results-page">
            <div className="flights-search-strip">
                <div className="search-pill route-pill">
                    <MapPin size={14} />
                    <span>{from} → {to}</span>
                </div>
                <div className="search-pill small-pill">
                    <CalendarDays size={14} />
                    <span>{date}</span>
                </div>
                <div className="search-pill small-pill">
                    <CircleUserRound size={14} />
                    <span>1 Adult</span>
                </div>
                <button className="update-search-btn">Update Search</button>
            </div>

            <div className="flights-layout">
                <aside className="flights-filters-panel">
                    <div className="filters-header">
                        <h3>Filters</h3>
                        <button type="button">Reset</button>
                    </div>

                    <div className="filter-block">
                        <h4>Stops</h4>
                        <label><input type="radio" name="stops" defaultChecked /> Non-stop</label>
                        <label><input type="radio" name="stops" /> 1 Stop</label>
                        <label><input type="radio" name="stops" /> 2+ Stops</label>
                    </div>

                    <div className="filter-block">
                        <h4>Airlines</h4>
                        <label><input type="checkbox" defaultChecked /> British Airways</label>
                        <label><input type="checkbox" defaultChecked /> United Airlines</label>
                        <label><input type="checkbox" /> Virgin Atlantic</label>
                    </div>

                    <div className="filter-block">
                        <h4>Cabin Class</h4>
                        <select>
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                        </select>
                    </div>

                    <div className="filter-block">
                        <h4>Price Range</h4>
                        <input type="range" min="450" max="2500" defaultValue="1200" />
                        <div className="price-range-labels">
                            <span>$450</span>
                            <span>$2,500</span>
                        </div>
                    </div>
                </aside>

                <main className="flights-results-panel">
                    <div className="results-headline-row">
                        <h2>
                            324 flights found <span>for {from} to {to}</span>
                        </h2>
                        <button className="sort-control" type="button">
                            Sort by: <strong>Cheapest</strong>
                            <ChevronDown size={15} />
                        </button>
                    </div>

                    <div className="flight-results-list">
                        {flightResults.map((flight) => (
                            <article key={flight.id} className="flight-result-card">
                                <div className="airline-meta">
                                    <div className="airline-logo">{flight.airline.split(' ').map((word) => word[0]).join('').slice(0, 2)}</div>
                                    <div>
                                        <h3>{flight.airline}</h3>
                                        <p>{flight.code}</p>
                                    </div>
                                </div>

                                <div className="time-block">
                                    <strong>{flight.depart}</strong>
                                    <span>{flight.departCode}</span>
                                </div>

                                <div className="route-line-block">
                                    <span>{flight.duration}</span>
                                    <div className="route-line" />
                                    <small>{flight.stops}</small>
                                </div>

                                <div className="time-block">
                                    <strong>{flight.arrive}</strong>
                                    <span>{flight.arriveCode}</span>
                                </div>

                                <div className="fare-block">
                                    {flight.badge && <em>{flight.badge}</em>}
                                    <strong>{flight.price}</strong>
                                    <span>round trip / adult</span>
                                    <button type="button">Select</button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="flights-pagination">
                        <button type="button">‹</button>
                        <button type="button" className="active">1</button>
                        <button type="button">2</button>
                        <button type="button">3</button>
                        <button type="button">›</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Flights;
