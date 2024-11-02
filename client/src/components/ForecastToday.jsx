import React,{useContext} from 'react';
import { ForecastContext } from './context/forecastContext';

import { BsCloudDrizzleFill,BsCloudHaze2Fill  } from "react-icons/bs";
import { IoRainy,IoThunderstorm  } from "react-icons/io5";
import { FaRegSnowflake,FaCloud  } from "react-icons/fa";
import { IoMdPartlySunny } from "react-icons/io";

import ForecastTodayComp from './ForecastTodayComp';

const ForecastToday = () => {

    const {forecastRes,setForecastRes}=useContext(ForecastContext);

    const d = new Date();
    // const today = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    const today="2024-11-02"
    console.log(today)

    function createComp(list){
         const timestamp=list.dt_txt;
         const temperature=((list.main.temp)-273.15).toFixed(2);
         const iconName = list.weather[0]?.main;
         var fullTime=list.dt_txt.slice(11,13);

         var meridien;
         var time;
         if(fullTime>=12){
            meridien="PM";
            if(fullTime==12) time=12;
            else time=fullTime-12;
         }
         else{
            meridien="AM";
            time=fullTime;
         }
    
          var icon;
          if(iconName==="Rain"){
              icon=IoRainy;
          }
          else if(iconName==="Thunderstorm"){
              icon=IoThunderstorm;
          }
          else if(iconName==="Drizzle"){
              icon=BsCloudDrizzleFill;
          }
          else if(iconName==="Snow"){
              icon=FaRegSnowflake;
          }
          else if(iconName==="Clouds"){
              icon=FaCloud;
          }
          else if(iconName==="Clear"){
              icon=IoMdPartlySunny;
          }
          else{
              icon=BsCloudHaze2Fill;
          }
    
          return(
              <ForecastTodayComp
                key={timestamp} 
                Component={icon}
                temperature={temperature}
                time={time}
                meridien={meridien}
              />
          );
        }

    return (
        forecastRes?.list?(
            forecastRes.list.filter(i=>i.dt_txt.slice(0,10)===today).map(createComp)
        ):"loading..."
    );
}

export default ForecastToday;
