import React , { useEffect, useState } from 'react';


import CustomNavbar from './components/layout/navbar/CustomNavbar';
import Tracks from './components/layout/tracks/Tracks';

function App() {
  let token;
  const [contentCards, setContentCards] = useState([])

  const fetchNewReleases = async() => {
    const response = await fetch(`${process.env.REACT_APP_MM_BASE_URL}/browse/new-releases`,
      {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        },
      })
    let data = await response.json();
    setContentCards(data.albums.items)
  }


  const init = async () => {
    const auth = 'Basic '+ btoa( process.env.REACT_APP_MM_CLIENT_ID + ':' + process.env.REACT_APP_MM_CLIENT_SECRET);
    const tokenRequest = await fetch(`${process.env.REACT_APP_MM_AUTH_URL}`,
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': auth
        },
      })
    const data = await tokenRequest.json();
    token = data.access_token;
    fetchNewReleases();
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <CustomNavbar/>
      <Tracks>{contentCards}</Tracks>
    </div>
  );
}

export default App;
