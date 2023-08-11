import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { images, data } from "../../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels-awardCard">
    <img src={imgUrl} alt="Award" />
    <div className="app__laurels-awardCard-content">
      <p className="p__cormorant" style={{color: '#DCCA87',fontSize: '1.4rem'}}>{title}</p>
      <p className="p__cormorant" style={{ fontSize: '1rem', fontWeight: 'normal' }}>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__laurels app__bg app__wrapper section__padding' id="awards">
    <div className="app__laurels-logo">
      <img src={images.logo} alt="laurelLogo" />
    </div>
    <div className="app__wrapper_info app__laurels-content">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels-awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="Laurels" />
    </div>
  </div>
);

export default Laurels;
