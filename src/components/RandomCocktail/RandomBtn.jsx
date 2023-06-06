import React from 'react'
import "./RandomBtn.css"

export const RandomBtn = (props) => {

  
  return (
    <div onClick={props.getRandomCocktail} id="random-recipe-button" className="random-button2">
      <p className="">Get a random cocktail</p>
      <img src="https://cdn-icons-png.flaticon.com/512/2619/2619273.png" className="random-butn-icon"/>
    </div>
  )
}
