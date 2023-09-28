import ProductList from '@/components/ProductList'
import Extras from '@/data/sombreros-pareos'
import React from 'react'

function page() {
  return (
    <div className='grid  grid-cols-4 gap-5 place-content-center'>
      {Extras.map((product) => (
        <ProductList price={product.price} category={product.category} key={product.id} id={product.id} img={product.img} />
      ))}
    </div>
  )
}

export default page