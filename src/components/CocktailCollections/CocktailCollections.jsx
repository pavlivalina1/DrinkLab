import React from 'react'
import "./CocktailCollections.css"
import { CategoryCard } from './CategoryCard'

export const CocktailCollections = () => {

  const categories = [
    {
      category: "Ordinary_Drink",
      img: "https://www.thecocktaildb.com/images/media/drink/t5pv461606773026.jpg",
      title: "Ordinary Drinks"
    },
    {
      category: "Shot",
      img: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uwqpvv1461866378.jpg",
      title: "Shots"
    },
    {
      category: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/jofsaz1504352991.jpg",
      title: "Alcoholic"
    },
    {
      category: "Non_Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
      title: "Non-Alcoholic"
    }
  ]


  return (
    <div className="cocktail-collections">
    <h1>COCKTAIL COLLECTIONS</h1>
    <div id="collections-container" className="collections-container">
     {
      categories.map((category) => (
        <CategoryCard  category={category.category} img={category.img} title={category.title}/>
      ))
     }
     </div>
  </div>
  )
}
