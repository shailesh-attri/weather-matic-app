import React from "react";
import { UilMeh,UilCopyright } from '@iconscout/react-unicons'

const Forecast = () => {
  return (
    <div className="px-8">

    {/* Hourly forecast */}
      <div className="flex items-center justify-start forecast">
        <p className="text-white font-medium uppercase">hourly forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex items-center justify-between gap-4" id="forecast">

        <div className="flex items-center flex-col forecastBox">
          <p className="">01:00 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <p className="">20°C</p>
        </div>

        <div className="flex items-center flex-col forecastBox">
          <p className="">02:00 PM</p>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <p className="">18°C</p>
        </div>

        <div className="flex items-center flex-col forecastBox">
          <p className="">03:00 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <p className="">19°C</p>
        </div>

        <div className="flex items-center flex-col forecastBox">
          <p className="">04:00 PM</p>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" />
          <p className="">18°C</p>
        </div>

        <div className="flex items-center flex-col forecastBox">
          <p className="">05:00 PM</p>
          <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" />
          <p className="">16°C</p>
        </div>
      </div>

    
      <hr className="my-2 mt-8" />
          <div className="flex justify-start">
            <UilMeh className=' note'/>
            <p className="font-small text-xs  note ml-2">Hourly Forecast section won't update dynamically  because the developer don't have API subscription of OpenWeatherMap.org</p>
          </div>

          <div className="flex items-center justify-center mt-8">
          <UilCopyright className=' note'/>
          <p className="flex items-center justify-center text-xs ml-2 note">shaileshattri83@gmail.com</p>
          </div>
    </div>
  );
};

export default Forecast;
