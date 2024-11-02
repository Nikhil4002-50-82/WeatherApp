import React from 'react';

const DailyForecastComp = ({Component,temperature,date,month,day}) => {
  return (
    <div className='mb-4 p-2 flex flex-col justify-center items-center'>
          <div className='grid grid-cols-3 gap-6'>
            <span className='flex items-center  justify-between'>
                {Component && <Component className=" text-2xl mr-1" />}  {temperature}&deg;C
            </span> 
            <span className='text-md text-gray-400 flex items-center justify-center'>
              {date} {month.slice(0,3)}
            </span>  
            <span className='text-md text-gray-400 flex items-center justify-center'>
                {day}
            </span>
            
          </div>
        </div>  
  );
}

export default DailyForecastComp;
