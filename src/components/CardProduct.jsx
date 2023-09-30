import React from 'react'
import Image from 'next/image'

function CardProduct({ id, img, title, price, category, categoryFilter,  tallas }) {
    return (
        <div className={`flex my-5 flex-col lg:flex-row ${categoryFilter === 'gorros' ? 'mt-24': ''}`}>
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
                <p className='text-lg w-[100%] xl:w-[80%] text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dolore voluptatem explicabo rem perferendis, veniam e</p>
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
                <h5 className='font-semibold'>Realizar Pedido:</h5>
                <div className={`flex md:justify-center md:items-center ${categoryFilter === 'gorros' ? 'gap-0': 'gap-5'}`}>
                    <div className='flex  flex-col w-max gap-2'>
                        {category === 'bolsos' || category === 'sombreros' || category === 'pareos' ||categoryFilter     === 'gorros' ? '' : (
                            <label htmlFor="" className='text-center'>Talla:</label>
                        )}
                        {category === 'polos' ? (
                            <select className=' outline-none px-5 bg-gray-300 rounded-md'>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        ) : category === 'poleras' ? (
                            <select className=' outline-none px-5 bg-gray-300 rounded-md'>
                                <option value="4">4</option>
                                <option value="8">8</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        ) : category === 'bolsos' || category === 'sombreros' || category === 'pareos' ? '' : ''}
                    </div>
                    <div className='flex flex-col w-max gap-2'>
                        <label htmlFor="" className=''>Cantidad:</label>
                        <input type="number" className='px-0 bg-gray-300 rounded-md flex w-[100px]  outline-none text-center' name="" defaultValue={'0'} id="" />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col w-max gap-2'>
                        <label htmlFor="" className='pl-5'>A nombre de:</label>
                        <input className='w-[200px] py-2 outline-none px-0 bg-gray-300 pl-4 placeholder-gray-600 rounded-md flex  ' type="text" name="" placeholder='Nombre..' id="" />
                    </div>
                    <div className='flex flex-col w-max gap-2'>
                        <label htmlFor="" className='text-center'>Talla:</label>
                        <select className='py-2 outline-none px-5 bg-gray-300 rounded-md'>
                            <option value="Camaná">Camaná</option>
                            <option value="Camaná">Camaná</option>
                            <option value="Camaná">Camaná</option>
                            <option value="Camaná">Camaná</option>
                        </select>
                    </div>
                </div>
                <button className='bg-black flex w-max mx-auto text-white py-2 px-6 rounded-full mt-2 lg:mx-0'>Cotizar Pedido</button>
            </div>
        </div>
    )
}

export default CardProduct