import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Banner from '../../Banner/Banner';
import Menus from '../../Menus/Menus';
import OurServices from '../../OurServices/OurServices';
import OurTeam from '../../OurTeam/OurTeam';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';
import Reviews from '../../Reviews/Reviews';
import Subscribe from '../../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
            <Menus></Menus>
            <OurTeam></OurTeam>
            <Subscribe></Subscribe>
            <PhotoGallery></PhotoGallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;