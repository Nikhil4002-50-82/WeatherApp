import React,{useContext,useEffect,useState} from 'react';
import { CityContext } from './context/cityContext';
import { AirQualityContext } from './context/airQualityContext';
import { WeatherContext } from './context/weatherContext';
import { ForecastContext } from './context/forecastContext';
import { LatitudeContext } from './context/LatitudeContext';
import { LongitudeContext } from './context/LongitudeContext';

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
    const {lat,setLat}=useContext(LatitudeContext);
    const {lon,setLon}=useContext(LongitudeContext);

    const [searchBtn,setSearchBtn]=useState(false);
    const [curLocBtn,setCurLocBtn]=useState(false);

    const [value,setValue]=useState("");
    

    useEffect(()=>{
      const getLatLon=async()=>{
        try{
          const response=await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKEY}`);
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
      const getCurLatLon=async()=>{
        try{
          const response =await axios.get("https://weatherapp-2i72.onrender.com/getCurrentLocation");
          console.log(response.data.query);
          setLat(response.data.lat);
          setLon(response.data.lon);
          setCityName(response.data.city);
        }
        catch(error){
          console.log(`error message : ${error.message}`);
        }
        finally{
          setCurLocBtn(false);
        }
      }

      if(curLocBtn){
        getCurLatLon();
      }

    },[curLocBtn]);

    useEffect(()=>{
      const getAirQuality=async()=>{
        try{
          const response=await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${startOfTodayUnix}&end=${currentTime}&appid=${apiKEY}`);
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
        setValue(event.target.value);
      }
    function handleClick(event){
        event.preventDefault();
        setCityName(value);
        setSearchBtn(true);
        setValue("");
      }
  return (
    <header className="w-[100%] h-auto p-[0.6em] grid grid-rows-4 gap-2  sm:flex xl:flex sm:flex-row xl:flex-row sm:justify-between xl:justify-between sm:items-center xl:items-center bg-gray-900">
        <h1 className=" font-semibold flex items-center justify-center text-2xl  sm:text-3xl  xl:text-4xl ">Weather<IoPlanetSharp /></h1>
        <ul className=" row-span-3 flex flex-col gap-2 sm:flex-row sm:gap-0 xl:gap-0  xl:flex-row">
          <li className="ml-[0.3em]"><input type="text" className="h-[2.5em] sm:h-[2em] w-full sm:w-[12em] xl:w-[12em] px-3 pt-3 pb-3 bg-gray-800 rounded-2xl focus:outline-none   xl:h-[2.3em]" placeholder="Enter city name" onChange={handleChange} value={value} onKeyDown={
            (event)=>{
              if (event.key === 'Enter'){
                setCityName(value);
                setSearchBtn(true);
                setValue("");
              }
            }
          } spellCheck="false" /></li>
          <li className="ml-[0.3em]"><button className="h-[2.5em] sm:h-[2em] w-full sm:w-[5.3em] xl:w-[5.3em] px-3 pl-2 pt-3 pb-3 flex justify-center sm:justify-between xl:justify-between items-center bg-white text-black rounded-2xl   xl:h-[2.3em]" onClick={handleClick}><IoSearchOutline className='text-3xl'/>Search</button></li>
          <li className="ml-[0.3em]"><button className="h-[2.5em] sm:h-[2em] w-full sm:w-[11em] xl:w-[11em] px-0 py-3 flex justify-center items-center bg bg-orange-600 rounded-2xl   xl:h-[2.3em]" onClick={(event)=>{
            event.preventDefault();
            setCurLocBtn(true);
          }}><span className='mr-2'><FaLocationCrosshairs /></span>Current Location</button></li>
        </ul>
      </header>
  )
}

export default Header;
