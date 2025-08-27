import React, { useState } from 'react';
import Smecard from './Smecard';
import Experiencecard from './Experiencecard';
import { MdCheckCircle } from 'react-icons/md';
import Questioncard from './Questioncard';
import SmeCards from './SmeCards';
import { Link } from 'react-router-dom';


const Middle = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = ['Highest Rated', 'Most Popular', 'Recently Added', 'Internships'];

    return (
        <div className='mt-14 p-6'>
            {/* Banner Image */}
            <div className='relative w-full h-64'>
                <img
                    src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/nc-desktop-sap-banner-wdgt/latest/components/assets/bgMid.a2ec0814.png"
                    alt="Placeholder"
                    className="w-full h-full object-cover rounded-2xl"
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-center text-lg sm:text-xl px-4'>
                    Small steps taken consistently with courage and purpose<br />can lead to extraordinary transformations. Keep going.
                </div>
            </div>

            {/* Welcome Box */}
            <div className='mt-4 bg-green-100 flex justify-between items-center p-6 rounded-lg shadow-md overflow-hidden'>
                <div className='w-3/5 mx-2 text-left'>
                    <p className='text-xl font-bold text-gray-800'>Welcome to SMEConnectX</p>
                    <p className='text-gray-500 mb-4'>
                        Get career guidance, upskill yourself, learn from experts, and find opportunities.
                    </p>
                </div>
                <div className='bg-green-300 rounded-full flex-shrink-0 p-4'>
                    <img
                        src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/nc-desktop-welcome-banner-wdgt/latest/components/assets/img1.160fd62d.svg"
                        className='object-contain w-24 h-24'
                        alt="Welcome"
                    />
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

            {/* Recommended Section */}
            <div className='mt-6 bg-white p-6 rounded-lg shadow-md'>
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-2xl font-semibold text-gray-800'>Recommended jobs for you</h2>
                    <Link to="/recommended" className='text-green-600 text-l font-semibold hover:scale-105'>View all</Link>
                </div>

                {/* Tabs */}
                <div className='flex justify-between items-center border-b border-gray-300 mb-4'>
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`cursor-pointer text-lg font-medium pb-2 px-2 transition-all duration-200 border-b-4 ${activeIndex === index
                                ? 'border-green-600 text-gray-800'
                                : 'border-transparent text-gray-400'
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <div className='overflow-x-auto scrollbar-hide'>
                    <div className='flex space-x-4 min-w-max'>
                        <Smecard />
                        <Smecard />
                        <Smecard />
                        <Smecard />
                        <Smecard />
                    </div>
                </div>

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

            <div className='mt-6 bg-white p-6 rounded-lg shadow-md text-2xl font-semibold text-gray-800 justify-center flex items-center'>
                Your resume is ready! download for free.
                <button className='ml-4 bg-green-600 text-l text-white p-2 px-4 rounded-full hover:bg-green-700 transition-all duration-300'>Download </button>
            </div>

            <div className='mt-6 bg-green-100 p-6 rounded-lg shadow-md'>
                <div className='flex items-center justify-between mb-4'>
                    <div className='text-2xl font-semibold text-gray-800 w-5/6'>Decode commonly asked interview questions like a pro 😎</div>
                    <div className='font-semibold text-green-600 flex justify-end w-1/6 hover:scale-105 cursor-pointer '>View all</div>
                </div>

                <div className='flex items-center mb-4 space-x-4'>
                    <p className='text-gray-600 text-sm flex items-center space-x-2'>
                        <MdCheckCircle className="text-green-500" />
                        <span>Easy answers to common interview questions</span>
                    </p>

                    <p className='text-gray-600 text-sm flex items-center space-x-2'>
                        <MdCheckCircle className="text-green-500" />
                        <span>Get multiple answers to each question</span>
                    </p>
                </div>

                <div className='overflow-x-auto scrollbar-hide'>
                    <div className='flex space-x-4 min-w-max'>
                        <Questioncard />
                        <Questioncard />
                        <Questioncard />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Middle;
