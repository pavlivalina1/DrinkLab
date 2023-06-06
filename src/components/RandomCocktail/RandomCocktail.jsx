import React, { useEffect } from 'react';
import "./RandomCocktail.css";
import { MainCocktailCard } from '../MainCocktailCard/MainCocktailCard';
import { RandomBtn } from './RandomBtn';
import { DetailedRecipePopUp } from '../MainCocktailCard/DetailedRecipePopUp';
import { useState } from 'react';

const RandomCocktail = (props) => {

  const [cocktail, setCocktail] = useState(props.cocktail)

  useEffect(() =>
  {
    setCocktail(props.cocktail)
  }, [props.cocktail])

  return (
    <div>
      <h1 className="random-section-title" id="random-section">TRY YOUR LUCK</h1> 
      <div className="random-section">
      <MainCocktailCard class="scene-random" cocktail={cocktail} />
      <RandomBtn getRandomCocktail={props.getRandomCocktail}/>
      <DetailedRecipePopUp instr={cocktail.strInstructions}/>
    </div>
</div>
  )
}
export {RandomCocktail};