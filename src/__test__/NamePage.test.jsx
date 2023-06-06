import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { apiGetByName } from '../api/cocktails_api';
import { act } from 'react-dom/test-utils';
import { NamePage } from '../pages/NamePage';

jest.mock('../api/cocktails_api');

describe('NamePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('SHOULD render loader WHEN fetching data', async () => {
    apiGetByName.mockResolvedValueOnce([]);

    render(
     <BrowserRouter>
          <NamePage />
      </BrowserRouter>
        
    );

    await waitFor(() => {

      expect(screen.getByTestId('loader')).toBeInTheDocument();
      expect(apiGetByName).toHaveBeenCalledTimes(1);
      
    });
  });

  test('SHOULD render CategoryList WHEN data is fetched', async () => {
    const mockCocktails = [
      { idDrink: '1', strDrink: 'Cocktail 1' },
      { idDrink: '2', strDrink: 'Cocktail 2' },
    ];

    apiGetByName.mockResolvedValueOnce(mockCocktails);

    render(
      <BrowserRouter>
        <NamePage/>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(apiGetByName).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByTestId('category-list')).toBeInTheDocument();
    expect(screen.getByText('Cocktail 1')).toBeInTheDocument();
    expect(screen.getByText('Cocktail 2')).toBeInTheDocument();
  });

  test('SHOULD render NoDrinks component WHEN no data is fetched', async () => {
    apiGetByName.mockResolvedValueOnce(undefined);

    render(
      <BrowserRouter>
        <NamePage/>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(apiGetByName).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByTestId('no-drinks')).toBeInTheDocument();
  });

  test('SHOULD render Error component WHEN API call fails', async () => {
    apiGetByName.mockRejectedValueOnce({ status: 404 });

    await act(async () => {
      render(
        <BrowserRouter>
          <NamePage />
        </BrowserRouter>
      );
    });

    expect(screen.getByText('Something went wrong ...')).toBeInTheDocument();

    await waitFor(() => {
      expect(apiGetByName).toHaveBeenCalledTimes(1);
    });

  });
});
