import React from 'react';

import { SubHeading, AwardCard } from '../../components';
import { IAward } from '../../interfaces';
import { images, data } from '../../constants';
import './Laurels.css';

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      
      <div className="app__laurels_awards">
         {data.awards.map( (award : IAward) => <AwardCard key={award.title} award={award} />)
        }
      </div>
    </div>
      
    <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
