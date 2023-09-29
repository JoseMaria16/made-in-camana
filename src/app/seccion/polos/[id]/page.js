import CardProduct from '@/components/CardProduct'
import React from 'react'
import Polos from '@/data/polos'

function DetailsPolos({params}) {
    const product = Polos.find((object) => object.id === params.id)
    const { title, id, img, price, category, tallas } = product
    return (

        <CardProduct id={id} title={title} tallas={tallas} category={category} img={img} price={price} />
    )
  
}

export default DetailsPolos