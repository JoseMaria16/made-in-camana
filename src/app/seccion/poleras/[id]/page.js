import CardProduct from '@/components/CardProduct'
import Poleras from '@/data/poleras'
import React from 'react'

function DetailsPoleras({params}) {
    const product = Poleras.find((object) => object.id === params.id)
    const {title, id, img, price, category, tallas} = product
    return (
        <CardProduct  id={id} title={title} tallas={tallas} category={category} img={img} price={price} />
    )
}

export default DetailsPoleras