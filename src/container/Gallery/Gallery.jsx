import React, { useRef } from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {    
    if(direction === 'left') {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center section__padding'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button">Visit Us</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images-card flex__center" key={index}>
              <img src={image} alt="galleryImage" />
              <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='app__gallery-images-icon'>
                <BsInstagram className='app__gallery-images-icon' />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images-arrows">
          <BsArrowLeftShort className='app__gallery-arrows-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='app__gallery-arrows-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
