import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, useParams } from 'react-router-dom';
import { CocktailPage } from '../pages/CocktailPage';
import { act } from 'react-dom/test-utils';
import { apiGetCocktailById } from '../api/cocktails_api';

jest.mock('../api/cocktails_api');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('CocktailPage', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: '11000' });
  });

  test('SHOULD render loader WHEN data is fetching', async () => {

    const mockCocktail = {
      idDrink: '12345',
      strDrink: 'Test Cocktail',
      strDrinkThumb: 'test.jpg',
      strInstructions: 'Test instructions',
    };

    apiGetCocktailById.mockResolvedValueOnce(mockCocktail)

    render(
      <BrowserRouter>
        <CocktailPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await waitFor(() => {
      expect(apiGetCocktailById).toHaveBeenCalledTimes(1);
      expect(apiGetCocktailById).toHaveBeenCalledWith('11000');
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    
  });

  test('SHOULD render NoDrinks component WHEN no data is fetched', async () => {
    apiGetCocktailById.mockResolvedValueOnce(null);

    render(
      <BrowserRouter>
        <CocktailPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    })
    
    expect(screen.getByTestId('no-drinks')).toBeInTheDocument();

    await waitFor(() => {
      expect(apiGetCocktailById).toHaveBeenCalledTimes(1);
      expect(apiGetCocktailById).toHaveBeenCalledWith('11000');
    });

    
  });

  test('SHOULD render Error component WHEN API call fails', async () => {
    apiGetCocktailById.mockRejectedValueOnce({ status: 404 });

    await act(async () => { 
      render(
        <BrowserRouter>
          <CocktailPage />
        </BrowserRouter>
      );
    });

    expect(screen.getByText('Something went wrong ...')).toBeInTheDocument();

    await waitFor(() => {
      expect(apiGetCocktailById).toHaveBeenCalledTimes(1);
    });

  });

});
