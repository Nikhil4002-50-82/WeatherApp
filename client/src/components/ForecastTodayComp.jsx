import React from 'react';

const ForecastTodayComp = ({Component,temperature,time,meridien}) => {
  return (
    <div className='flex flex-col justify-center items-center rounded-2xl text-sm p-3 bg-gray-800 '>
            <span className='mb-2'>{time} {meridien}</span>
            <span className='mb-2'><Component className="text-3xl text-white"/></span>
            <span>{temperature}&deg;C</span>
    </div>
  );
}

export default ForecastTodayComp;
