import React from 'react';

const AirQualityComp = ({name,value}) => {
  return (
    <div className='flex flex-col justify-center items-center '>
        <h4 className=' text-sm text-gray-400 '>{name}</h4>
        <p className='text-3xl'>{value?value:null}</p>
    </div>
  );
};

export default AirQualityComp;
