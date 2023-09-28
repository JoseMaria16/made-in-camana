import CardProduct from '@/components/CardProduct'
import Poleras from '@/data/poleras'
import React from 'react'

function DetailsPoleras({params}) {
    const product = Poleras.find((object) => object.id === params.id)
    const {title, id, img, price} = product
    return (
        <CardProduct  id={id} title={title} img={img} price={price} />
    )
}

export default DetailsPoleras