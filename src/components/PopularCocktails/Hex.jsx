import React from 'react'
import "./Hex.css";
import { Link } from 'react-router-dom';

const Hex = (props) => {


  return (
    <div className="hex"><img className="polygon-image" src={props.strDrinkThumb} alt="some"/><Link to={`/cocktail/${props.id}`} params={{id: props.id}} className="cocktail-name-hex">{props.strDrink}</Link></div>
  )
}

export {Hex};