import React from 'react'
import "./Letter.css"
import { Link } from 'react-router-dom'

export const Letter = (props) => {
  return (
    <>
    <Link to={`/category/${props.letter}`} params = {{category: props.letter}} className="letter" category={props.letter}>{props.letter}</Link>
    </>
  )
}
