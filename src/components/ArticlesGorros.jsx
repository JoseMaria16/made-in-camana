import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function ArticlesCustom({ articles }) {
  //   console.log(articles);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 relative z-1  lg:grid-cols-4 gap-3 place-content-center'>
      {articles.map((article) => (
        <Link key={article.id} href={`/seccion/gorros/${article.id}`} className=' relative  group rounded-lg bg-gray-000  p-2  lg:hover:bg-gray-400/70 transition-all duration-200 '>
          {/* <h3 className='absolute top-8 group-hover:text-lg group-hover:right-4 right-7 z-10 transition-all duration-300'>{price} PEN</h3> */}
          {/* <img className='group-hover:scale-110 transition-all z-1 duration-300' src={img} alt="" /> */}
          <div className='w-full  overflow-hidden relative' >
            <Image
              className='object-cover w-full h-full  group-hover:scale-110 transition-all z-1 duration-300'
              alt='Mountains'
              src={article.img}
              // layout='fill'
              width={479}
              height={429}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArticlesCustom