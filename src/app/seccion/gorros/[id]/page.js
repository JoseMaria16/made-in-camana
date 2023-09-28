import CardProduct from '@/components/CardProduct'
import Gorros from '@/data/gorros'
import React from 'react'


function DetailsGorros({ params }) {
    const product = Gorros.find((object) => object.id === params.id)
    const {title, id, img, price} = product
    return (
        <CardProduct  id={id} title={title} img={img} price={price} />
    )
}

export default DetailsGorros