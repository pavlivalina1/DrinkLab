import React from 'react'
import "./LetterFilter.css"
import { Letter } from './Letter';

export const LetterFilter = () => {
  const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ];

  return (
    <div className="browse-drink"> 
          <h1>BROWSE DRINKS</h1>
          <div id="alphabet" className="alphabet">
            {
              letters.map((letter => (
                <div className='letter-div'>
                  <Letter letter={letter}/>
                  {letter!='Z' ? <span>/</span> : ""}
                </div>
              )))
            }
          </div>
      </div>
  )
}
