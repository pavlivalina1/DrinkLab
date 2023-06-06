import React from 'react';
import { getAllByText, getByTestId, render, screen, waitFor } from '@testing-library/react';
import { MainPage } from '../pages/MainPage';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { apiGetRandomCocktail } from '../api/cocktails_api';

jest.mock('../api/cocktails_api', () => ({
  apiGetRandomCocktail: jest.fn(),
}));

describe('MainPage', () => {
  test('SHOULD render the random cocktail WHEN loaded successfully', async () => {
    const mockCocktail = {
      idDrink: '12345',
      strDrink: 'Test Cocktail',
      strDrinkThumb: 'test.jpg',
      strInstructions: 'Test instructions',
    };

    apiGetRandomCocktail.mockResolvedValueOnce(mockCocktail);

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(apiGetRandomCocktail).toHaveBeenCalledTimes(1);
      expect(apiGetRandomCocktail).toHaveBeenCalledWith();
      expect(screen.getByText('Test Cocktail')).toBeInTheDocument(); 
      expect(screen.getByText('TRY YOUR LUCK')).toBeInTheDocument(); 
      });
  });

  test('SHOULD render error component WHEN API call fails', async () => {
    apiGetRandomCocktail.mockRejectedValueOnce({ status: 404 });

    await act(async () => {
      render(
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      );
    });

    expect(screen.getByText('Something went wrong ...')).toBeInTheDocument();

    await waitFor(() => {
      expect(apiGetRandomCocktail).toHaveBeenCalledTimes(1);
      expect(apiGetRandomCocktail).toHaveBeenCalledWith();
    });

  });

  test('SHOULD render header, cocktail collections, popular coktails, letter filter, footer', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId('main-header')).toBeInTheDocument();
    expect(screen.getByText('POPULAR COCKTAILS')).toBeInTheDocument();
    expect(screen.getByText('POPULAR COCKTAILS')).toBeInTheDocument();
  })
});