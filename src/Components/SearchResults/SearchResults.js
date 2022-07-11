import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList searchResults={props.searchResults} onAdd={props.onAdd}/>
    </div>
  )
}

export default SearchResults;