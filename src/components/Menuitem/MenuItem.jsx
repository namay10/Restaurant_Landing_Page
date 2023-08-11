import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__specialMenu-menuItems'>
    <div className="app__specialMenu-menuItems-heading">
      <div className="app__specialMenu-menuItems-name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      </div>
      <div className='app__specialMenu-menuItems-dash'/>
      <div className="app__specialMenu-menuItems-price">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{price}</p>
      </div>
    </div>
    <div className="app__specialMenu-menuItems-tags">
      <div className="app__specialMenu-menuItems-name">
        <p className="p__cormorant" style={{color: '#AAAAAA', fontSize: '20px', fontWeight: '500'}}>{tags}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
