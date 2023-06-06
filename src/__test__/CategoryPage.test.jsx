import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, useParams } from 'react-router-dom';
import { CategoryPage } from '../pages/CategoryPage';
import { apiGetByCategory, apiGetByAlco, apiGetByLetter } from '../api/cocktails_api';

jest.mock('../api/cocktails_api');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('CategoryPage', () => {
 

  test('SHOULD render loader WHEN data is fetching', async () => {
    useParams.mockReturnValue({ category: `Ordinary_Drink` });
    apiGetByCategory.mockResolvedValueOnce([]);
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await waitFor(() => {
      expect(apiGetByCategory).toHaveBeenCalledTimes(1);
      expect(apiGetByCategory).toHaveBeenCalledWith('Ordinary_Drink');
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    
  });

  test('SHOULD render CategoryList component WHEN data is fetched FOR apiGetByCategory', async () => {
    useParams.mockReturnValue({ category: `Ordinary_Drink` });
     const mockCocktails = [
      {
        idDrink: '12345',
        strDrink: 'Test Cocktail',
        strDrinkThumb: 'test.jpg',
        strInstructions: 'Test instructions',
      },
      {
        idDrink: '1235',
        strDrink: 'Test Cocktail2',
        strDrinkThumb: 'test2.jpg',
        strInstructions: 'Test instructions2',
      },
    ];
    
     apiGetByCategory.mockResolvedValueOnce(mockCocktails);

    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    await waitFor(() => {
        expect(apiGetByCategory).toHaveBeenCalledTimes(1);
        expect(apiGetByCategory).toHaveBeenCalledWith('Ordinary_Drink');
        expect(screen.getByText('Ordinary Drinks')).toBeInTheDocument();
        expect(screen.getByTestId('category-list')).toBeInTheDocument();

      });

  });

  test('SHOULD renders NoDrinks component WHEN no data is fetched FOR apiGetByCategory', async () => {
    useParams.mockReturnValue({ category: `Ordinary_Drink` });
    apiGetByCategory.mockResolvedValueOnce([]);

    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );

    // expect(screen.getByTestId('letter-filter')).toBeInTheDocument();

    await waitFor(() => {
      expect(apiGetByCategory).toHaveBeenCalledTimes(1);
      expect(apiGetByCategory).toHaveBeenCalledWith('Ordinary_Drink');
      expect(screen.getByTestId('no-drinks')).toBeInTheDocument();

      //expect(screen.getByTestId('loader')).toBeInTheDocument();
      
    });
  });

    test('SHOULD render Error component WHEN no data is fetched FOR apiGetByCategory', async () => {
      useParams.mockReturnValue({ category: `Ordinary_Drink` });
      apiGetByCategory.mockRejectedValueOnce({status: 404});
  
      render(
        <BrowserRouter>
          <CategoryPage />
        </BrowserRouter>
      );

  
      await waitFor(() => {
        expect(apiGetByCategory).toHaveBeenCalledTimes(1);
        expect(screen.getByText('Something went wrong ...')).toBeInTheDocument();
      });
  

    });

    test('SHOULD render CategoryList component WHEN data is fetched FOR apiGetByLetter', async () => {
      useParams.mockReturnValue({ category: `A` });
       const mockCocktails = [
        {
          idDrink: '12345',
          strDrink: 'Test Cocktail',
          strDrinkThumb: 'test.jpg',
          strInstructions: 'Test instructions',
        },
        {
          idDrink: '1235',
          strDrink: 'Test Cocktail2',
          strDrinkThumb: 'test2.jpg',
          strInstructions: 'Test instructions2',
        },
      ];
      
       apiGetByLetter.mockResolvedValueOnce(mockCocktails);
  
      render(
        <BrowserRouter>
          <CategoryPage />
        </BrowserRouter>
      );
  
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    //   expect(screen.getByTestId('loader')).toBeInTheDocument();
      await waitFor(() => {
          expect(apiGetByLetter).toHaveBeenCalledTimes(1);
          expect(apiGetByLetter).toHaveBeenCalledWith('A');
          expect(screen.getByText('Test Cocktail')).toBeInTheDocument();
          expect(screen.getByTestId('category-list')).toBeInTheDocument();
  
        });
  
    });
  
    test('SHOULD render NoDrinks component WHEN no data is fetched FOR apiGetByLetter', async () => {
      useParams.mockReturnValue({ category: `A` });
      apiGetByLetter.mockResolvedValueOnce([]);
  
      render(
        <BrowserRouter>
          <CategoryPage />
        </BrowserRouter>
      );
  
      // expect(screen.getByTestId('no-drinks')).toBeInTheDocument();
      // expect(screen.getByTestId('letter-filter')).toBeInTheDocument();
  
      await waitFor(() => {
        expect(apiGetByLetter).toHaveBeenCalledTimes(1);
        expect(apiGetByLetter).toHaveBeenCalledWith('A');
        //expect(screen.getByTestId('loader')).toBeInTheDocument();
        
      });
    });
  
      test('SHOULD render Error component WHEN no data is fetched FOR apiGetByLetter', async () => {
        useParams.mockReturnValue({ category: `A` });
        apiGetByLetter.mockRejectedValueOnce({status: 404});
    
        render(
          <BrowserRouter>
            <CategoryPage />
          </BrowserRouter>
        );
  
    
        await waitFor(() => {
          expect(apiGetByLetter).toHaveBeenCalledTimes(1);
          expect(screen.getByText('Something went wrong ...')).toBeInTheDocument();
        });
    

      });

      test('SHOULD render CategoryList component WHEN data is fetched FOR apiGetByAlco', async () => {
        useParams.mockReturnValue({ category: `Alcoholic` });
         const mockCocktails = [
          {
            idDrink: '12345',
            strDrink: 'Test Cocktail',
            strDrinkThumb: 'test.jpg',
            strInstructions: 'Test instructions',
          },
          {
            idDrink: '1235',
            strDrink: 'Test Cocktail2',
            strDrinkThumb: 'test2.jpg',
            strInstructions: 'Test instructions2',
          },
        ];
        
         apiGetByAlco.mockResolvedValueOnce(mockCocktails);
    
        render(
          <BrowserRouter>
            <CategoryPage />
          </BrowserRouter>
        );
    
        expect(screen.getByTestId('loader')).toBeInTheDocument();
      //   expect(screen.getByTestId('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(apiGetByAlco).toHaveBeenCalledTimes(1);
            expect(apiGetByAlco).toHaveBeenCalledWith('Alcoholic');
            expect(screen.getByText('Alcoholic')).toBeInTheDocument();
            expect(screen.getByTestId('category-list')).toBeInTheDocument();
    
          });
    
      });

      test('SHOULD render CategoryList component WHEN data is fetched FOR apiGetByAlco(Non)', async () => {
        useParams.mockReturnValue({ category: `Non_Alcoholic` });
         const mockCocktails = [
          {
            idDrink: '12345',
            strDrink: 'Test Cocktail',
            strDrinkThumb: 'test.jpg',
            strInstructions: 'Test instructions',
          },
          {
            idDrink: '1235',
            strDrink: 'Test Cocktail2',
            strDrinkThumb: 'test2.jpg',
            strInstructions: 'Test instructions2',
          },
        ];
        
         apiGetByAlco.mockResolvedValueOnce(mockCocktails);
    
        render(
          <BrowserRouter>
            <CategoryPage />
          </BrowserRouter>
        );
    
        expect(screen.getByTestId('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(apiGetByAlco).toHaveBeenCalledTimes(1);
            expect(apiGetByAlco).toHaveBeenCalledWith('Non_Alcoholic');
            expect(screen.getByText('Non Alcoholic')).toBeInTheDocument();
            expect(screen.getByTestId('category-list')).toBeInTheDocument();
    
          });
    
      });
    
      test('SHOULD render NoDrinks component WHEN no data is fetched FOR apiGetByAlco', async () => {
        useParams.mockReturnValue({ category: `Alcoholic` });
        apiGetByAlco.mockResolvedValueOnce([]);
    
        render(
          <BrowserRouter>
            <CategoryPage />
          </BrowserRouter>
        );
    
    
        await waitFor(() => {
          expect(apiGetByAlco).toHaveBeenCalledTimes(1);
          expect(apiGetByAlco).toHaveBeenCalledWith('Alcoholic');
          
        });
      });
    
        test('SHOULD render Error component WHEN no data is fetched FOR apiGetByAlco', async () => {
          useParams.mockReturnValue({ category: `Alcoholic` });
          apiGetByAlco.mockRejectedValueOnce({status: 404});
      
          render(
            <BrowserRouter>
              <CategoryPage />
            </BrowserRouter>
          );
    
      
          await waitFor(() => {
            expect(apiGetByAlco).toHaveBeenCalledTimes(1);
            expect(screen.getByText('Something went wrong ...')).toBeInTheDocument();
          });
  
        });

});


