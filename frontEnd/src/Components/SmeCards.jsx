import React from 'react'

const SmeCards = () => {
    return (
        <div className='bg-white m-2 my-3 border border-gray-300 p-6 rounded-lg shadow-md w-[430px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300'>
            <div className='bg-green-100 p-4 rounded-lg mb-4'>
                <h2 className='text-2xl font-semibold text-gray-800 p-2'>
                    Think Like an SME: Advanced Software Engineering
                </h2>
                <div className='flex items-center m-2 flex-wrap'>
                    <div className='p-2 mx-1 bg-white border border-gray-300 text-xs rounded-full shadow-inner text-gray-600'>
                        CareerOpportunities
                    </div>
                    <div className='p-2 mx-1 bg-white border border-gray-300 text-xs rounded-full shadow-inner text-gray-600'>
                        FresherJobs
                    </div>
                </div>
            </div>
            <div className='flex items-center mb-4'>
                <img
                    src="https://media.naukri.com/photo/fnevegalpanpr/l244%253AJu0KG03Nr354a8bRNwgHa517w3skbs85gl16kZVMnssd4xx%252FXVBZeMBlH5k2IQ%253D%253D"
                    alt="Profile"
                    className="h-12 w-12 rounded-full cursor-pointer"
                />

                <div className='ml-3'>
                    <h3 className='text-lg font-semibold text-gray-700'>MS. Kanika Mishra</h3>
                    <p className='text-gray-500'>Senior Software Engineer</p>
                </div>
            </div>
            <div className='border border-gray-200 mb-3'></div>

            <p className='text-gray-600 mb-4'>Recording duration: 1 hour 30 minutes</p>
            <p className='text-gray-600 mb-4'>This session covers advanced software engineering concepts, including system design...</p>
            <div className='flex justify-between items-center mt-4'>
                <button className='bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-300'>
                    Watch Now
                </button>
                <p className='text-gray-500 text-sm'>Posted on: 2023-10-01</p>

                <div className='border border-gray-200 mb-3'></div>
            </div>
        </div>
    )
}

export default SmeCards
