import React from 'react';
import { fireEvent, render,  screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import { CocktailCollections } from '../components/CocktailCollections/CocktailCollections';
import { CategoryCard } from '../components/CocktailCollections/CategoryCard';


fetchMock.enableMocks();

describe("CocktailCollection", () => {
  test("SHOULD render Cocktail collections", () => {
    render(<BrowserRouter>
         <CocktailCollections />
    </BrowserRouter>);
    const collectionHeader = screen.getByText("COCKTAIL COLLECTIONS")
    expect(collectionHeader).toBeInTheDocument();
  });
  
  test('SHOULD redirect to the desired page on click', () => {
    render(
      <BrowserRouter>
        <CocktailCollections />
      </BrowserRouter>
    );
  

    fireEvent.click(screen.getByText('Alcoholic'));
    expect(window.location.pathname).toBe('/category/Alcoholic');
  });

  test("SHOULD link to category page on click", () => {
    render(<BrowserRouter>
      <CategoryCard category='Alcoholic' img="https://www.thecocktaildb.com/images/media/drink/jofsaz1504352991.jpg" title="Alcoholic" />
  </BrowserRouter>);
    const button = screen.getByTestId("category-card");
    fireEvent.click(button);
    const header = screen.getByText("Alcoholic");
    expect(header).toBeInTheDocument();
  })
})