import React from 'react'
import Polos from '@/data/polos'
import ProductList from '@/components/ProductList'

function PolosPage() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 relative z-1  lg:grid-cols-4 gap-5 place-content-center'>
      {Polos.map((product) => (
        <ProductList price={product.price} category={product.category} key={product.id} id={product.id} img={product.img} />
      ))}
    </div>
  )
}

export default PolosPage