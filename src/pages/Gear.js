import React from 'react'
import { useState, useEffect } from "react";

const Gear = (props) => {
  // create state to hold projects
  const [gear, setGear] = useState([]);

  //create function to make api call
  const getGearData = async () => {
    const response = await fetch(props.URL);
    const data = await response.json();
    setGear(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getGearData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return gear.map((gear) => (
      <div key={gear._id} className= "gear">
        <h1>{gear.name}</h1>
        <img src={gear.image} alt=""/>
        <h3>{gear.description}</h3>
        <h4>{gear.manufacturer}</h4>
      </div>
    ));
  };

  return gear ? loaded() : <h1>Loading...</h1>;
}

export default Gear;