import React, { JSXElementConstructor, MutableRefObject, ReactNode, useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages : Array<any> = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04
]

const Gallery = () => {
  const scrollRef: MutableRefObject<string> | MutableRefObject<null> = useRef(null);

  const scroll = ( direction: string ) => {
    const { current }:MutableRefObject<any> = scrollRef;
    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content" >
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color: "#aaa", marginTop:"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            galleryImages.map((image: string, index: number) : ReactNode =>
              ( 
                <div 
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index+1}`}> 
                  <img src={image} alt="gallery image"/>
                  <BsInstagram className="gallery__image-icon" />
                </div>
              )
            )
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left') } />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      
      </div>
    </div>
  )
};

export default Gallery;
