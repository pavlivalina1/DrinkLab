import React from 'react'
import { CocktailCard } from './CocktailCard'
import "./CategoryList.css"
import { LetterFilter } from '../LetterFilter/LetterFilter'

export const CategoryList = (props) => {
  return (
    <>
    <h1 className="cocktail-list-header">{props.title}</h1>
    <div data-testid="category-list"  className="cocktail-list-container">
      {
        
        props.cocktails.map((cocktail) => (
          <CocktailCard  cocktail={cocktail}/>
        ))
      }
    </div>
    </>
  )
}
