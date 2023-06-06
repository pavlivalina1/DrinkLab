import React, { useState } from 'react'
import "./MainCocktailCard.css"
import { IngredientList } from './IngredientList'
import { DetailedRecipePopUp } from './DetailedRecipePopUp';

export const MainCocktailCard = (props) => {

  const [clickedCard, setClickedCard] = useState(false);
  const [showDetailedInstr, setShowDetailedInstr] = useState(false);
  const [cardClickDisabled, setCardClickDisabled] = useState(false);

  const handleCardClick = () => {
    setClickedCard(!clickedCard);
  }

  const handleMoreClick = () => {
    setShowDetailedInstr(!showDetailedInstr);
    setCardClickDisabled(!cardClickDisabled);
  }

  return (
    
    <div id="cocktail-card-id2" class={props.class}>
        <div data-testid="main-cocktail-card" onClick={!cardClickDisabled ? handleCardClick: () => {}} class={`card ${clickedCard ? "is-flipped": ""}`}>
          <div class="cocktail-container cocktail-container--front">
            <div class="image-container"><img id="random-cocktail-img" class="cocktail-image" src={props.cocktail.strDrinkThumb}/></div>
            <div class="cocktail-text"><h1 id = 'random-recipe-title' class="cocktail-name">{props.cocktail.strDrink}</h1>
            <IngredientList cocktail={props.cocktail}/>
            </div>
            <hr/>
            <div class="see-instructions-message">Click to see instructions</div>
          </div>
          <div class="cocktail-container cocktail-container--back"> 
            <div  class="image-container"><img id="random-cocktail-img-back" class="cocktail-image" src={props.cocktail.strDrinkThumb}/></div>
            <div class="cocktail-text"><h1 class="cocktail-name">Instructions</h1>
              <p id="random-instr" style={props.cocktail.strInstructions.length>230 ? {overflow:'hidden'} : {}}>
                {props.cocktail.strInstructions}
              </p>
                <a onMouseEnter={handleMoreClick} onMouseLeave={handleMoreClick} id="instr-more" href="#popup1" style={props.cocktail.strInstructions.length>230 ? {display:'contents'} : {display: 'none'}}>more...</a>
               
                <h2 class="cocktail-name">Glass</h2>
                <p id="random-glass">{props.cocktail.strGlass}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
