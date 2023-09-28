import React from 'react'

function CardProduct({id, img, title, price}) {
    return (
        <div>
            <h2>{id}</h2>
            <img src={img} />
            <h3>{title}</h3>
            <h3>{price}</h3>
        </div>
    )
}

export default CardProduct