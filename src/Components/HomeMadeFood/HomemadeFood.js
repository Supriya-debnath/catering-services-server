import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomemadeFood.css';

const HomemadeFood = () => {
    return (
        <div className='blogs foodmade'>
        <Container className='c'> 
            <Row>
                <Col md={6} xs={12} className="my-2"> 
                    <div className='menus-card'>
                    <img className='menus_img' src={'https://lagatar24.com/wp-content/uploads/2021/12/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138549925.jpg'} alt=""/>
                    <div className='img_overlay1 img_overlay--primary'>
                    </div>
                    </div>
                </Col>
                <Col md={6} xs={12} className="my-2"> 
                    <div className='menus-card home_food'>
                        <p className='Home_made'>
                        Home Made Food The Best <br></br> Catering Service In The City
                        </p>
                        <p className='food'>The best food make you feel good!</p>
                        <p className='food1'>Homemade food is usually prepared with natural ingredients compared to commercially prepared food. Plainly, the food has its taste however those are ready using unprocessed foods that are by no means healthy. For example: the fast foods comprises great deal of sugar, fat and sodium.</p>
                        <Link to="/login"><Button>Order Now</Button></Link>
                    </div>
                </Col>
               
              
                
            </Row>
        </Container>
        
    </div>
    );
};

export default HomemadeFood;