import React from 'react';
import img from '../../Images/hr-logo.png';
import './PhotoGallery.css';

const PhotoGallery = () => {
    return (
        <section id="portfolio"> 
        <div className="container">
        <div className="common_head">
        <h2 className='gallery'>Photo Gallery</h2>
        <img src={img} alt=""/>
  </div>
  <div className="port_row">
      <div className=" col-lg-3 port_col">
          <div className="port_img port_mar">
          <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
              <div className="overly">
                  <i className="fas fa-link"></i>
              </div>
          </div>
          <div className="port_img">
          <img src="https://images.unsplash.com/photo-1628046276142-a614ec8c5504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJyaWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
          </div>
         
      </div>
      <div className="col-lg-3 port_col">
        <div className="port_img port_mar">
            <img src="https://i.pinimg.com/originals/38/64/f2/3864f27e24df4f03ef129b604345717d.jpg" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
        </div>
        <div className="port_img">
          <img src="https://media.istockphoto.com/photos/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-picture-id1190043570?k=20&m=1190043570&s=612x612&w=0&h=4ucKegbD9AHd99kH5uEqrtm5zovyZ6IsYa33hR2pV-k=" alt=""/>
          <div className="overly">
            <i className="fas fa-link"></i>
        </div>
        </div>
       
    </div>
    <div className="col-lg-3 port_col">
        <div className="port_img port_mar">
            <img src="https://i.pinimg.com/originals/9b/d7/4a/9bd74a3cb739d9e696701994b4899326.jpg" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
        </div>
        <div className="port_img">
          <img src="https://www.zowed.com/blog/wp-content/uploads/2019/07/51691326_2211084052282512_4927777877493022720_o-819x1024.jpg" alt=""/>
          <div className="overly">
            <i className="fas fa-link"></i>
        </div>
        </div>
       
    </div>
    <div className="col-lg-3 port_col">
        <div className="port_img port_mar">
            <img src="https://i.pinimg.com/originals/0a/71/6a/0a716a1c6b51dbc5c45af37cee32c737.jpg" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
        </div>
        <div className="port_img">
          <img src="https://blog.qceventplanning.com/wp-content/uploads/2017/12/beautiful-event-at-night.jpg" alt=""/>
          <div className="overly">
            <i className="fas fa-link"></i>
        </div>
        </div>
       </div>
       <div className="clr"></div>
  </div>  
</div>
</section>
    );
};

export default PhotoGallery;