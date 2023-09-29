import CardProduct from '@/components/CardProduct'
import Gorros from '@/data/gorros'
import React from 'react'


function DetailsGorros({ params }) {
    const product = Gorros.find((object) => object.id === params.id)
    const {title, id, img, price, categoryFilter} = product
    return (
        <CardProduct  id={id} title={title} categoryFilter={categoryFilter} img={img} price={price} />
    )
}

export default DetailsGorros