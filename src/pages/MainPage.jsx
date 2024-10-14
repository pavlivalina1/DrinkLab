import React from 'react'
import { WelcomeHeader } from '../components/Header/WelcomeHeader'
import { PopularCocktails } from '../components/PopularCocktails/PopularCocktails'
import { RandomCocktail } from '../components/RandomCocktail/RandomCocktail'
import { CocktailCollections } from '../components/CocktailCollections/CocktailCollections'
import { LetterFilter } from '../components/LetterFilter/LetterFilter'
import { Footer } from '../components/Footer/Footer'
import { apiGetRandomCocktail } from '../api/cocktails_api'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Other/Loader'
import { Error } from '../components/Other/Error'

export const MainPage = () => {
    const [cocktail, setCocktail] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

  async function getRandomCocktail()
  {
    let temp_cocktail = await apiGetRandomCocktail();
    setCocktail(temp_cocktail);
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        await getRandomCocktail();
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);


  return (
    <>
      <WelcomeHeader/>
      <PopularCocktails/>

      {isLoading ? (
        <Loader/>
      ) : (isError===false ? <RandomCocktail cocktail={cocktail} getRandomCocktail={getRandomCocktail}/>:<Error data-testid='error-component'/>
      )}
      <CocktailCollections/>
      <LetterFilter/>
      <Footer/>
    </>
  )
}
