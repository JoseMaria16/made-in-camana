import React from 'react'
import Gorros from '@/data/gorros'
import ProductList from '@/components/ProductList'


function GorrosPage() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 relative z-1  lg:grid-cols-4 gap-5 place-content-center'>
      {Gorros.map((product) => (
        <ProductList price={product.price}  category={product.category} key={product.id} id={product.id} img={product.img} />
      ))}
    </div>
  )
}

export default GorrosPage