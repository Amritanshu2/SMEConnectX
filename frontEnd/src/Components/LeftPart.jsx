import React from 'react'
import Card from './Card';

const LeftPart = () => {
    return (
        <div className="w-1/4 p-6">
            <div className="fixed left-3 top-1/2 -translate-y-1/2 w-1/4">
                <Card />
            </div>
        </div>
    )
}

export default LeftPart
