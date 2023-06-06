import React from 'react';
import { MainHeader } from './MainHeader';
import "./WelcomeHeader.css";
import { ExploreBtn } from './ExploreBtn';
import { RandomBtnHeader } from './RandomBtnHeader';

const WelcomeHeader = () => {
  return (
    
      <header className ="welcome-header">
        <MainHeader/>
        <div className ="welcome-text">MIX,SERVE AND ENJOY.<br/>
        INSPIRATIONAL HOME BARTENDING.</div>
        <ExploreBtn/>
        <RandomBtnHeader/>
    </header>
  )
}

export {WelcomeHeader};