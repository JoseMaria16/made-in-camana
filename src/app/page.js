import Link from "next/link";
import Image from "next/image";
import CardGallery from "@/components/CardGallery";

const bestSelles = [
  {
    id: '1',
    img: "/polos/polo1.png",
    title: "Polo Unisex Negro",
    price: 55,
  },
  {
    id: '2',
    img: "/poleras/polera6.png",
    title: "Polera Camaná",
    price: 99,
  },
  {
    id: '3',
    img: "/gorros/verdes/verde1.png",
    title: "Gorro Verde U5F",
    price: 99,
  }
  , {
    id: '4',
    img: "/extras/extra12.png",
    title: "Bolso Flowers",
    price: 99,
  }
]
const gallery = [
  { img: "./1.jpeg", span: 'si' },
  { img: "./1.jpeg" },
  { img: "./1.jpeg" },
  { img: "./1.jpeg" },
  { img: "./1.jpeg" },
  { img: "./1.jpeg" },
  { img: "./1.jpeg" },
  { img: "./1.jpeg" },
  { img: "./1.jpeg" },
]
export default function Home() {
  return (
    <div>
      <div className=" mt-14 lg:mt-4 flex flex-col md:flex-row justify-between items-center h-max">
        <div className="flex w-[70%] lg:w-[50%] flex-col ">
          <h1 className="text-2xl text-center md:text-3xl  md:mx-auto lg:mx-0 lg:text-start pb-10 w-[100%] lg:text-4xl lg:w-[100%]">“Porque no todos tienen la suerte de nacer en el paraíso”🌾</h1>
          <Link className="bg-black hidden lg:flex w-max mx-auto lg:mx-0 text-white px-7 py-3 rounded-full" href={'/'}>Ver Nuestro Instagram  +</Link>
        </div>
        <div className=" w-[50%]">
          <Image
          className="flex mx-auto object-cover"
            width={450}
            height={450}
            src={"/logo.png"}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex flex-col mt-5 md:mt-0 justify-center relative items-center">
        <h2 className="text-3xl text-center font-semibold  ">!Mas Vendidos!</h2>
        <div className="bg-black absolute -top-5 w-24 h-[2px]"></div>
        <div className="bg-black absolute -bottom-5 w-24 h-[2px]"></div>
      </div>
      <div className="grid px-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20 mt-14">
        {bestSelles.map((product) => (
          <div key={product.id} className="group">
            <div className="border-2 overflow-hidden transition-all duration-700 hover:border-black">
              {/* <img className="flex group-hover:scale-105 transition-all duration-300" src={product.img} /> */}
              <div className='w-full  overflow-hidden relative' >
            <Image
              className='object-cover w-full h-full  group-hover:scale-110 transition-all z-1 duration-300'
              alt='Mountains'
              src={product.img}
              // layout='fill'
              width={479}
              height={429}
            />
          </div>
              <div className="px-3 py-3">
                <h3>{product.title}</h3>
                <p className="flex gap-5">${product.price}<span>PEN</span></p>
              </div>
            </div>
            <Link href={'/'} className="bg-black text-white px-6 py-2 rounded-full flex mx-auto w-max mt-4">Ver todos</Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center relative items-center">
        <h2 className="text-3xl text-center font-semibold ">!Galería!</h2>
        <div className="bg-black absolute -top-5 w-24 h-[2px]"></div>
        <div className="bg-black absolute -bottom-5 w-24 h-[2px]"></div>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-2 px-2 md:gap-5">



        <div className="group transition-all duration-300 p-0 rounded-xl overflow-hidden row-span-2 relative hover:bg-gray-400">
          <ImageCard img={"/1.jpeg"} />
        </div>
        <div className="group transition-all duration-300 p-0 rounded-xl overflow-hidden  relative ">
          <ImageCard img={"/home/2.jpg"} />
        </div>
        <div className=" group transition-all duration-300 p-0' rounded-xl overflow-hidden relative ">
          <ImageCard img={"/home/7.jpg"} />
        </div>
        <div className="group transition-all duration-300 p-0 rounded-xl overflow-hidden row-span-2 relative ">
          <ImageCard img={"/home/9.jpg"} />
        </div>
        <div className="group transition-all duration-300 p-0 rounded-xl overflow-hidden relative ">
          <ImageCard img={"/home/4.jpg"} />
        </div>
        <div className=" group transition-all duration-300 p-0 rounded-xl overflow-hidden relative ">
          <ImageCard img={"/home/8.jpg"} />
        </div>
        <div className="group transition-all duration-300 p-0 rounded-xl object-cover overflow-hidden relative ">
          <ImageCard img={"/home/6.jpg"} />
        </div>
        <div className="group transition-all duration-300 p-0 rounded-xl overflow-hidden relative ">
          <ImageCard img={"/home/5.jpg"} />
        </div>
        <div className="group transition-all duration-300 p-0 rounded-xl overflow-hidden  relative ">
          <ImageCard img={"/home/6.jpg"} />
        </div>
        <div className="group transition-all duration-300 p-0  rounded-xl overflow-hidden relative ">
          <ImageCard img={"/home/6.jpg"} />
        </div>
        <div className="group transition-all duration-300 p-0 rounded-xl overflow-hidden relative ">
          <ImageCard img={"/home/6.jpg"} />
        </div>
        <div className=" group transition-all duration-300 p-0 rounded-xl overflow-hidden relative ">
          <ImageCard img={"/home/6.jpg"} />
        </div>

        <div className="group transition-all duration-300 hover:bg-gray-400">
          <img src="https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/382325918_714162890727889_2210599734668088138_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEK-yEc7d86i0ii_SF_nZmPsNL8HvxwiuCw0vwe_HCK4EfdZnm9qtw4c0rDCerBP5zsbjEsg5v_NZJTO1hfjgtx&_nc_ohc=EBRgs0wmVfAAX-8yLxt&_nc_ht=scontent.flim8-1.fna&oh=00_AfCuuIhxTQdKuSycdmqxull76XkwEX4Sm1KF6atK_-O4zQ&oe=651C7987" />
        </div>







      </div>
    </div>
  )
}



const ImageCard = ({ img }) => {
  return <Image src={img} className="group-hover:scale-110 transition-all duration-300 overflow-hidden w-[100%] object-cover h-[100%]" width={400} height={400} objectFit="cover" />
}