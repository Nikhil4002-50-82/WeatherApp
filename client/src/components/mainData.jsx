import React,{useContext} from 'react';
import { WeatherContext } from './context/weatherContext';

import AirQuality from './AirQuality';
import SunRiseAndSet from './SunRiseAndSet';
import OtherComponents from './OtherComponents';
import LeftGeneral from './LeftGeneral';
import DayForecast from './DayForecast';
import ForecastToday from './ForecastToday';

import { IoWaterSharp } from "react-icons/io5";
import { GiPressureCooker } from "react-icons/gi";
import { MdOutlineVisibility ,MdSpeed} from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";

const MainData = () => {

  const{weatherRes,setWeatherRes}=useContext(WeatherContext);

  const humidity = weatherRes?.main?<p>{weatherRes.main.humidity}%</p>:null;
  const pressure= weatherRes?.main?<p>{weatherRes.main.pressure}hPa</p>:null;
  const visibility= weatherRes?.visibility?<p>{(weatherRes.visibility)/1000}km</p>:null;
  const windSpeed= weatherRes?.wind?<p>{weatherRes.wind.speed}m/s</p>:null;
  const feelsLike= weatherRes?.main?<p>{(weatherRes.main.feels_like-273.15).toFixed(2)}&deg;C</p>:null;

  return (
    <div className='w-full grid grid-cols-[2fr_6fr]'>
      <div className='p-[0.6em] pt-1 pr-0'>
        <LeftGeneral />
        <DayForecast />
      </div>
      <div className='p-[0.6em] pt-0'>
        <h1 className="font-semibold mb-2  xl:text-xl">Today's Highlights</h1>
        <div className='w-[100%] h-[auto]   sm:grid sm:grid-cols-2 sm:gap-4  xl:grid xl:grid-cols-4 xl:grid-rows-4 xl:gap-2'>
            <div className='col-span-2 xl:row-span-2 h-full'>
                <AirQuality />
            </div>
            <div className='sm:col-span-2  xl:col-span-2 xl:row-span-2 h-full'>
                <SunRiseAndSet />
            </div>
            <div className='h-full'>
                <OtherComponents name="Humidity" value={humidity} Component={IoWaterSharp} />
            </div>
            <div className='h-full'>
                <OtherComponents name="Pressure" value={pressure} Component={GiPressureCooker} />
            </div>
            <div className='h-full'>
                <OtherComponents name="Visibility" value={visibility} Component={MdOutlineVisibility} />
            </div>
            <div className='h-full'>
                <OtherComponents name="Wind Speed" value={windSpeed} Component={MdSpeed} />
            </div>
            <div className='h-full'>
                <OtherComponents name="Feels Like" value={feelsLike} Component={FaTemperatureHigh} />
            </div>
        </div>
        <h1 className="font-semibold my-2   xl:text-xl">Today at</h1>
        <div className='text-gray-400 grid sm:grid-cols-4 xl:grid-cols-8 gap-2'>
            <ForecastToday />
        </div>
      </div>
    </div>
  );
};

export default MainData;
