import React from 'react';
import './PopularDestinations.css';

const PopularDestinations = () => {
    const destinations = [
        { name: 'Goa',  img: 'https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg' },
        { name: 'Jaipur',  img: 'https://media.odynovotours.com/article/66000/hawa-mahal-palace-of-the-winds_65291.jpg' },
        { name: 'Paris',  img: 'https://cdn.americachip.com/wp-content/uploads/2023/01/paris-bandeira.jpg?strip=all&lossy=1&quality=92&webp=92&resize=1020%2C617&ssl=1' },
        { name: 'Manali',  img: 'https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg' },
        { name: 'Bali',  img: 'https://cdn.sanity.io/images/nxpteyfv/goguides/15486940194b45347ac5037248d2363d27dec5ad-1600x1066.jpg' },
        { name: 'Ladakh',  img: 'https://i0.wp.com/travelshoebum.com/wp-content/uploads/2015/11/dsc0426.jpg?ssl=1' },
        { name: 'Tokyo',  img: 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltc1564bc44f66a900/675e1262cbd7d6bc5f15c6b0/japan-725347-Header_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart' },
        { name: 'Kerala',  img: 'https://www.holidify.com/images/bgImages/MUNNAR.jpg' },
        { name: 'London', img: 'https://mr1.homeflow-assets.co.uk/files/site_asset/image/6865/3428/London.jpg' },
        { name: 'Rishikesh', img: 'https://s3.india.com/wp-content/uploads/2024/05/Feature-Image_-Rishikesh.jpg' },
    ];

    // Combine for a seamless infinite scroll loop
    const scrollItems = [...destinations, ...destinations];

    return (
        <section className="section-container">
            <div className="section-header">
                <h2>Popular Destinations</h2>
            </div>
            <div className="destinations-marquee">
                <div className="destinations-track">
                    {scrollItems.map((dest, index) => (
                        <div key={index} className="destination-card">
                            <img src={dest.img} alt={dest.name} />
                            <div className="dest-info">
                                <h3>{dest.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
