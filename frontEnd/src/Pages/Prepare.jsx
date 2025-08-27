import React from 'react'
import LeftPart from '../Components/LeftPart'
import RightPart from '../Components/RightPart'
import Experiencecard from '../Components/Experiencecard'
import SmeCards from '../Components/SmeCards'
import Questioncard from '../Components/Questioncard'

const Prepare = () => {
  return (

    <>
      <div className="bg-[#f8f9fa] min-h-screen flex">
        <LeftPart />

        <div className='mt-14 p-6 w-2/4 p-6'>


          {/* Resume Download */}
          <div className='mt-6 bg-white p-6 rounded-lg shadow-md text-2xl font-semibold text-gray-800 justify-center flex items-center'>
            your resume is ready to download view and edit for free.
            <button className='ml-4 bg-green-600 text-base text-white p-2 px-4 rounded-full hover:bg-green-700 transition-all duration-300'>
              Edit & View
            </button>
          </div>

          <div className='mt-6 bg-green-100 p-6 rounded-lg shadow-md'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-2xl font-semibold text-gray-800 w-5/6'>Software Engineer Grade 1 interview experiences for you</h2>
              <div className='flex items-center space-x-2 w-1/6 justify-end'>
                <img
                  src="https://img.naukimg.com/logo_images/groups/v1/2257208.gif"
                  alt="Placeholder" className='width-11 rounded-full object-contain h-11' />
                <img
                  src="https://img.naukimg.com/logo_images/groups/v1/144830.gif"
                  alt="Placeholder" className='width-11 rounded-full object-contain h-11' />
              </div>
            </div>

            <div className='overflow-x-auto scrollbar-hide'>
              <div className='flex space-x-4 min-w-max'>
                <Experiencecard />
                <Experiencecard />
                <Experiencecard />
              </div>
            </div>
            <div className='mt-4 flex justify-center'>
              <div className='p-2 text-green-600 border-2 font-semibold border-green-600 rounded-full w-fit hover:bg-green-600 hover:text-white cursor-pointer transition-all duration-300'>
                View all
              </div>
            </div>
          </div>

          {/* SME's */}
          <div className='mt-6 bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between'>
              <h2 className='text-2xl text-gray-800 font-semibold'>Subject Matter Experts</h2>
              <button className='text-green-600 text-l font-semibold hover:scale-105'>View all</button>
            </div>
            <p className='text-l  text-gray-500'>Gain insights from industry experts</p>
            <div className='overflow-x-auto scrollbar-hide'>
              <div className='flex space-x-4 min-w-max'>
                <SmeCards />
                <SmeCards />
                <SmeCards />
                <SmeCards />
                <SmeCards />
                <SmeCards />
              </div>
            </div>
          </div>

          {/* Interview Questions */}
          <div className='overflow-x-auto scrollbar-hide'>
            <div className='flex space-x-4 min-w-max'>
              <Questioncard />
              <Questioncard />
              <Questioncard />
            </div>
          </div>

        </div>



        <RightPart />
      </div>

    </>
  )
}

export default Prepare
