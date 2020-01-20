import React from 'react';
import {Card, Button} from 'react-bootstrap';

import './Track.css';

function Track(props) {
  return (
    <Card style={{ width: '24rem' }} className='track-item'>
      <div className="img-container">
        <Card.Img className="track-image" variant="top" src={props.children.images[0].url} />
        <Card.Title className='track-title'>{props.children.name}</Card.Title>
      </div>
      
      <Card.Body className='track-body'>
        <Card.Text>
          {props.children.artists[0].name}
        </Card.Text>
        <Button variant="outline-dark">Check it out!</Button>
      </Card.Body>
    </Card>
  );
}

export default Track;
