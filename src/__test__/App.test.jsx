import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';
 
describe('App', () => {
  test('SHOULD render MainHeader WHEN pathname is not "/main"', () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <App />
      </MemoryRouter>
    );

    const mainHeaderElement = screen.getByTestId('main-header');
    expect(mainHeaderElement).toBeInTheDocument();
  });

  test('SHOULD not render MainHeader WHEN pathname is "/main"', () => {
    render(
      <MemoryRouter initialEntries={['/main']} initialIndex={0}>
        <App/>
      </MemoryRouter>
    );

    const mainHeaderElement = screen.queryByText('Get a random cocktail');
    expect(mainHeaderElement).toBeInTheDocument();
  });

  test('SHOULD render MainPage WHEN the route matches "/main"', () => {
    render(
      <MemoryRouter initialEntries={['/main']} initialIndex={0}>
        <App/>
      </MemoryRouter>
    );

    const mainPageElement = screen.getByText('POPULAR COCKTAILS');
    expect(mainPageElement).toBeInTheDocument();
  });

  test('SHOULD render CocktailPage WHEN the route matches "/cocktail/:id"', () => {
    render(
      <MemoryRouter initialEntries={['/cocktail/11000']} initialIndex={0}>
        <App/>
      </MemoryRouter>
    );

    const cocktailPageElement = screen.getByTestId('loader');
    expect(cocktailPageElement).toBeInTheDocument();

  });

  test('SHOULD render CategoryPage WHEN the route matches "/category/:category"', () => {
    render(
      <MemoryRouter initialEntries={['/category/Alcoholic']} initialIndex={0}>
        <App />
      </MemoryRouter>
    );

    const categoryPageElement = screen.getByTestId('loader');
    expect(categoryPageElement).toBeInTheDocument();

  }); 

  test('SHOULD renders NamePage WHEN the route matches "/name/:category"', () => {
    render(
      <BrowserRouter initialEntries={['/name/Mojito']} initialIndex={0}>
        <App/>
      </BrowserRouter>
    );

    const namePageElement = screen.getByTestId('loader');
    expect(namePageElement).toBeInTheDocument();
  });
});