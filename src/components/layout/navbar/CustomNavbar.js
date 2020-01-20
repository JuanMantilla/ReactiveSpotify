import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import './CustomNavbar.css';
import SearchBar from './items/searchbar/SearchBar'
function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <a href="#home">
          <img src='./imgs/spotify-logo.png' className='logo-img'></img>
          <Navbar.Brand className='brand'>Reactive Spotify</Navbar.Brand>
        </a>
        
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link >List genders</Nav.Link>
        </Nav>
        <SearchBar/>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
