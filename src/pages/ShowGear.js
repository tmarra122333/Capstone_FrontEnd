import React from 'react'
import { useState, useEffect } from "react";

const Gears = (props) => {
  // create state to hold projects
  const [gears, setGears] = useState([]);

  const URL = "http://localhost:4000/";
  const getGearsData = async () => {
    const response = await fetch(URL + "ShowGear");
    console.log(response)
    const data = await response.json();
    setGears(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getGearsData()}, []);
  

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return gears.map((gear) => (
      <div key={gear._id} className= "gear">
        <h1>{gear.name}</h1>
        <img src={gear.image} alt=""/>
        <h3>{gear.description}</h3>
        <h4>{gear.manufacturer}</h4>
      </div>
    ));
  };

  return gears ? loaded() : <h1>Loading...</h1>;
}

export default Gears;