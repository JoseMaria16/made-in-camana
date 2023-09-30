import Link from 'next/link'
import React from 'react'

function MesageButon({url}) {
  return (
    <Link className='bg-black flex w-max mx-auto text-white py-2 px-6 rounded-full mt-2 lg:mx-0' href={`${url}`} target='_blank'>Realizar Pedido</Link>

  )
}

export default MesageButon