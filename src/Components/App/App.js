import logo from './logo.svg';
import SearchBar from '../SearchBar/SearchBar.js'
import Playlist from '../Playlist/Playlist.js'
import SearchResults from '../SearchResults/SearchResults.js'
import './App.css';
import { useState } from 'react';

function App() {
  const searchResultsSample = [
    {
      id: 1,
      title: 'LA to Berlin',
      artist: 'Spencer Brown',
      album: 'Stream of Consciousness'
    }, 
    {
      id: 2,
      title: 'More Than Enough',
      artist: 'Alina Baraz',
      album: 'It Was Divine'
    },
    {
      id: 3,
      title: 'Bleach',
      artist: 'BROCKHAMPTON',
      album: 'Saturation III'
    }
  ];

  const [searchResults, setSearchResults] = useState(searchResultsSample);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults}/>
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
