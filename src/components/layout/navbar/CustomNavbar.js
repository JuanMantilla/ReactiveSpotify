import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import './CustomNavbar.css';
import SearchBar from './items/searchbar/SearchBar'
function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header-navbar" fixed="top">
        <a href="#home">
          <img src='./imgs/spotify-logo.png' className='logo-img'></img>
          <Navbar.Brand className='brand header-navbar'>Reactive Spotify</Navbar.Brand>
        </a>
        
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="header-navbar">Home</Nav.Link>
          <Nav.Link className="header-navbar">List genders</Nav.Link>
        </Nav>
        <SearchBar/>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
