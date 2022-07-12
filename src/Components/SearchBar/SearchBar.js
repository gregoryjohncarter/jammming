import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const handleSearchInput = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleSearchInput}/>
      <button className="SearchButton" onClick={props.onSearch}>SEARCH</button>
    </div>
  )
}

export default SearchBar;