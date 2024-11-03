import React ,{useContext}from 'react';
import { AirQualityContext } from './context/airQualityContext';

import AirQualityComp from './AirQualityComp';

import { MdOutlineAir } from "react-icons/md";

const AirQuality = () => {
  
  const {airQualityRes,setAirQualityRes}=useContext(AirQualityContext);

  return (
    <div className='bg-gray-800  p-3 rounded-3xl'>
        <h4 className='  sm:text-sm xl:text-md text-gray-400 mb-3 '>Air Quality Index</h4>
        <div className='grid grid-cols-4 xl:grid-rows-3'>
            <div className='flex flex-col justify-center items-center '>
                <MdOutlineAir className=' sm:text-4xl xl:text-6xl ' />
            </div>
            {airQualityRes ?
            <>
              <AirQualityComp name="PM2 5" value={airQualityRes.pm2_5}/>
              <AirQualityComp name="PM2 10" value={airQualityRes.pm10}/>
              <AirQualityComp name="SO2" value={airQualityRes.so2}/>
              <AirQualityComp name="CO" value={airQualityRes.co}/>
              <AirQualityComp name="NO" value={airQualityRes.no}/>
              <AirQualityComp name="NO2" value={airQualityRes.no2}/>
              <AirQualityComp name="NH3" value={airQualityRes.nh3}/>
              <AirQualityComp name="03" value={airQualityRes.o3}/> 
            </>:
            <>
              <AirQualityComp name="PM2 5"/>
              <AirQualityComp name="PM2 10"/>
              <AirQualityComp name="SO2"/>
              <AirQualityComp name="CO"/>
              <AirQualityComp name="NO"/>
              <AirQualityComp name="NO2"/>
              <AirQualityComp name="NH3"/>
              <AirQualityComp name="03"/> 
            </>
            }
        </div>
    </div>
  );
}

export default AirQuality;
