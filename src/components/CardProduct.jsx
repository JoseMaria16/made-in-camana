import React from 'react'
import Image from 'next/image'
import MesageButon from './MesageButon'
import Pedido from './Pedido'

function CardProduct({ id, img, title, price, category, categoryFilter,  tallas }) {
    return (
        <div className={`flex my-5 flex-col lg:flex-row ${categoryFilter === 'gorros' ? 'lg:mt-24': ''}`}>
            {/* <h4>{id}</h4> */}
           {categoryFilter === 'gorros'? (
             <div className='w-[80%] lg:w-[100%] md:w-[70%] flex flex-col xl:w-[60%] mx-auto'>
             <Image
                 className='flex mx-auto'
                 width={350}
                 height={350}
                 src={img}
                 alt=''
             />
             <h3 className='text-2xl text-center'>{title}</h3>
         </div>
           ): (
             <div className='w-[80%] lg:w-[100%] md:w-[70%] flex flex-col xl:w-[70%] mx-auto'>
                <Image
                    className='flex mx-auto'
                    width={600}
                    height={600}
                    src={img}
                    alt=''
                />
                <h3 className='text-2xl text-center'>{title}</h3>
            </div>
           )}
            <div className='flex justify-center items-center lg:items-start flex-col gap-3 pl-0'>
                <h3 className=' text-3xl font-light text-center lg:text-start'>Categoria: <span className='font-bold capitalize'>{categoryFilter === 'gorros' ? categoryFilter: category}</span></h3>
                <p className='text-lg w-[80%] xl:w-[80%] text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dolore voluptatem explicabo rem perferendis, veniam e</p>
                {/* <img src={img} /> */}
                {/* <h3 className='py-3'>{price}</h3> */}
                <div className='flex gap-0  text-center'>

                    {category === 'polos' || category === 'poleras' ? (<div className='flex flex-col '>
                        <h5 className='text-center font-semibold'>Tallas:</h5>
                        <div className='flex gap-16'>
                            {tallas.map((talla, i) => (
                                <div key={i}>
                                    <h4 className='text-center'>{talla.talla}</h4>
                                    <p>s/ {talla.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>) : category === 'bolsos' || category === 'sombreros' || category === 'pareos' ? (
                        <div className='flex gap-5'>
                            <h3 className='text-center'>Precio:</h3>
                            <p>s/ <span>{price}</span></p>
                        </div>
                    ) : ''}
                </div>
                <Pedido title={title} price={price} category={category} categoryFilter={categoryFilter} />
            </div>
        </div>
    )
}

export default CardProduct