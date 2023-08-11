import React, { useState, useRef } from 'react';
import { meal } from '../../constants';

import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(true);

  const handleVideo = () => {
    setPlayVideo(!playVideo);
    (playVideo) ? videoRef.current.pause() : videoRef.current.play();
  }

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        autoPlay={true}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay-circle flex__center" onClick={handleVideo}>
          {(playVideo)
            ? <BsPauseFill color='#DCCA87' className='playPauseButton' fontSize={30} />
            : <BsFillPlayFill color='#DCCA87' className='playPauseButton' fontSize={30} />}
        </div>
      </div>
    </div>
  )
};

export default Intro;
