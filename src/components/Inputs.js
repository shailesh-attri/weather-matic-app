import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [city, setCity] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };




  // handle By search
  const handleSearchBtn = () => {
    if (city !== "") setQuery({ q: city });
    setCity('');
  };


  // handle by current location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
        lat, lon,
         })

      })
    }  
  }

  // handle unit changes
  const handleUnitsChange = (e) =>{
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit)
  }

  // search by pressing Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchBtn();
    }
  };

return (
  <div className="inputs ">
    <div className="inputAndBtns ">
      <input
        type="text"
        placeholder="Search for city"
        className="focus:outline-none font-small text-10 capitalize "
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        onKeyDown={handleKeyPress}
      />
      <UilSearch className="searchIcon hover:scale-125 transition-all" onClick={handleSearchBtn} />
      <UilLocationPoint className="locationIcon hover:scale-125 transition-all" onClick={handleLocationClick}/>
    </div>
    <div className="celsius">
      <button name="metric " className="hover:scale-125" onClick={handleUnitsChange}>°C</button>
      <p>|</p>
      <button name="imperial" className="hover:scale-125" onClick={handleUnitsChange}>°F</button>
    </div>
    
  </div>
);
};

export default Inputs;
