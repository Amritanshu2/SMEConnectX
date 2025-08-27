import React from 'react';
import { Link } from 'react-router-dom';

const Down = () => {

  const style = 'text-gray-700 text-lg py-2 font-semibold hover:text-teal-600 transition-all duration-300 cursor-pointer'

  return (
    <div className="bg-gray-100 p-6 flex flex-col shadow-lg rounded-lg border border-gray-300 absolute w-80 mx-auto mt-6 top-11 left-[338px] z-50">

      <Link to="/prepare" className={style}>Resume Maker</Link>
      <Link to="/prepare" className={style}>Personalised Interview Q/A</Link>
      <Link to="/prepare" className={style}>Career Guidance</Link>
      <Link to="/prepare" className={style}>Interview Experiences</Link>

    </div>
  );
};

export default Down;
