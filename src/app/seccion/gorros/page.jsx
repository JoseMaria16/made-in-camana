"use client"
import React, { useState } from 'react'
import Gorros from '@/data/gorros'
import ProductList from '@/components/ProductList'
import ButtonsList from '@/components/ButtonsList'
import ArticlesCustom from '@/components/ArticlesGorros'


// categoria todas osea mas vendidos
const GorrosAll = [
  {
    id: '1',
    img: "/polos/polo1.png",
    title: "Polo Oversize 1",
    price: 99,
    category: "black",
    categoryFilter: "red"

},

  ]


function GorrosPage() {
  const allCategories = ['Todas', ...new Set(Gorros.map(article => article.category))]
  const [categories, setCategories] = useState(allCategories)
  const [articles, setArticles] = useState(Gorros)

  // console.log(categories);

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }
  // const desorden = shuffleArray(Gorros)
  // console.log(desorden);
  // // Desordenar el array Gorros
  // const GorrosDesordenados = (shuffleArray(Gorros));
  // setArticles(GorrosDesordenados)

  const filterCategory = (category) => {
    if (category === 'Todas') {
      setArticles(Gorros)
      return
    }

    const filteredData = Gorros.filter(article => article.category === category);
    setArticles(filteredData)
  }


  return (
    <div className=''>
        <ButtonsList categories={categories} filterCategory={filterCategory} />
      {/* {Gorros.map((product) => (
        <ProductList price={product.price}  category={product.category} key={product.id} id={product.id} img={product.img} />
      ))} */}
      <ArticlesCustom articles={articles} />
    </div>
  )
}

export default GorrosPage