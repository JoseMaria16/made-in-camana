"use client"
import React from 'react'

function ButtonsList({ categories, filterCategory }) {
    return (
        <div className='flex flex-wrap lg:justify-center flex-row gap-6 lg:gap-16 items-start py-3 my-2 px-5 w-full'>
            {categories.map((category, i) =>
                <div
                    onClick={() => filterCategory(category)}
                    key={i}
                >
                    {/* {category}  */}
                    <div className={`w-8 h-8 rounded-full ${category === 'black' ? 'bg-black ':category === 'green' ? 'bg-green-600': category === 'blue' ? 'bg-blue-600': category === 'red' ? 'bg-red-600': category === 'orange' ? 'bg-orange-600': category === 'pink' ? 'bg-white-pink' : category === 'yellow' ? 'bg-yellow-purple': null} border-2 border-black`}></div>
                </div>
            )}
        </div>
    )
}

export default ButtonsList