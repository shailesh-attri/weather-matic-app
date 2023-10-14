import React from 'react'


const TopButtons = ({setQuery}) => {
    const API_KEY = '4440ea9b9d0510405cb731ba53b74f8a';
const BASE_URL = "https://api.openweathermap.org/data/2.5"

    const getWeatherData = async (InfoType, searchParams) => {
        const url = new URL(BASE_URL + "/" + InfoType);
        url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    
        try {
            const res = await fetch(url);
    
            if (!res.ok) {
                throw new Error(`Failed to fetch data. Status: ${res.status}`);
            }
    
            const data = await res.json();
            return data;
        } catch (error) {
            // Handle errors here, you can log the error or throw it further.
            console.error("Error in getWeatherData:", error);
            throw error; // You can choose to re-throw the error or handle it differently.
        }
    };


    const cities = [
        {
            id: 1,
            title: 'New Delhi'
        },
        {
            id: 2,
            title: 'Noida'
        },
        {
            id: 3,
            title: 'Kolkata'
        },
        {
            id: 4,
            title: 'Aligarh'
        },
        {
            id: 5,
            title: 'Ghaziabad'
        }
    ]
  return (
    <div className='cityBtn '>
    {cities.map((city) => 
    (
        <button key={city.id} className='CityBtn hover:bg-blue-700 text-white font-medium text-lg py-0.2 px-2  rounded transition-all' onClick={() => setQuery({q: city.title })}>{city.title}</button>
    )
    )}
      
    </div>
  )
}

export default TopButtons
