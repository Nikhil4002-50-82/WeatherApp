import React from 'react';

const DailyForecastComp = ({Component,temperature,date,month,day}) => {
  return (
    <div className='p-2 mb-1 sm:mb-2  xl:mb-4 flex flex-col justify-center items-center'>
          <div className='grid grid-cols-3 gap-8 sm:gap-6 xl:gap-6 text-md sm:text-md  xl:text-md text-gray-400'>
            <span className='text-white  flex items-center justify-between'>
                {Component && <Component className="text-2xl sm:text-3xl mr-1" />}  {temperature}&deg;C
            </span> 
            <span className=' flex items-center justify-center'>
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
