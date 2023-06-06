import React from 'react';
import { fireEvent, render,  screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';


describe("Footer", () => {
  test("SHOULD render Footer", () => {
    render(<BrowserRouter>
         <Footer />
    </BrowserRouter>);
    const footerLogo = screen.getByTestId("footer-logo")
    expect(footerLogo).toBeInTheDocument();
  });
  
})