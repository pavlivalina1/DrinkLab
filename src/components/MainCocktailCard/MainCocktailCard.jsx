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
    
    <div id="cocktail-card-id2" className={props.class}>
        <div data-testid="main-cocktail-card" onClick={!cardClickDisabled ? handleCardClick: () => {}} className={`card ${clickedCard ? "is-flipped": ""}`}>
          <div className="cocktail-container cocktail-container--front">
            <div className="image-container"><img id="random-cocktail-img" className="cocktail-image" src={props.cocktail.strDrinkThumb}/></div>
            <div className="cocktail-text"><h1 id = 'random-recipe-title' className="cocktail-name">{props.cocktail.strDrink}</h1>
            <IngredientList cocktail={props.cocktail}/>
            </div>
            <hr/>
            <div className="see-instructions-message">Click to see instructions</div>
          </div>
          <div className="cocktail-container cocktail-container--back"> 
            <div  className="image-container"><img id="random-cocktail-img-back" className="cocktail-image" src={props.cocktail.strDrinkThumb}/></div>
            <div className="cocktail-text"><h1 className="cocktail-name">Instructions</h1>
              <p id="random-instr" style={props.cocktail.strInstructions.length>230 ? {overflow:'hidden'} : {}}>
                {props.cocktail.strInstructions}
              </p>
                <a onMouseEnter={handleMoreClick} onMouseLeave={handleMoreClick} id="instr-more" href="#popup1" style={props.cocktail.strInstructions.length>230 ? {display:'contents'} : {display: 'none'}}>more...</a>
               
                <h2 className="cocktail-name">Glass</h2>
                <p id="random-glass">{props.cocktail.strGlass}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
