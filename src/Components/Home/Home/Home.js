import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Banner from '../../Banner/Banner';
import HomemadeFood from '../../HomeMadeFood/HomemadeFood';
import Menus from '../../Menus/Menus';
import OurServices from '../../OurServices/OurServices';
import OurTeam from '../../OurTeam/OurTeam';
import Packages from '../../Packages/Packages';
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
            <Packages></Packages>
            <HomemadeFood></HomemadeFood>
            <OurTeam></OurTeam>
            <Subscribe></Subscribe>
            <PhotoGallery></PhotoGallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;