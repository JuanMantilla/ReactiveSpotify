import React from 'react';

import Track from '../track/Track';
import './Items.css';

function Items(props) {
  return (
    <div className='items-container'>
      {props.children.map(card => (
        <Track  key={card.name}>{card}</Track>
      ))}
    </div>
  );
}

export default Items;
