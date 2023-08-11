import React from 'react';

import './AboutUs.css';
import images from "../../constants/images";

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G Letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="aboutSpoon" className='spoon__img spoon__img-reverse' />
        <p style={{margin: '2rem 0'}} className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className='custom__button'>Know More</button>
      </div>
      <div className="app__aboutus__knife flex__center">
        <img src={images.knife} alt="Knife" />
      </div>
      <div className="app__aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="aboutSpoon" className='spoon__img' />
        <p style={{margin: '2rem 0'}} className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
