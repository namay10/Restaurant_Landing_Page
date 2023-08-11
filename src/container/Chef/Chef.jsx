import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import images from "../../constants/images";

const Chef = () => (
  <div className='app__chef app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <p className="p__opensans app__chef-content">
        <img src={images.quote} alt="Quote" className='app__chef-quote' />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
      <p style={{fontSize: '3rem', color: '#DCCA87'}} className="p__cormorant">Kevin Luo</p>
      <p style={{margin: '1rem 0'}} className="p__opensans">Chef & Founder</p>
      <img src={images.sign} alt="Signature" className='app__chef-sign' />
    </div>
  </div>
);

export default Chef;
