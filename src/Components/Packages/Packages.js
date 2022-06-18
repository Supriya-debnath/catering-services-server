import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
    return (
        <div className='blogs'>
        <Container>
         <h2 className='menus'>Choose Your Packages</h2>  
         <p className='title1'>SELECT FROM THE FOLLOWING MENU OPTIONS
            </p>
            <hr />
            <Row className='packages2'>
                <Col md={4} xs={12} className="my-2"> 
                    <div className='menus-card package'>
                        <h3 className='package_number'>Package # 1</h3>
                        <hr />
                        <p>Plain Rice--------------------------250tk</p>
                        <p>Vegetable---------------------------300tk</p>
                        <p>Chicken suslick---------------------280tk</p>
                        <p>Chicken Roast-----------------------78tk</p>
                        <p>Mutton Rejela-----------------------190tk</p>
                        <p>Shahi Jorda-------------------------150tk</p>
                        <p>Soft Drink--------------------------90tk</p>
                        <p>Fried Chicken-----------------------120tk</p>
                        <p>Sandwich----------------------------60tk</p>
                        <p>Biriyani----------------------------480tk</p>
                        <hr />
                        <h3>Per Person <span className='tk'>205tk</span> </h3>
                        <Link to="/payment"><Button>Purchase Now</Button></Link>
                       
                    </div>
                </Col>
                <Col md={4} xs={12} className="my-2"> 
                <div className='menus-card package'>
                        <h3 className='package_number'>Package # 2</h3>
                        <hr />
                        <p>Plain Rice--------------------------250tk</p>
                        <p>Vegetable---------------------------300tk</p>
                        <p>Chicken suslick---------------------280tk</p>
                        <p>Chicken Roast-----------------------78tk</p>
                        <p>Mutton Rejela-----------------------190tk</p>
                        <p>Shahi Jorda-------------------------150tk</p>
                        <p>Soft Drink--------------------------90tk</p>
                        <p>Fried Chicken-----------------------120tk</p>
                        <p>Sandwich----------------------------60tk</p>
                        <p>Biriyani----------------------------480tk</p>
                        <hr />
                        <h3>Per Person <span className='tk'>380tk</span> </h3>
                        <Link to="/payment"><Button>Purchase Now</Button></Link>
                       
                    </div>
                </Col>
                <Col md={4} xs={12} className="my-2"> 
                <div className='menus-card package'>
                        <h3 className='package_number'>Package # 3</h3>
                        <hr />
                        <p>Plain Rice--------------------------250tk</p>
                        <p>Vegetable---------------------------300tk</p>
                        <p>Chicken suslick---------------------280tk</p>
                        <p>Chicken Roast-----------------------78tk</p>
                        <p>Mutton Rejela-----------------------190tk</p>
                        <p>Shahi Jorda-------------------------150tk</p>
                        <p>Soft Drink--------------------------90tk</p>
                        <p>Fried Chicken-----------------------120tk</p>
                        <p>Sandwich----------------------------60tk</p>
                        <p>Biriyani----------------------------480tk</p>
                        <hr />
                        <h3>Per Person <span className='tk'>430tk</span> </h3>
                        <Link to="/payment"><Button>Purchase Now</Button></Link>
                       
                    </div>
                </Col>
              
                
            </Row>
        </Container>
        
    </div>
    );
};

export default Packages;