import React from 'react'
import { CalendarIcon, InformationCircleIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { BiUpvote } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

const Experiencecard = () => {
    const isSelected = true; 
    return (
        <>
            <div className='bg-white p-4 rounded-2xl border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative w-[500px] mx-auto my-4 flex flex-col items-center text-center hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300'>
                <div className='flex items-center w-full px-4'>
                    <img src="https://img.naukimg.com/logo_images/groups/v1/144830.gif" alt="Profile" className='h-14 w-14 object-contain border-grey-700 border-2 rounded-xl mr-3 shadow-md' />
                    <div>
                        <p className='text-xl font-semibold text-gray-800'>Senior Frontend Engineer</p>
                        <p className='text-l text-left font-semibold text-gray-400'>Interviewed by Paytm</p>
                    </div>
                </div>
                <div className='flex items-center w-full px-4 my-2 justify-between flex-wrap overflow-hidden'>
                    <p className='text-gray-600 text-sm flex items-center gap-1'>
                        <CalendarIcon className="h-4 w-4" /> Jan 2025
                    </p>
                    <p className='text-gray-600 text-sm flex items-center gap-1'>
                        <InformationCircleIcon className='h-4 w-4' /> 3 Rounds
                    </p>
                    <p className='text-gray-600 text-sm flex items-center gap-1'>
                        <CodeBracketIcon className='h-4 w-4' /> 4 Coding problems
                    </p>
                </div>

                <div className='p-2 my-2 bg-gray-100 rounded-lg shadow-inner w-full flex items-start'>
                    <img src="https://media.naukri.com/media/jphotov1/l244%253ALukcMTG%252F2QoeHLq0GUUCbZkyy3Uobck6g1s37Qun92ZtJh%252FBM2NkweJ91Uo%253D" className='w-14 h-14 rounded-full object-contain mr-4' alt="profile" />
                    <div className='mb-2 items-start'>
                        <p className='text-xl text-gray-600'>
                            Senior Frontend Engineer at Paytm
                        </p>
                        <p className='text-xl text-gray-600 text-start flex'>
                            0-2 years
                            <br />
                            

                            <div
                                className={`bg-white font-semibold px-2 p-1 rounded-2xl shadow-inner ml-2 text-sm border 
    ${isSelected ? 'text-green-600 border-green-500' : 'text-gray-600 border-gray-300'}`}
                            >
                                {isSelected ? 'Selected' : 'Not Selected'}
                            </div>

                        </p>
                    </div>

                </div>
                <div className='flex items-center w-full px-4 my-2 flex-wrap overflow-hidden space-x-2'>
                    <p className='text-gray-600 text-sm flex items-center gap-1'>
                        <BiUpvote className="h-4 w-4" /> 9 upvotes
                    </p>
                    <p className='text-gray-600 text-sm flex items-center gap-1'>
                        <AiOutlineEye className='h-4 w-4' /> 1345 views
                    </p>
                </div>

            </div>
        </>
    )
}

export default Experiencecard
