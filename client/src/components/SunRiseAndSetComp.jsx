import React from 'react';

const SunRiseAndSetComp = ({Component,name,time,meridiem}) => {
  return (
    <div className='flex'>
        <div className='flex items-center justify-center text-7xl mr-3 pt-2'>
            <Component />
        </div>
        <div className='flex flex-col'>
            <h4 className=' text-md text-gray-400 mb-2 '>{name}</h4>
            <p className='text-2xl'>{time?time:null} {meridiem}</p>
        </div>
    </div>
  );
}

export default SunRiseAndSetComp;
