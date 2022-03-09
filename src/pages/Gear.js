import { useState, useEffect } from "react";

function Gear(props) {
  // create state to hold projects
  const [gear, setGear] = useState(null);

  //create function to make api call
  const getGearData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "gear");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setGear(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getGearData());

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return gear.map((project) => (
      <div>
        <h1>{gear.name}</h1>
        <img className="PhotosBooBoo" src={gear.image} alt=""/>
        <a href={gear.image}>
          <button>Github</button>
        </a>
        <a href={gear.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };

  return gear ? loaded() : <h1>Loading...</h1>;
}

export default Gear;