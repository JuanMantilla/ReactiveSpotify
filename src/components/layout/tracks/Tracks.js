import React from 'react';

import Track from '../track/Track';
import './Tracks.css';

function Tracks(props) {
  return (
    <div className='tracks-container'>
      {props.children.map(card => (
        <Track  key={card.name}>{card}</Track>
      ))}
    </div>
  );
}

export default Tracks;
