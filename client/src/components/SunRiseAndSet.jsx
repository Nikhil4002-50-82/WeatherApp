import React,{useContext} from 'react';
import { WeatherContext } from './context/weatherContext';

import SunRiseAndSetComp from './SunRiseAndSetComp';

import { BsFillSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";

const SunRiseAndSet = () => {

  const {weatherRes,setWeatherRes}=useContext(WeatherContext);

  const sunRiseTime=weatherRes?.sys?weatherRes.sys.sunrise:null;
  const sunSetTime=weatherRes?.sys?weatherRes.sys.sunset:null;

  function getTimeFromUnix(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    // Extract the time in 'HH:MM' format
    const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    return time;
  }
  
  const sunRise=getTimeFromUnix(sunRiseTime);
  const sunSet=getTimeFromUnix(sunSetTime);

  return (
    <div className='h-full bg-gray-800 p-3 rounded-3xl'>
      <h4 className=' text-md text-gray-400 mb-4 '>Sunrise & Sunset (IST)</h4>
      <div className='grid grid-cols-2'>
          <SunRiseAndSetComp name="Sunrise" meridiem="AM" Component={BsFillSunriseFill} time={sunRise}/>
          <SunRiseAndSetComp name="Sunset" meridiem="PM" Component={BsFillSunsetFill} time={sunSet}/>
      </div>
    </div>
  );
}

export default SunRiseAndSet;
