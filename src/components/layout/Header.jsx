"use client"
import Link from 'next/link'
import NavBar from './NavBar';
import { useState } from 'react';
import Image from 'next/image';



function Header() {
    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <div className='bg-black w-screen -ml-16 lg:-ml-32 h-4'></div>
            <header className='flex flex-col   pt-6 pb-0'>
                <div className='flex  justify-start gap-7 items-center lg:justify-center '>
                    <button className='pl-4 flex lg:hidden' onClick={() => setOpen(true)}>
                        {/* <img className='w-6' src="/bar.svg" alt="" /> */}
                        <Image
                        width={30}
                        height={30}
                        src='/bar.svg'
                        alt='menu' />
                    </button>
                    <h2 className={` text-3xl lg:text-5xl text-center font-semibold`}>Made In Camaná</h2>

                </div>
                <nav className={`md:hidden fixed ${open ? 'left-0': '-left-[1000px]'} h-screen lg:h-max w-[70%] lg:sticky top-0 z-10 lg:w-full border-b-2 transition-all duration-300 bg-white border-gray-300 pt-5 mb-5 pb-4`}>
                    <ul className='flex flex-col mt-5 lg:flex-row lg:justify-between px-10 gap-5 lg:items-center'>
                        <div onClick={() => setOpen(false)} className='bg-black w-5 h-5 rounded-full'></div>

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
            </header >
        </div>
    )
}

export default Header