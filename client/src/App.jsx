import React,{useState} from "react";
import { CityContext } from "./components/context/cityContext";
import { AirQualityContext } from "./components/context/airQualityContext";
import { WeatherContext } from "./components/context/weatherContext";
import { ForecastContext } from "./components/context/forecastContext";
import { LatitudeContext } from "./components/context/LatitudeContext";
import { LongitudeContext } from "./components/context/LongitudeContext";

import Header from "./components/header";
import MainData from "./components/mainData";

const App=()=>{
  const [cityName,setCityName]=useState("");
  const [airQualityRes,setAirQualityRes]=useState({});
  const [weatherRes,setWeatherRes]=useState({});
  const [forecastRes,setForecastRes]=useState({});
  const [lat,setLat]=useState("");
  const [lon,setLon]=useState("");

 
  return(
    <CityContext.Provider value={{ cityName, setCityName }}>
      <AirQualityContext.Provider value={{airQualityRes,setAirQualityRes}}>
        <WeatherContext.Provider value={{weatherRes,setWeatherRes}}>
          <ForecastContext.Provider value={{forecastRes,setForecastRes}}>
            <LatitudeContext.Provider value={{lat,setLat}}>
              <LongitudeContext.Provider value={{lon,setLon}}>
                <div className="bg-gray-900 text-[white] font-custom">
                    <Header />
                    <MainData />
                </div>
              </LongitudeContext.Provider>    
            </LatitudeContext.Provider>
          </ForecastContext.Provider>
        </WeatherContext.Provider>
      </AirQualityContext.Provider>
    </CityContext.Provider>
  );
}

export default App;
