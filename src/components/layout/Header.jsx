import Link from 'next/link'
import { Mooli } from 'next/font/google'


const mooli = Mooli({
    subsets: ['latin'],
    display: 'swap',
    weight: [ '400', ]
  });

function Header() {
    return (
        <div className=''>
            <div className='bg-black w-screen -ml-32 h-4'></div>
            <header className='flex flex-col   pt-6 pb-0'>
                <div>
                    <h2 className={`${mooli.className} text-5xl text-center font-semibold`}>Made In Camaná</h2>
                    <div>

                    </div>
                </div>
                
            </header >
        </div>
    )
}

export default Header