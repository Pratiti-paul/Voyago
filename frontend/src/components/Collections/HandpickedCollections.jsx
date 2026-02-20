import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HandpickedCollections.css';

// Import local assets
import delhiImg from '../../assets/collections/delhi.png';
import mumbaiImg from '../../assets/collections/mumbai.png';
import beachImg from '../../assets/collections/beach.png';
import weekendImg from '../../assets/collections/weekend.png';
import hillsImg from '../../assets/collections/hills.png';

const HandpickedCollections = () => {
    const scrollRef = useRef(null);

    const collections = [
        {
            id: 1,
            badge: 'TOP 8',
            title: 'Stays in & Around Delhi for a Weekend Getaway',
            image: delhiImg,
        },
        {
            id: 2,
            badge: 'TOP 9',
            title: 'Stays in & Around Mumbai for a Weekend Getaway',
            image: mumbaiImg,
        },
        {
            id: 3,
            badge: 'TOP 11',
            title: 'Beach Destinations',
            image: beachImg,
        },
        {
            id: 4,
            badge: 'TOP 11',
            title: 'Weekend Getaways',
            image: weekendImg,
        },
        {
            id: 5,
            badge: 'TOP 11',
            title: 'Hill Stations',
            image: hillsImg,
        },
        {
            id: 6,
            badge: 'Trending',
            title: 'Luxury Resorts for a Royal Stay',
            image: hillsImg, // Reusing hills for trending or I could generate one more
        }
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 400;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="collections-section">
            <div className="collections-header">
                <div className="header-text">
                    <h2>Handpicked Collections for You</h2>
                    <p>Curated stays and destinations based on trending searches</p>
                </div>
                <div className="scroll-controls">
                    <button className="scroll-btn" onClick={() => scroll('left')} aria-label="Scroll Left">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="scroll-btn" onClick={() => scroll('right')} aria-label="Scroll Right">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div className="collections-container" ref={scrollRef}>
                {collections.map((item) => (
                    <div key={item.id} className="collection-card-wrapper">
                        <div className="collection-card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-overlay"></div>
                            <div className="card-badge">{item.badge}</div>
                            <div className="card-content">
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                        <div className="card-depth-effect"></div>
                    </div>
                ))}
            </div>
            
            <div className="scroll-dots">
                {collections.map((_, index) => (
                    <span key={index} className="dot"></span>
                ))}
            </div>
        </section>
    );
};

export default HandpickedCollections;
