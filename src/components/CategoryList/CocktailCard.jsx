import React from 'react'
import "./CocktailCard.css"
import { Link } from 'react-router-dom'

export const CocktailCard = (props) => {
  return (
    <Link data-testis="category-card" to={`/cocktail/${props.cocktail.idDrink}`} params={{id: props.cocktail.idDrink}} className="cocktail">
        <img src={props.cocktail.strDrinkThumb}/> 
        <p className="cocktail-name-list">
          {props.cocktail.strDrink}
        </p>
    </Link>
  )
}
