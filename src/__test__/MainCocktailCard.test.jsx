import React from 'react';
import { fireEvent, render,  screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import { MainCocktailCard } from '../components/MainCocktailCard/MainCocktailCard';


describe("Main Cocktail Card", () => {
  const cocktail = {
    idDrink: '12345',
    strDrink: 'Test Cocktail',
    strDrinkThumb: 'test.jpg',
    strInstructions: 'Test instructions',
  };

  test("SHOULD render Main Cocktail Card", () => {
    render(<BrowserRouter>
         <MainCocktailCard cocktail={cocktail} />
    </BrowserRouter>);

    expect(screen.getByText('Click to see instructions')).toBeInTheDocument();
    
  });


  test("SHOULD turn on click", () => {
    render(<BrowserRouter>
         <MainCocktailCard cocktail={cocktail} />
    </BrowserRouter>);

      const card = screen.getByTestId('main-cocktail-card');
      expect(card).toBeInTheDocument();
      fireEvent.click(card);
      expect(screen.getByText('Glass')).toBeInTheDocument();
  });

  test("SHOULD more appear WHEN more than 230 symbols", () => {
    const cocktail2 = {
        idDrink: '12345',
        strDrink: 'Test Cocktail',
        strDrinkThumb: 'test.jpg',
        strInstructions: 'TestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructionsTestInstructions',
        strIngredient1: 'Ingredient1',
        strMeasure1: 'Measure1',
        strIngredient2: 'Ingredient2',
        
      };
    render(<BrowserRouter>
        <MainCocktailCard cocktail={cocktail2} />
    </BrowserRouter>);

  const more = screen.getByText('more...');
  expect(more.style.display).toBe('contents');

  });
  
  test("SHOULD render detailed instructions WHEN more click", () => {
    render(<BrowserRouter>
         <MainCocktailCard cocktail={cocktail} />
    </BrowserRouter>);

      const more = screen.getByText('more...');
      const card = screen.getByTestId('main-cocktail-card');
      fireEvent.click(card);
      expect(card.classList).toContain('is-flipped');
      expect(more).toBeInTheDocument();
      fireEvent.mouseEnter(more);
      fireEvent.click(card);
      expect(card.classList).toContain('is-flipped');
      fireEvent.mouseLeave(more);
  });
})

