import React,{useContext} from 'react';
import { ForecastContext } from './context/forecastContext';

import { BsCloudDrizzleFill,BsCloudHaze2Fill  } from "react-icons/bs";
import { IoRainy,IoThunderstorm  } from "react-icons/io5";
import { FaRegSnowflake,FaCloud  } from "react-icons/fa";
import { IoMdPartlySunny } from "react-icons/io";

import DailyForecastComp from './DayForecastComp';

const DayForecast = () => {

  const {forecastRes,setForecastRes}=useContext(ForecastContext);

  function createComp(list){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const timestamp=list.dt;
    const d = new Date(timestamp * 1000);
    const date= d.getDate();
    const month =months[d.getMonth()];
    const day = days[d.getDay()];

    const temperature=((list.main.temp)-273.15).toFixed(2);

    const iconName = list.weather[0]?.main;

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
          <DailyForecastComp
          key={timestamp} 
          Component={icon}
          temperature={temperature}
          date={date}
          month={month}
          day={day}
          />
      );
    }

  return (
    <div className='w-full bg-gray-800 py-4 p-[0.9em] flex flex-col rounded-2xl mt-5'>
        <p className='sm:text-xl xl:text-3xl mb-3'>5 days Forecast</p>
        {forecastRes.list ? (
        forecastRes.list
          .filter(i => i.dt_txt.slice(11, 19) === "00:00:00") // Filter by time
          .map(createComp)
      ) : (
        <p className='text-gray-400'>Loading...</p>
      )}
    </div>
  );
}

export default DayForecast;
