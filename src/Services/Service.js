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
// In this updated code, we use a try...catch block to catch and handle any errors that may occur during the network request. We check the response's status, and if it's not okay (e.g., a non-200 status code), we throw an error. This way, you can handle error conditions more effectively.








const formatCurrentWeather = (data) => {
    if (data && data.coord && data.main && data.sys && data.weather && data.wind){
        const  {
            coord : {lat, lon},
            main : {temp, feels_like, temp_min, temp_max, humidity, },
            name,
            dt,
            sys : {country, sunrise, sunset},
            weather,
            wind : {speed}
        } = data
    
        const {
            main : details, icon
        } = weather[0]
    
        return {lat, lon, temp, temp_min, temp_max, humidity, weather, name, dt, feels_like, details, icon, speed, country, sunrise, sunset}

    } else {
        return {}
    }
}

// const formatForecastWeather = (data) => {
//     let {
//         timezone, daily} = data;
//         daily = daily.slice(1, 6).map(d => {
//             return{
//                 title : formatToLocalTime(d.dt, timezone, 'ccc'),
//                 temp:d.temp.day,
//                 icon:d.weather[0].icon
//             }
//         });
    
// }

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

    
    

    return formattedCurrentWeather
}

// const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time : 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).setFormat(format)
const iconURLfromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormattedWeatherData
export {iconURLfromCode} ;
