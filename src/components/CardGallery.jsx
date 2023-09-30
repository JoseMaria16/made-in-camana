import Image from 'next/image'
import React from 'react'

function CardGallery({img}) {
    return (
        <div className="p-4 h-[300px] row-span-2 relative bg-gray-400">
            <Image
                src={img}
                // width={400}
                // height={400}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}

export default CardGallery