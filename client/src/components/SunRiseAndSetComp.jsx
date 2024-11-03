import React from 'react';

const SunRiseAndSetComp = ({Component,name,time,meridiem}) => {
  return (
    <div className='flex'>
        <div className='flex items-center mr-3 pt-2 justify-center  sm:text-5xl xl:text-7xl '>
            <Component />
        </div>
        <div className='flex flex-col'>
            <h4 className='text-gray-400  sm:text-sm sm:mb-1  xl:text-md xl:mb-2 '>{name}</h4>
            <p className='sm:text-lg xl:text-2xl'>{time?time:null} {meridiem}</p>
        </div>
    </div>
  );
}

export default SunRiseAndSetComp;
