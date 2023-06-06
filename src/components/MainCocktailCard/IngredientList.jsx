import React, { useEffect, useState } from 'react'
import "./IngredientList.css";
import { Ingredient } from './Ingredient';

export const IngredientList = (props) => {

  const [ingr, setIngr] = useState([]);
  const ingrListMain = [];

  for (let i = 1; i <= 6; i += 1) {
    let ingredient = props.cocktail[`strIngredient${i}`];
    let measure = props.cocktail[`strMeasure${i}`];
    if (!ingredient) {
        break;
    }
    if (!measure) {
        measure = '';
    }
    let ingrList = {
      ingr: ingredient,
      meas: measure
    }
    ingrListMain.push(ingrList);

  }  
  
  useEffect(() => {
    setIngr(ingrListMain)
  },[props.cocktail])

  return (
    <ul className="ingredient-list">
    {
      ingr.map((ingredient) => (
        <Ingredient ingr={ingredient.ingr} measure={ingredient.meas} />
      ))
    }
  </ul>
  )
}
