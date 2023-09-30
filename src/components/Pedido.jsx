"use client"
import React, { useState } from 'react'
import MesageButon from './MesageButon'


function Pedido({category, categoryFilter, title, price}) {
    const [categoriaSelect, setCategoriaSelect] = useState(category ? category : categoryFilter ?  'gorros': '')
    const [cantidad, setCantidad] = useState('desconocida')
    const [talla, setTalla] = useState('desconocida')
    const [name, setName] = useState('Anonimo')
    const [lugar, setLugar] = useState('desconodido')

    const handleCantidad = (event) => {
        setCantidad(event.target.value)
    }
    const handleTalla = (event) => {
        setTalla(event.target.value)
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleDom = (event) => {
        setLugar(event.target.value)
    }
    return (
        <div className='flex flex-col'>
            <h5 className='font-semibold text-center lg:text-start'>Realizar Pedido:</h5>
            <div className={`flex  justify-center lg:justify-start  ${categoryFilter === 'gorros' ? 'gap-0' : 'gap-5'}`}>
                <div className='flex  flex-col w-max gap-2'>
                    {category === 'bolsos' || category === 'sombreros' || category === 'pareos' || categoryFilter === 'gorros' ? '' : (
                        <label htmlFor="" className='text-center'>Talla:</label>
                    )}
                    {category === 'polos' ? (
                        <select onChange={handleTalla} className=' outline-none px-5 bg-gray-300 rounded-md'>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    ) : category === 'poleras' ? (
                        <select onChange={handleTalla} className=' outline-none px-5 bg-gray-300 rounded-md'>
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
                    <input onChange={handleCantidad} type="number" className='px-0 bg-gray-300 rounded-md flex w-[100px]  outline-none text-center' name="" defaultValue={'0'} id="" />
                </div>
            </div>
            <div className='pb-3  flex gap-2'>
                <div className='flex flex-col w-max gap-2'>
                    <label htmlFor="" className='pl-5'>A nombre de:</label>
                    <input onChange={handleName} className='w-[160px] py-2 outline-none px-0 bg-gray-300 pl-4 placeholder-gray-600 rounded-md flex  ' type="text" name="" placeholder='Nombre..' id="" />
                </div>
                <div className='flex flex-col w-max gap-2'>
                    <label htmlFor="" className='text-center'>Al Lugar:</label>
                    <input type="text" name="" onChange={handleDom}  className='w-[160px] py-2 outline-none px-0 bg-gray-300 pl-4 placeholder-gray-600 rounded-md flex  ' placeholder='Domicilio' id="" />
                </div>
            </div>
            <MesageButon url={
                category === 'polos' || category === 'poleras' ? `https://wa.me/51969721673?text=Hola%2C%20Made%20in%20Caman%C3%A1%2C%20vengo%20desde%20tu%20pagina%20web%20a%20realizar%20el%20siguiente%20pedido%3A%20%0ACategoria%3A%20${categoriaSelect}%2C%0ANombre%3A%20${title}%2C%0ATalla%3A%20${talla}%2C%0ACantidad%3A%20${cantidad}%2C%0AAl%20domicilio%3A%20${lugar}%2C%0AA%20nombre%20de%3A%20${name}%0AEspero%20su%20respuesta%20con%20ansias.`

               // Gorros, pareos, sombreros. bolsos

                : `https://wa.me/51969721673?text=Hola%2C%20Made%20in%20Caman%C3%A1%2C%20vengo%20desde%20tu%20pagina%20web%20a%20realizar%20el%20siguiente%20pedido%3A%20%0ACategoria%3A%20${categoriaSelect}%2C%0ANombre%3A%20${title}%2C%0ACantidad%3A%20${cantidad}%2C%0APrecio%3A%20s%2F%20${price}%2C%0ACantidad%20a%20pagar%3A%20s%2F%20${price * cantidad}%0AAl%20domicilio%3A%20${lugar}%2C%0AA%20nombre%20de%3A%20${name}%0AEspero%20su%20respuesta%20con%20ansias.`
            }  />

        </div>
    )
}

export default Pedido
