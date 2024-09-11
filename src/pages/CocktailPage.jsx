import React from 'react'
import {MainCocktailCard} from '../components/MainCocktailCard/MainCocktailCard'
import { DetailedRecipePopUp } from '../components/MainCocktailCard/DetailedRecipePopUp'
import { useParams } from 'react-router-dom'
import { apiGetCocktailById } from '../api/cocktails_api'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Other/Loader'
import { Error } from '../components/Other/Error'
import { NoDrinks } from '../components/Other/NoDrinks'

export const CocktailPage = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState();  

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getCocktailById()
  {
    let temp_cocktail = await apiGetCocktailById(id);
    setCocktail(temp_cocktail);
  } 

  useEffect(() => {
    const fetchData = async () =>{
      setIsLoading(true);
      try{
      await getCocktailById();
      }catch(error)
      {
        setIsError(true);
      }
      setIsLoading(false);
  };
    
  fetchData();  

}, []);

  return (
    <>
    {isLoading ? (
       <Loader/>
      ) : 
      (isError===false ? ( !cocktail ? <NoDrinks/> : (
      <>
         <MainCocktailCard cocktail = {cocktail} class='scene'/>
         <DetailedRecipePopUp instr={cocktail.strInstructions}/>
       </>
      )
      ): (<Error/>)
      )}
    </>
  )
}
