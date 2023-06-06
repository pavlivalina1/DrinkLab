import React from 'react'
import "./Ingredient.css"

export const Ingredient = (props) => {
  return (
    <li>{props.measure}   {props.ingr}</li>
  )
}
