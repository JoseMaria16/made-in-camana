"use client"
import Link from 'next/link'
import NavBar from './NavBar';
import { useState } from 'react';



function Header() {
    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <div className='bg-black w-screen -ml-16 lg:-ml-32 h-4'></div>
            <header className='flex flex-col   pt-6 pb-0'>
                <div className='flex  justify-start gap-10 items-center lg:justify-center '>
                    <button className=' flex lg:hidden' onClick={() => {}}>X</button>
                    <h2 className={` text-3xl lg:text-5xl text-center font-semibold`}>Made In Camaná</h2>
                    
                </div>
                <div className='flex lg:hidden'>
                {/* <NavBar open={open}  /> */}
                </div>
            </header >
        </div>
    )
}

export default Header