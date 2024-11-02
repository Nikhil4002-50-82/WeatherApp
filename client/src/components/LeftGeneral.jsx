import React,{useContext} from "react";
import { CityContext } from "./context/cityContext";
import { WeatherContext } from "./context/weatherContext";

import { BsCalendar2DateFill,BsCloudDrizzleFill,BsCloudHaze2Fill  } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoRainy,IoThunderstorm  } from "react-icons/io5";
import { FaRegSnowflake,FaCloud  } from "react-icons/fa";
import { IoMdPartlySunny } from "react-icons/io";

const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export default function LeftGeneral(){

    const {cityName,setCityName}=useContext(CityContext);
    const {weatherRes,setWeatherRes}=useContext(WeatherContext);

    const temperature= weatherRes?.main?<h1>{((weatherRes.main.temp)-273.15).toFixed(2)}&deg;C</h1>:null;
    const mainWeather = weatherRes?.weather ? weatherRes.weather[0].description :null;
    const iconName=weatherRes?.weather?weatherRes.weather[0].main:null;

    var icon;
    if(iconName==="Rain"){
         icon=<IoRainy className="mr-6 text-5xl text-gray-400" />;
    }
    else if(iconName==="Thunderstorm"){
        icon=<IoThunderstorm className="mr-6 text-5xl text-gray-400" />;
    }
    else if(iconName==="Drizzle"){
        icon=<BsCloudDrizzleFill className="mr-6 text-5xl text-gray-400" />;
    }
    else if(iconName==="Snow"){
        icon=<FaRegSnowflake className="mr-6 text-5xl text-gray-400" />;
    }
    else if(iconName==="Clouds"){
        icon=<FaCloud className="mr-6 text-5xl text-gray-400" />;
    }
    else if(iconName==="Clear"){
        icon=<IoMdPartlySunny className="mr-6 text-5xl text-gray-400" />;
    }
    else{
        icon=<BsCloudHaze2Fill className="mr-6 text-5xl text-gray-400" />;
    }

    return(
        <div className='w-full bg-gray-800 py-4 p-[0.9em] flex flex-col rounded-2xl'>
            <p>Now</p>
            <div className="text-4xl flex justify-between items-center">
                {temperature}
                {icon?icon:null}       
            </div>
            <p className=' text-md  my-1'>{mainWeather}</p>
            <hr className="border-t-2 border-gray-500 mb-3"/>
            <p className="text-gray-400 text-sm flex mb-2 ">
                <span><BsCalendar2DateFill className="text-lg mr-1" /></span>
                <span className="mr-1">{days[d.getDay()]},</span>
                <span className="mr-1">{d.getDate()},</span>
                <span className="mr-1">{months[d.getMonth()]}</span>
                <span className="mr-1">{d.getFullYear()}</span>
            </p>
            <p className="text-gray-400 text-sm flex"><span><FaLocationDot className="text-lg mr-1" /></span>{cityName}</p>
        </div>
    );
}