import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';

const SearchResults = (searchResults) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList searchResults={searchResults}/>
    </div>
  )
}

export default SearchResults;