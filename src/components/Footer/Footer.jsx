import React from 'react'
import "./Footer.css"
import LogoImage from "./logo.png";

export const Footer = () => {
  return (
    <footer id="footer-distributed" className="footer-distributed">

      <div className="footer-left">

        <h3><img data-testid="footer-logo" src={LogoImage}/></h3>

        

        <p className="footer-company-name">Drink Lab © 2023</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p>Lviv, Ukraine</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+(380)-989-567-876</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>About Us</span>
          Drink Lab is dedicated to good drinking and great living. We inspire, entertain and educate anyone — and everyone — interested in what happens in the glass and out of it. Cocktail recipes; home bar know-how; bottle recommendations; industry intel and job advice for the bar professional.Everyone from a curious drinker seeking a recipe to a top-tier bar professional researching how to reduce their business’ overhead relies on Drink Lab as a valued resource.
        </p>
        <div className="footer-icons">

          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/59/59439.png"/></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png"/></a>
          <a href="#"><img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"/></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>

        </div>

      </div>
    
     </footer>
  )
}
