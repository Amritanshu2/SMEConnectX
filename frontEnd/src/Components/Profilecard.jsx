import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';


const Profilecard = ({ onClose }) => {
    return (
        <div className="fixed top-0 right-0 rounded-l-3xl border-grey-600 h-full w-[30rem] bg-white shadow-lg z-50 p-6 transition-transform transform animate-slide-in">
            <div className="flex mb-4 justify-end">
                <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-2xl font-bold">×</button>
            </div>
            <div className="flex items-center mb-4 ">
                <div className='w-24 h-24 mx-3 rounded-full overflow-hidden border-4 border-white shadow-md bg-white outline outline-4 outline-green-500'>
                    <img
                        src="https://media.naukri.com/media/jphotov1/l244%253ALukcMTq%252F2gEbErq3VQgEbp00wHshbso7g1t73KRzlTrGKrkS7hVghXj9kP1e"
                        alt="Profile"
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='ml-3'>
                    <h2 className='text-2xl font-bold text-gray-800 mt-2'>Amritanshu</h2>
                    <p className='text-gray-600'>Software Engineer</p>
                    <p className='text-gray-600'>@LNCT Group of College</p>
                    <Link to='/profile' onClick={onClose} className="mt-2 text-green-600 text-base font-semibold hover:text-green-900 transition duration-300">
                        View profile & Update profile</Link>
                </div>
            </div>
            <div className='border border-gray-200 mt-3'></div>

            <div className="mt-4 flex items-center justify-between">
                <p className="font-semibold text-xl text-gray-800">
                    Your profile performance
                </p>
                <p className="text-gray-500 text-sm">
                    Last 90 days
                </p>
            </div>

            <div className='p-2 mt-3 flex justify-between bg-green-100 rounded-lg shadow-inner'>
                <div className="p-4 flex flex-col items-center ml-2">
                    <div className='text-2xl text-center font-semibold mb-2'>35</div>
                    <div className='font-semibold text-sm text-gray-800 mb-1'>Search Appearances</div>
                    <button className='text-green-700 font-semibold '>View all</button>

                </div>
                <div className='border border-gray-200'></div>
                <div className="p-4 flex flex-col items-center mr-2">
                    <div className='text-2xl text-center font-semibold mb-2'>5</div>
                    <div className='font-semibold text-sm text-gray-800 mb-1'>Recruiter Actions</div>
                    <button className='text-green-700 font-semibold '>View all</button>
                </div>
            </div>

            <div className="flex flex-col items-left space-y-6 mt-8 text-gray-600">
                <div className="flex space-x-4">
                    <HiOutlineMenuAlt3 className="text-2xl cursor-pointer" />
                    <Link to="/profile" className="text-lg font-semibold hover:text-green-700 transition duration-300">Career guidance</Link>
                </div>
                <div className="flex space-x-4">
                    <FiSettings className="text-2xl cursor-pointer" />
                    <Link to="/profile" className="text-lg font-semibold hover:text-green-700 transition duration-300">Settings</Link>
                </div>
                <div className="flex space-x-4">
                    <HiOutlineQuestionMarkCircle className="text-2xl cursor-pointer" />
                    <Link to="/profile" className="text-lg font-semibold hover:text-green-700 transition duration-300">FAQs</Link>
                </div>
                <div className="flex space-x-4">
                    <FiLogOut className="text-2xl cursor-pointer" />
                    <Link to="/profile" className="text-lg font-semibold hover:text-green-700 transition duration-300">Logout</Link>
                </div>

            </div>


        </div>
    );
};

export default Profilecard;
