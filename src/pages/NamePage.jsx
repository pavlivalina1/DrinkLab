import React, { useState, useEffect } from 'react';
import { CategoryList } from '../components/CategoryList/CategoryList';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Other/Loader';
import { apiGetByName } from '../api/cocktails_api';
import { NoDrinks } from '../components/Other/NoDrinks';
import { LetterFilter } from '../components/LetterFilter/LetterFilter';
import { Error } from '../components/Other/Error';

export const NamePage = () => {
  const { category } = useParams();

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try{
    const drinks = await apiGetByName(category);
    setCocktails(drinks);
    }catch(error)
    {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      {isError && <Error data-testid="error-component"/>}
      {isLoading ? (
        <Loader />
      ) : cocktails ? (
        <>
        <CategoryList cocktails={cocktails} title="" />
        <LetterFilter/>
        </>
      ) : (
        <>
        <NoDrinks/>
        <LetterFilter/>
        </>
      )}
    </>
  );
};
