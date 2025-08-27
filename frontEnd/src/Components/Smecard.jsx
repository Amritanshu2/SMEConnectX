import React from 'react';

const Smecard = () => {
  return (
    <div className='bg-white p-2 pt-5 rounded-2xl border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative w-60 mx-auto my-4 flex flex-col items-center text-center hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300'>
      <img
        src="https://img.naukimg.com/logo_images/groups/v1/18850.gif"
        alt="Profile"
        className='w-11 h-11 object-contain mb-4 border-grey-700 border-2 rounded-2xl shadow-md'
      />
      <p className='text-2xl font-bold text-gray-800'>Digital Smash</p>
      <div className='flex items-center mt-2 text-sm text-gray-600'>
        <p className='mr-2'>4.3⭐</p>
        <div className='border-gray-400 h-4 border-l-[1px]'></div>
        <p className='ml-2'>13k+ reviews</p>
      </div>
      <p className='text-green-600 mt-3 font-semibold cursor-pointer hover:underline'>View</p>
    </div>
  );
};

export default Smecard;
