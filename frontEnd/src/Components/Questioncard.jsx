import React from 'react'

const Questioncard = () => {
    return (
        <>
            <div className='bg-white p-4 rounded-2xl h-[180px] w-[325px] border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative mx-auto my-4 flex flex-col text-left hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-shadow duration-300'>
                <p className='text-sm text-gray-500'>Question 1</p>
                <p className='font-semibold text-gray-800 mt-1'>Tell me about yourself?</p>

                <div className='mt-auto border border-gray-300'></div>
                <div className='flex mt-2 space-x-4 '>
                    <p className='text-gray-500 text-sm'>1 min read</p>
                    <p className='text-gray-500 text-sm'>2.3K views</p>

                </div>
            </div>

        </>
    )
}

export default Questioncard
