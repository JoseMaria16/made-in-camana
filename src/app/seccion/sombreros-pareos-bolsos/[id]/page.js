import CardProduct from '@/components/CardProduct'
import Extras from '@/data/sombreros-pareos'
import React from 'react'

function DetailsExtras({params}) {
    const product = Extras.find((object) => object.id === params.id)
    const {title, id, img, price} = product
    return (
        <CardProduct  id={id} title={title} img={img} price={price} />
    )
}

export default DetailsExtras