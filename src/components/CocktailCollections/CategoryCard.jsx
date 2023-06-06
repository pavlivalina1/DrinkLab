import React from 'react'
import "./CategoryCard.css"
import { Link } from 'react-router-dom'

export const CategoryCard = (props) => {
  return (
    <Link data-testid="category-card" to={`/category/${props.category}`} params = {{category: props.category}} className="collection" category={props.category}>
      <img src={props.img}/>
      <p>{props.title}</p>
    </Link>
  )
}
