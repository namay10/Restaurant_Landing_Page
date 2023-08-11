import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from "../../constants";

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title flex__center">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu-wine flex__center">
        <p className="app__specialMenu-menu-heading">Wine & Beer</p>
        <div className="app__specialMenu-menu-items">
          {data.wines.map((wine, index) => {
            return (
              <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
            )
          })}
        </div>
      </div>
      <div className="app__specialMenu-menu-img flex__center">
        <img src={images.menu} alt="MenuImage" />
      </div>
      <div className="app__specialMenu-menu-cocktail flex__center">
        <p className="app__specialMenu-menu-heading">Cocktail</p>
        <div className="app__specialMenu-menu-items">
          {data.cocktails.map((cocktail, index) => {
            return (
              <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            )
          })}
        </div>
      </div>
    </div>
    <button className='custom__button'>View More</button>
  </div>
);

export default SpecialMenu;
