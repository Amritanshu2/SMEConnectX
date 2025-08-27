import React from 'react';

const RightPart = () => {
    return (
        <div className="w-1/4">
            <div className="fixed right-3 top-1/2 -translate-y-1/2 w-1/4">
                <div className="bg-emerald-100 w-80 rounded-lg relative mx-auto">
                    <div>
                        <img
                            src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2025/07/Python-Developer.jpg"
                            alt="Python Developer Guide Banner"
                            className='w-80 h-[220px] rounded-t-2xl object-cover mx-auto mb-4 shadow-md'
                        />
                        <div className="w-full px-4 pb-4">
                            <p className='text-xl font-semibold text-black text-left'>
                                How to Become a Python Developer: A Guide for College Students
                            </p>
                            <p className='text-gray-500 mt-1 text-left'>
                                Python has emerged as one of the most sought-after programming languages in India's rapidly expanding tech...
                            </p>
                            <p className='text-green-800 font-bold hover:underline cursor-pointer'>
                                Read more
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPart;
