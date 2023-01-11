import React from 'react';

import './MenuItem.css';
import { images } from '../../constants';

interface IMenuItem {
  title: string; 
  tags : string;
  price: string;
}

const MenuItem = ({ title, tags, price }: IMenuItem )=> (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      <div className="app__menuItem-name">
        <p className="p__cormorant" style={{color: '#DCCA877'}}>{title}</p>
      </div>

      <div className="app__menuItem-dash"/>

      <div className="app__menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div>

    </div>

    <div className="app__menuItem-sub">
      <p className="p__openSans" style={{color: '#AAA'}}>{tags}</p>
    </div>

  </div>
);

export default MenuItem;
