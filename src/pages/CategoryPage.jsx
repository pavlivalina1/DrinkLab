import React, { useState, useEffect } from 'react';
import { MainHeader } from '../components/Header/MainHeader';
import { CocktailCard } from '../components/CategoryList/CocktailCard';
import { LetterFilter } from '../components/LetterFilter/LetterFilter';
import { CategoryList } from '../components/CategoryList/CategoryList';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Other/Loader';
import { NoDrinks } from '../components/Other/NoDrinks';
import { Error } from '../components/Other/Error';
import { apiGetByCategory, apiGetByAlco, apiGetByLetter } from '../api/cocktails_api';

export const CategoryPage = () => {
  const { category } = useParams();

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  const fetchData = async () => {

    setIsError(false);
    setIsLoading(true);
    

    try{ 
      if (category === 'Ordinary_Drink' || category === 'Shot') {
      const temp_cocktails = await apiGetByCategory(category);
      setCocktails(temp_cocktails);
      } 
      else if (category === 'Alcoholic' || category === 'Non_Alcoholic') {
      const temp_cocktails = await apiGetByAlco(category);
      setCocktails(temp_cocktails);
      } 
      else {
      const temp_cocktails = await apiGetByLetter(category);
      setCocktails(temp_cocktails);
    }
  }catch(error)
  {
    setIsError(true);
  }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (!isError ?( 
        !cocktails ? (
        <>
          <NoDrinks/>
          <LetterFilter/>
          </>
          
        ) : (
          <>
          
          <CategoryList cocktails={cocktails} title={
            category === 'Ordinary_Drink' ? 'Ordinary Drinks' :
            category === 'Non_Alcoholic' ? 'Non Alcoholic' :
            category
          }/>
          <LetterFilter/>
          </>
          
        )):(<Error/>))
      
      }
    </>
  );
}
