import {React} from 'react';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import './style.scss';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetail from './components/TempAndDetail';
import Forecast from './components/Forecast';
import getWeatherData from './Services/Service';
import getFormattedWeatherData from './Services/Service';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';



function App() {

  const [query, setQuery] = useState({q: 'New Delhi'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState();


  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units})
      .then(data => {
          setWeather(data)
        })
      
      
    }
    fetchWeather();
  }, [query, units])

  
 
  

  return (
    <div className="App backdrop-blur-sm ">
    <Navbar/>
    <TopButtons setQuery={setQuery}/>
    <Inputs  setQuery={setQuery} setUnits={setUnits} units={units}/>
   
{/* name={weather.name} country={weather.sys?.country} */}
    {weather && (
      <>
    <TimeAndLocation weather={weather}/>
    <TempAndDetail weather={weather}/>
    <Forecast/>  

      </>
    )}
        
        
    </div>
  );
}

export default App;
