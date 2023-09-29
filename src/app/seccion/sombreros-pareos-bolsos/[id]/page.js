import CardProduct from '@/components/CardProduct'
import Extras from '@/data/sombreros-pareos'
import React from 'react'

function DetailsExtras({params}) {
    const product = Extras.find((object) => object.id === params.id)
    const {title, id, img, price, categoryText} = product
    return (
        <CardProduct  id={id} title={title} category={categoryText} img={img} price={price} />
    )
}

export default DetailsExtras