/* istanbul ignore file */
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/';

export async function apiGetRandomCocktail() {

  let cocktail = {};
  let response = await axios.get(`${url}random.php`);
  cocktail = response.data.drinks[0];
  return cocktail;
}

export async function apiGetCocktailById(id) {

  let cocktail = {};
  let response = await axios.get(`${url}lookup.php?i=${id}`);
  cocktail = response.data.drinks[0];
  return cocktail;
}

export async function apiGetByCategory(category) {

  let cocktails = '';
  let response = await axios.get(`${url}filter.php?c=${category}`);
  cocktails = response.data.drinks;
  return cocktails;
}

export async function apiGetByAlco(category) {

  let cocktails = '';
  let response = await axios.get(`${url}filter.php?a=${category}`);
  cocktails = response.data.drinks;
  return cocktails;
}

export async function apiGetByLetter(category) {

  let cocktails = '';
  let response = await axios.get(`${url}search.php?f=${category}`);
  cocktails = response.data.drinks;
  return cocktails;
}

export async function apiGetByName(name) {

  let cocktails = '';
  console.log(name)
  let response = await axios.get(`${url}search.php?s=${name}`);
  cocktails = response.data.drinks;
  return cocktails;
 
}