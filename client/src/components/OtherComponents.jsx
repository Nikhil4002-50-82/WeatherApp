import React from 'react';

const OtherComponents = ({Component,name,value}) => {
  return (
    <div className='bg-gray-800 h-full p-3 rounded-2xl flex'>
        <div className=' w-full flex flex-col justify-around'>
            <h4 className='sm:text-sm xl:text-md text-gray-400 px-4'>{name}</h4>
            <div className='flex justify-between items-center px-4 py-2  sm:text-xl  xl:text-3xl '>
                <Component className="sm:text-2xl "/>
                {value}
            </div>
        </div>   
    </div>
  );
}

export default OtherComponents;
