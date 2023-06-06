import React from 'react';
import { fireEvent, render,  screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import { PopularCocktails } from '../components/PopularCocktails/PopularCocktails';



describe("Hex Gallery", () => {
  test("SHOULD render hex gallery", () => {
    render(<BrowserRouter>
         <PopularCocktails />
    </BrowserRouter>);
    const header = screen.getByText("POPULAR COCKTAILS")
    expect(header).toBeInTheDocument();
  });
  
})