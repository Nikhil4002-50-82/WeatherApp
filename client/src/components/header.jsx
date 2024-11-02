import React,{useContext,useEffect,useState} from 'react';
import { CityContext } from './context/cityContext';
import { AirQualityContext } from './context/airQualityContext';
import { WeatherContext } from './context/weatherContext';
import { ForecastContext } from './context/forecastContext';

import { IoSearchOutline,IoPlanetSharp } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";

import axios from "axios";

const currentTime = Math.floor(Date.now() / 1000);
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);
const startOfTodayUnix = Math.floor(startOfToday.getTime() / 1000);

const Header = () => {

  const apiKEY = import.meta.env.VITE_API_KEY;

    const { cityName, setCityName } = useContext(CityContext);
    const {airQualityRes,setAirQualityRes}=useContext(AirQualityContext);
    const {weatherRes,setWeatherRes}=useContext(WeatherContext);
    const {forecastRes,setForecastRes}=useContext(ForecastContext);

    const [searchBtn,setSearchBtn]=useState(false);

    const [lat,setLat]=useState("");
    const [lon,setLon]=useState("");

    useEffect(()=>{
      const getLatLon=async()=>{
        try{
          const response=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKEY}`);
          const {lat,lon}=response.data[0];
          setLat(lat);
          setLon(lon);
        }
        catch(error){
          console.log(`error message : ${error.message}`);
        }
        finally{
          setSearchBtn(false);
        }
      }
      if(searchBtn){
        getLatLon();
      }
    },[searchBtn]);

    useEffect(()=>{
      const getAirQuality=async()=>{
        try{
          const response=await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${startOfTodayUnix}&end=${currentTime}&appid=${apiKEY}`);
          const {components}=response.data.list[0]
          setAirQualityRes(components);
        }
        catch(error){
          console.log(`error message : ${error.message}`);
        }
      }

      const getWeather=async()=>{
        try{
          const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`);
          setWeatherRes(response.data);
        }
        catch(error){
          console.log(`error message : ${error.message}`);
        }
      }

      const getForecast=async()=>{
        try{
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKEY}`);
          setForecastRes(response.data);
          console.log(response.data);
        }
        catch(error){
          console.log(`error message : ${error.message}`);
        }
      }

      if(lat && lon){
        getAirQuality();
        getForecast(); 
        getWeather();     
      }
    },[lat,lon]);

    function handleChange(event){
        setCityName(event.target.value);
      }
    function handleClick(event){
        event.preventDefault();
        console.log(cityName);
        setSearchBtn(true);
      }

  return (
    <header className="w-[100%] h-[4em] p-[0.6em] z-10 flex justify-between items-center bg-gray-900">
        <h1 className="text-4xl font-semibold flex">Weather<IoPlanetSharp /></h1>
        <ul className="flex">
          <li className="ml-[0.3em]"><input type="text" className="h-[2.3em] w-[12em] px-3 pt-3 pb-3 bg-gray-800 rounded-2xl focus:outline-none" placeholder="Enter city name" onChange={handleChange}/></li>
          <li className="ml-[0.3em]"><button className="h-[2.3em] w-[5.3em] px-3 pl-2 pt-3 pb-3 flex justify-between items-center bg-white text-black rounded-2xl" onClick={handleClick}><IoSearchOutline className='text-3xl'/>Search</button></li>
          <li className="ml-[0.3em]"><button className="h-[2.3em] w-[10em] px-3 pt-3 pb-3 flex justify-center items-center bg bg-orange-600 rounded-2xl"><span className='mr-2'><FaLocationCrosshairs /></span>Location</button></li>
        </ul>
      </header>
  )
}

export default Header;
