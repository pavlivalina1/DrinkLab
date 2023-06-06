import React from 'react'
import "./DetailedRecipePopUp.css"

export const DetailedRecipePopUp = (props) => {
  return (
    <div data-testid='popup' id="popup1" className="overlay">
    <div className="popup">
      <h2>Detailed Instructions</h2>
      <a className="close" href="#random-section">&times;</a>
      <div id = "random-detailed-instr" className="content" >
        {props.instr}
      </div>
    </div>
  </div>
  )
}
