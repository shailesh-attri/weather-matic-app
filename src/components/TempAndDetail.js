import React from "react";
import { UilTemperature, UilTear, UilWind,UilSun,UilSunset,UilArrowUp,UilArrowDown } from "@iconscout/react-unicons";
import { iconURLfromCode } from "../Services/Service";

const TempAndDetail = ({weather:{details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like}}) => {
  
  const Sunrise = new Date(sunrise * 1000);
  const Sunset = new Date(sunset * 1000);
   // Format the date and time to display
   // Format the local time
  
  const Rise = Sunrise.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  const set = Sunset.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  

  
  
  
  
  return (
    <div className="Temp-Details">
      <div className="TempStatus">
        <p className="text-center text-cyan-200 my-4"><span className="text-white">Cloud status: </span>{`${details}`}</p>
      </div>
      <div className="TempDetail" id="TempAndClouds">
        <img
          src={iconURLfromCode(icon)}
          className="w-20"
          alt=""
        />
        <p className="flex flex-col space-y-2 RealTemp">{`${Math.floor(temp)}°C`}</p>
        <div className="TempAllStuff" id="TempAllStuff">
          <div className="D1">
            <UilTemperature className="Detail text-sm" />
            <span className="ml-1 text-sm">Real felt: </span>
            <p className="ml-1 text-sm">{`${feels_like}°C`}</p>
          </div>

          <div className="D1">
            <UilTear className="Detail text-sm" />
            <span className="ml-1 text-sm">Humidity: </span>
            <p className="ml-1 text-sm">{`${humidity}%`}</p>
          </div>

          <div className="D1">
            <UilWind className="Detail text-sm" />
            <span className="ml-1 text-sm">Wind: </span>
            <p className="ml-1 text-sm"> {`${speed}kmph`}</p>
          </div>
        </div>
      </div>
      <div className="Sun-High-Low lg:flex lg:gap-1" id="SunSettings">
        <div className="SunRise flex ">
            <UilSun className="text-sm" />
            <span className="ml-1 text-sm">Rise: </span>
            <p className="mx-1 lg:mx-0 text-sm"> {`${Rise}`} </p>
        </div>

        <div className="SunSet flex">
            <UilSunset className="text-sm" />
            <span className="ml-1 text-sm">Set: </span>
            <p className="mx-1 text-sm"> {`${set}`}  </p>
        </div>

        <div className="High flex " >
            <UilArrowUp className="text-sm" />
            <span className="ml-1 text-sm">High: </span>
            <p className="mx-1 text-sm"> {`${temp_max}% `}</p>
        </div>

        <div className="Low flex">
            <UilArrowDown className="text-sm" />
            <span className="ml-1 text-sm">Low: </span>
            <p className="mx-1 text-sm"> {`${temp_min}%`}</p>
        </div>

      </div>
    </div>
  );
};

export default TempAndDetail;
