import React from 'react'
import { useState, useEffect } from "react";

const Gears = (props) => {
  // create state to hold projects
  const [gears, setGears] = useState([]);

  const URL = "http://localhost:4000/";
  
  const getGearsData = async () => {
    const response = await fetch(props.URL + "gear");
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
        <h3>{gear.manufacturer}</h3>
        <img style={{ width:"600px", height:"500px", border:"solid #e03499 5px",}} img src={gear.image} alt=""/>
        <h5 style={{textAlign: "center", padding: "100px", color: "white", font: "Sans-Serif", border: ""}}>{gear.description}</h5>
      </div>
    ));
  };

  return gears ? loaded() : <h1>Loading...</h1>;
}

export default Gears;