import React from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>


            <div className='bg-emerald-100 p-6 pt-16 shadow-lg rounded-lg relative w-80 mx-auto'>

                <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white outline outline-4 outline-green-500'>
                    <img
                        src="https://media.naukri.com/media/jphotov1/l244%253ALukcMTq%252F2gEbErq3VQgEbp00wHshbso7g1t73KRzlTrGKrkS7hVghXj9kP1e"
                        alt="Profile"
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='box text-center'>
                    <h2 className='text-2xl font-bold text-gray-800'>Amritanshu</h2>
                    <p className='text-gray-600 mt-2'>Software Engineer</p>
                    <p className='text-gray-600'>@LNCT Group of College</p>

                    <Link
                        to="/profile"
                        className="mt-4 inline-block px-5 py-2 bg-green-600 text-white text-base font-bold rounded-full hover:bg-green-900 transition duration-300"
                    >
                        View Profile
                    </Link>

                    <div className='p-2 mt-3 bg-green-100 rounded-lg shadow-inner'>
                        <div className='font-semibold text-sm text-gray-800 mb-2'>Profile performance</div>

                        <div className='flex items-center space-x-6'>
                            {/* Search Appearances */}
                            <div className='text-left ml-2 text-xs text-gray-700 pr-5'>
                                Search <br/> appearances<br />
                                <span className='text-blue-600 text-xl font-semibold'>{75}</span>
                            </div>
                             <div className="h-[36px] border-l-[1px] border-[#ced0d4] mx-2"></div>
                            {/* Recruiter Actions */}
                            <div className='text-left text-xs text-gray-700 pl-2'>
                                Recruiter <br/> actions<br />
                                <span className='text-blue-600 text-xl font-semibold'>{13}</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Card
