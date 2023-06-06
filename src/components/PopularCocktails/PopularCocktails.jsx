import React, {useState} from 'react'
import { Hex } from './Hex';
import "./PopularCocktails.css";

export const PopularCocktails = () => {

  const [popularCocktails, setPopularCocktails] = useState([
    {
      idDrink:"11000",
      strDrink:"Mojito",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/metwgh1606770327.jpg"
    },
    {
      idDrink:"178336",
      strDrink:"Blueberry Mojito",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/07iep51598719977.jpg"
    },
    {
      idDrink:"11118",
      strDrink:"Blue Margarita",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/bry4qh1582751040.jpg"
    },
    {
      idDrink:"16271",
      strDrink:"The Evil Blue Thing",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ojnpz71504793059.jpg"
    },
    {
      idDrink:"11003",
      strDrink:"Negroni",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qgdu971561574065.jpg"
    },
    {
      idDrink:"13938",
      strDrink:"AT&T",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rhhwmp1493067619.jpg"
    },
    {
      idDrink:"17118",
      strDrink:"Arctic Mouthwash",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wqstwv1478963735.jpg"
    },
    {
      idDrink:"178364",
      strDrink:"Vodka Tonic",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/9koz3f1643821062.jpg"
    },
    {
      idDrink:"11004",
      strDrink:"Whiskey Sour",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/hbkfsh1589574990.jpg"
    },
    {
      idDrink:"17196",
      strDrink:"Cosmopolitan",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/kpsajh1504368362.jpg"
    },
    {
      idDrink:"12692",
      strDrink:"Lassi Khara",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/m1suzm1487603970.jpg"
    },
    {
      idDrink:"17202",
      strDrink:"Horse's Neck",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/006k4e1504370092.jpg"
    },
    {
      idDrink:"11410",
      strDrink:"Gin Fizz",
      strDrinkThumb:"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/drtihp1606768397.jpg"
    }
  ]);


  return (
    <>
      <div className="hex-gallery-title" id="hex"><p>POPULAR COCKTAILS</p></div>
        
            
      <section className='hexagon-gallery'>
      {
      popularCocktails.map((cocktail) => (
        <Hex strDrink={cocktail.strDrink} strDrinkThumb={cocktail.strDrinkThumb} id = {cocktail.idDrink}/>
      ))
      }
    </section>
    </>  
    )
}
