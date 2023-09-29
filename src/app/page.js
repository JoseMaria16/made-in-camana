import Link from "next/link";
import Image from "next/image";

const bestSelles = [
  {
    id: '1',
    img: "/polo.jpg",
    title: "Polo Oversize",
    price: 99,
  },
  {
    id: '2',
    img: "/polo.jpg",
    title: "Polo Oversize",
    price: 99,
  },
  {
    id: '3',
    img: "/polo.jpg",
    title: "Polo Oversize",
    price: 99,
  }
  , {
    id: '4',
    img: "/polo.jpg",
    title: "Polo Oversize",
    price: 99,
  }
]

export default function Home() {
  return (
    <div>
      <div className="mt-24 h-[calc(100vh-320px)]">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center md:text-3xl md:w-[80%] md:mx-auto lg:mx-0 lg:text-start pb-10 w-[100%] lg:text-4xl lg:w-[40%]">“Porque no todos tienen la suerte de nacer en el paraíso”🌾</h1>
          <Link className="bg-black flex w-max mx-auto lg:mx-0 text-white px-7 py-3 rounded-full" href={'/'}>Ver Productos  +</Link>
        </div>
        
      </div>
      <div className="flex flex-col justify-center relative items-center">
        <h2 className="text-3xl text-center font-semibold ">!Mas Vendidos!</h2>
        <div className="bg-black absolute -top-5 w-24 h-[2px]"></div>
        <div className="bg-black absolute -bottom-5 w-24 h-[2px]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20 mt-14">
        {bestSelles.map((product) => (
          <div key={product.id} className="group">
            <div  className="border-2 overflow-hidden transition-all duration-700 hover:border-black">
              {/* <img className="flex group-hover:scale-105 transition-all duration-300" src={product.img} /> */}
              <Image
              width={300}
              height={300}
              src={product.img}
              alt=""
              />
              <div>
                <h3>{product.title}</h3>
                <p>${product.price}<span>PEN</span></p>
              </div>
            </div>
            <Link href={'/'} className="bg-black text-white px-6 py-2 rounded-full flex mx-auto w-max mt-4">Ver todos</Link>
          </div>
        ))}
      </div>
    </div>
  )
}