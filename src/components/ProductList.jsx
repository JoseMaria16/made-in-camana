import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductList({ id, img, price, category }) {
    return (
        <Link href={`/seccion/${category}/${id}`} className=' relative  group rounded-lg bg-gray-000  lg:p-2 lg:hover:bg-gray-400/70 transition-all duration-200 '>
            {/* <h3 className='absolute top-8 group-hover:text-lg group-hover:right-4 right-7 z-10 transition-all duration-300'>{price} PEN</h3> */}
            {/* <img className='group-hover:scale-110 transition-all z-1 duration-300' src={img} alt="" /> */}
            <div className='w-[100%] h-[150px] lg:h-[250px]  overflow-hidden relative' >
                <Image
                    className='object-contain lg:object-cover group-hover:scale-110 transition-all z-1 duration-300'
                    alt='Mountains'
                    src={img}
                    layout='fill'
                    
                />
            </div>
        </Link>
    )
}

export default ProductList