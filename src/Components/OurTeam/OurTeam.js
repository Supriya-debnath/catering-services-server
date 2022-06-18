import React from 'react';
import { Container } from 'react-bootstrap';
import img9 from '../../Images/Rafi.jpg'
import img8 from '../../Images/sa.jpg'
import img7 from '../../Images/sup (3).jpg'
import img6 from '../../Images/unknown.jpg'
import './OurTeam.css';

const OurTeam = () => {
    return (
        <Container>
        <div className="row">
         <div className="col-lg-12">
           <div className="common-head text-center">
             <h2 className='our'>OUR TEAM </h2>
             <p className='team-title'>Get silly! Show your personality with fun photos of your team.</p>
             <hr />
             {/* <img src={img} alt=""/> */}
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img9} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Maksudujjaman Rafi</h4>
               <h6>CEO</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img6} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Priyanka Jesa</h4>
               <h6>Cheif Trainer</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}} src={img8} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Sanower Hossain Rabbi</h4>
               <h6>Manager</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img7} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Supriya Debnath</h4>
               <h6>Assistance Manager</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div>
      
       </div>


       <div className='row'>
       {/* <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img src="https://production-next-images-cdn.thumbtack.com/i/402548832155762696/width/1024.jpeg" className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Liam Seihila</h4>
               <h6>Cook Maker</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div> */}
         
       {/* <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img src="http://londonvenueawards.co.uk/wp-content/uploads/2018/04/Ian-Fletcher.jpg" className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Seimon saff</h4>
               <h6>Planner</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div> */}

       {/* <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img src="https://londonvenueawards.co.uk/wp-content/uploads/2020/02/jackieboughton.jpg" className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Souter barki</h4>
               <h6>Cheif Trainer</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div> */}

       {/* <div className="col-lg-3">
           <div className="main-team transition">
             <div className="team-img">
               <img src="https://images.squarespace-cdn.com/content/v1/53236388e4b07b2197464417/1575293416828-OWONAG2BTZ06FQT6MJA4/PaulFullpic.jpeg?format=750w" className="img-fluid w-100 h-25" alt=""/>
               <div className="overly transition">
                 <ul>
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                 </ul>
               </div>
             </div>
             <div className="team-text">
               <h4>Jonny Rahman</h4>
               <h6>Cheif Trainer</h6>
               <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
             </div>
           </div>
         </div> */}
       </div>
    </Container>
    );
};

export default OurTeam;