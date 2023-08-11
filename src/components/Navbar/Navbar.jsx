import React, { useState } from 'react';

import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="App Logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-mobileScreen">
        <GiHamburgerMenu color='white' cursor={'pointer'} fontSize={27} onClick={() => setToggleMenu(true)} />
        {(toggleMenu) && (
          <div className="app__navbar-mobileScreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-mobileScreen-links'>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#home">Home</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#menu">Menu</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#awards">Awards</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
