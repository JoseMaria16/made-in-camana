import React from 'react'
import Image from 'next/image'

function CardProduct({id, img, title, price}) {
    return (
        <div>
            <h2>{id}</h2>
            <Image
            width={300}
            height={300}
            src={img}
            alt=''
            />
            {/* <img src={img} /> */}
            <h3>{title}</h3>
            <h3>{price}</h3>
        </div>
    )
}

export default CardProduct