import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link, useLocation } from 'react-router-dom';

const Search = () => {
  const [clickedSearch, setClickedSearch] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleClick = () => {
    setClickedSearch(true);
  };

  useEffect(() => {
    setQuery('');
  }, [location.pathname]);

  return (
    <>
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
      <div data-testid="search" onClick={handleClick} className={`search ${clickedSearch ? "is-clicked" : ""}`}>
        <div className="search-container">
          <input
            data-testid="input-field"
            type="text"
            name="search"
            placeholder="Search..."
            className="search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {clickedSearch ? (<Link data-testid="submit" to={`/name/${query}`} params={{ category: query }} className="fas fa-search active"></Link>) : 
          <i className='fas fa-search'></i>}
          
        </div>
      </div>
    </>
  );
};

export { Search };
