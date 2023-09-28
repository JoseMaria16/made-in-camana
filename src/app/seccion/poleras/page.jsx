import ProductList from '@/components/ProductList'
import Poleras from '@/data/poleras'
import React from 'react'

function PolerasPage() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 relative z-1  lg:grid-cols-4 gap-3 place-content-center'>
            {Poleras.map((product) => (
                <ProductList price={product.price} category={product.category} key={product.id} id={product.id} img={product.img} />
            ))}
        </div>
    )
}

export default PolerasPage