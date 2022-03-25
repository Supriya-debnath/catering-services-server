import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Banner from '../../Banner/Banner';
import OurTeam from '../../OurTeam/OurTeam';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurTeam></OurTeam>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;