import React from 'react';
import { fireEvent, render,  screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import { WelcomeHeader } from '../components/Header/WelcomeHeader';
import { MainHeader } from '../components/Header/MainHeader';
import { ExploreBtn } from '../components/Header/ExploreBtn';
import { RandomBtnHeader } from '../components/Header/RandomBtnHeader';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import SearchMock from '../components/Header/SearchMock.json'

fetchMock.enableMocks();

describe("WelcomeHeader", () => {
  test("SHOULD render Welcome Header", () => {
    render(<BrowserRouter>
         <WelcomeHeader />
    </BrowserRouter>);
    const MainHeader = screen.getByTestId("main-header")
    expect(MainHeader).toBeInTheDocument();
  });

  test("SHOULD link to random on button click", () =>{
    render(<BrowserRouter>
      <WelcomeHeader />
   </BrowserRouter>);
   const randomButton = screen.getByText("Get a random cocktail");
   fireEvent.click(randomButton);
   expect(randomButton).toBeInTheDocument();

  })

  test("SHOULD render Main Header", () => {
    render(<BrowserRouter>
     <MainHeader/>
   </BrowserRouter>);

   const search = screen.getByTestId("search")
   expect(search).toBeInTheDocument();
  })

  test("SHOULD redirect to /name/:name page WHEN input text into search AND submit it", () =>{
    render(<BrowserRouter>
      <MainHeader/>
    </BrowserRouter>);

    const search = screen.getByTestId("search")
    const inputField = screen.getByTestId("input-field");
    fireEvent.click(search);
    fireEvent.change(inputField, {target: {value: 'Mojito'}})
    const submitButton = screen.getByTestId("submit");
    fireEvent.click(submitButton);
    expect(window.location.pathname).toBe('/name/Mojito');
  })
  
})