import React from 'react'
import { useState, useEffect } from "react";


const Artists = (props) => {
  // create state to hold projects
  const [artists, setArtists] = useState([]);

  const getArtistsData = async () => {
    const response = await fetch(props.URL + "artist");
    console.log(response)
    const data = await response.json();
    setArtists(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getArtistsData()}, []);
  

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return artists.map((artist) => (
      <div key={artist._id} className= "artist">
        <h1>{artist.name}</h1>
        <img style={{ width:"350px", height:"350px", borderRadius:"80px", border: "solid #e03499 5px"}} img src={artist.image} alt=""/> 
        <h3>{artist.description}</h3>
        <h4>{artist.genre}</h4>
      </div>
    ));
  };

  return artists ? loaded() : <h1>Loading...</h1>;
}

export default Artists;