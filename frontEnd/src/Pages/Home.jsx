import React from 'react'
import Middle from '../Components/Middle'
import RightPart from '../Components/RightPart'
import LeftPart from '../Components/LeftPart'

const Home = () => {
    return (
        <>
            <div className="bg-[#f8f9fa] min-h-screen flex">
                {/* Left Sidebar */}
                <LeftPart/>

                {/* Middle Content */}
                <div className="w-2/4 p-6">
                    <Middle />
                </div>

                {/* Fixed Card on Right */}
                
                    <RightPart />
                
            </div>

        </>
    )
}

export default Home
