import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <nav className='sticky top-0 z-10 w-full border-b-2 bg-white border-gray-300 pt-5 mb-5 pb-4'>
            <ul className='flex justify-between items-center'>
                <div className='bg-black w-5 h-5 rounded-full'></div>

                <li>
                    <Link href={'/'}>INICIO</Link>
                </li>

                <li>
                    <Link href={'/seccion/polos'}>POLOS</Link>
                </li>
                <li>
                    <Link href={'/seccion/poleras'}>POLERAS</Link>
                </li>
                <li>
                    <Link href={'/seccion/gorros'}>GOROS</Link>
                </li>
                <li>
                    <Link href={'/seccion/sombreros-pareos-bolsos'}>SOMBREROS / PAREOS / BOLSOS</Link>
                </li>
                <li>
                    <Link href={'/seccion/polos'}>PERSONALIZACIONES</Link>
                </li>
                <li>
                    <Link href={'/seccion/contacto'}>VISÍTANOS</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar