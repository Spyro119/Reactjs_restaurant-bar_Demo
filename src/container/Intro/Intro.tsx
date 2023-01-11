import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [ playVideo, setPlayVideo ] = useState<boolean>(false);
  const [ showOverlay, setShowOverlay ] = useState<boolean>(true);

  const vidRef = useRef<HTMLVideoElement>(null!) 

  const handleVideo = () => {
    setPlayVideo((prev) => !prev )
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video"
    onMouseEnter={() => setShowOverlay(true)}
    onMouseLeave={() => { playVideo ? setShowOverlay(false) : setShowOverlay(true)} }>
      <video 
      src={meal}
      ref={vidRef}
      loop
      controls={false}
      muted />

      {/* remove when video playing?  */}
            <div className="app__video-overlay flex__center">
      { showOverlay &&  
            <div className="app__video-overlay_circle flex__center"
            onClick={()=> handleVideo()}>
              { playVideo 
              ? <BsPauseFill  color="#fff" fontSize={30}/> 
              : <BsFillPlayFill color="#fff" fontSize={30}/> }
            </div>
      }
          </div>

    </div>
  )
};

export default Intro;
