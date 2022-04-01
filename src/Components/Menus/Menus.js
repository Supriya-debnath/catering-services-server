
import React  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Menus.css';

const Menus = () => {

    return (
        <div className='blogs'>
            <Container>
             <h2 className='menus'>Our Menus</h2>  
             <p className='title1'>SELECT FROM THE FOLLOWING MENU OPTIONS
                </p>
                <hr />
                <Row >
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://media.istockphoto.com/photos/grilled-new-zealand-lamb-chops-plated-with-sauteed-brussel-sprouts-picture-id1093395034?b=1&k=20&m=1093395034&s=170667a&w=0&h=ttpk3mu38il9Wct-nu2nfiYz03eeVXoyoMTiXLlhtkQ='} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Plated
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://media.istockphoto.com/photos/delicious-open-buffet-with-salats-cold-dishes-and-deserts-picture-id1178836720?k=20&m=1178836720&s=612x612&w=0&h=Ku7GKc3mRELr4AMMexRlHZG_FDoC1e4DZ20UWi-AHi8='} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Buffet / Family
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://perfectsettingcatering.com/wp-content/uploads/2020/03/JesseDan_Wedding_2529-1120x747.jpg'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Reception
                        </div>
                        </div>
                        </div>
                    </Col>
                  
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default Menus;




// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import LoadDB from '../../LoadDB/LoadDB';

// const Menus = () => {
//     const [items] = LoadDB()
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
//       };
//     return (
//         <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//         {[1,2,3,4].map((item,index) => {
//             return <div key={index}>
                
//                 {item}</div>;
//         })}
//         </Slider>
//       </div>
//     );
// };

// export default Menus;

 


